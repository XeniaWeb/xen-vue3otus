<script setup>
import IconSecuritySafety from '@/components/icons/IconSecuritySafety.vue'
import { computed, onMounted, reactive } from 'vue'
import useCategories from '@/composables/categories'
import useProducts from '@/composables/products'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import InputText from '@/components/field/InputText.vue'
import SelectField from '@/components/field/SelectField.vue'

const schema = yup.object({
  title: yup.string().required().label('Title '),
  price: yup.number().required().label('Price '),
  categoryId: yup.string().required().label('Category ID '),
  description: yup.string().required().label('Description ')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

// const { handleSubmit } = useForm({
//   validationSchema: yup.object({
//     title: yup.string().required().label('Title '),
//     price: yup.number().required().label('Price '),
//     categoryId: yup.string().required().label('Category ID '),
//     description: yup.string().required().label('Description '),
//     image: yup.object().nullable().label('Image '),
//   })
// });

const onSubmit = handleSubmit((values) => {
  console.log(values)
  storeProduct(values)
})

const newProduct = reactive({
  //   title: '',
  //   price: 0,
  //   categoryId: null,
  //   description: '',
  image: null
})

const { categories, getCategories } = useCategories()
const { storeProduct } = useProducts()

onMounted(getCategories)

const uploadFile = (e) => {
  newProduct.image = e.target.files[0]
}

const previewPhotoPath = computed(() => {
  if (newProduct.image) {
    return URL.createObjectURL(newProduct.image)
  }
  return '#'
})
</script>

<template>
  <div class="flex flex-col px-8 py-8">
    <form @submit="onSubmit" class="mb-8 rounded-lg bg-amber-50/60 p-4 shadow shadow-amber-500">
      <fieldset class="form__fieldset mb-2">
        <legend class="form__legend font-montserrat text-xl font-bold">New Product</legend>
        <div class="form__sub-legend mb-8 flex w-full">
          <span class="block">Please enter product data</span>
        </div>
        <div class="mb-8">
          <InputText name="title" type="text" placeholder="Title of product..." label="Title: " />
        </div>
        <div class="mb-8">
          <InputText name="price" type="number" label="Price: " />
        </div>
        <div class="mb-8">
          <InputText name="description" placeholder="Description..." label="Description: " />
        </div>
        <div class="mb-8">
          <SelectField name="categoryId" label="Категория товара " :categories="categories" />
        </div>
        <!--        <div class="mb-8">-->
        <!--          <InputText name="image" type="file" label="Картинка: " />-->
        <!--        </div>-->
      </fieldset>
      <button
        class="mb-2 rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-amber-500"
        type="submit"
      >
        Save product without Image
      </button>
    </form>

    <form @submit="onSubmit" class="mb-8 rounded-lg bg-blue-50/70 p-4 shadow shadow-blue-500">
      <fieldset class="form__fieldset mb-16">
        <legend class="form__legend font-montserrat text-xl font-bold">New Product</legend>
        <div class="form__sub-legend mb-8 flex w-full">
          <span class="block">Please enter product data</span>
        </div>
        <div class="mb-8">
          <InputText name="title" placeholder="Title of product..." label="Title: " />
        </div>
        <div class="mb-8">
          <InputText name="price" type="number" label="Price: " />
        </div>
        <div class="mb-8">
          <InputText name="description" placeholder="Description..." label="Description: " />
        </div>
        <div class="mb-8">
          <SelectField name="categoryId" label="Категория товара " :categories="categories" />
        </div>

        <!--Загрузка фото-->
        <div class="mb-8 inline-flex rounded-xl p-4 shadow">
          <input
            v-bind="value"
            class="mb-6 file:rounded-lg file:border-none file:bg-amber-400 file:px-8 file:py-2 file:font-montserrat file:text-sm file:font-bold file:text-white file:transition-colors file:hover:bg-amber-500"
            name="image"
            type="file"
            @change="uploadFile"
          />
          <img v-if="newProduct.image" :src="previewPhotoPath" alt="" class="ml-8 h-36 w-auto" />
        </div>
        <!--Конец Загрузки фото-->
      </fieldset>
      <button
        class="mb-8 rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-amber-500"
        type="submit"
      >
        Save product
      </button>
      <div class="mb-2 w-1/3">
        <IconSecuritySafety />
        <h6 class="my-2 font-montserrat font-semibold">All your data are safe</h6>
        <p class="text-xs text-gray-400">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
