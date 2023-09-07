<script setup>
import IconSecuritySafety from '@/components/icons/IconSecuritySafety.vue'
import { computed, onMounted, reactive } from 'vue'
import useCategories from '@/composables/categories'
import useProducts from '@/composables/products'

const newProduct = reactive({
  title: '',
  price: 0,
  categoryId: null,
  description: '',
  image: null
})

const { categories, getCategories } = useCategories()
const { storeProduct, validationErrors } = useProducts()

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
    <form @submit.prevent="storeProduct(newProduct)">
      <fieldset class="form__fieldset mb-16">
        <legend class="form__legend font-montserrat text-xl font-bold">New Product</legend>
        <div class="form__sub-legend mb-8 flex w-full">
          <span class="block">Please enter product data</span>
        </div>

        <div class="mb-8">
          <input
            v-model="newProduct.title"
            id="product_title"
            class="form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
            placeholder="Product name..."
            type="text"
          />
          <label
            class="form__label absolute -top-2 left-0 font-montserrat font-semibold"
            for="product_title"
          >
            Title:
          </label>
          <div class="mt-1 text-red-600">
            <div v-for="message in validationErrors?.title">
              {{ message }}
            </div>
          </div>
        </div>
        <div class="mb-8">
          <select
            v-model="newProduct.categoryId"
            id="category"
            class="form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
          >
            <option selected disabled>Select Category...</option>
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.title }}
            </option>
          </select>
          <label
            class="form__label absolute -top-2 left-0 font-montserrat font-semibold"
            for="category"
          >
            Category:
          </label>
          <div class="mt-1 text-red-600">
            <div v-for="message in validationErrors?.categoryId">
              {{ message }}
            </div>
          </div>
        </div>
        <div class="mb-8">
          <input
            v-model="newProduct.price"
            id="price"
            class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
            placeholder="Price..."
            type="number"
          />
          <label class="absolute -top-2 left-0 font-montserrat font-semibold" for="price">
            Price:
          </label>
          <div class="mt-1 text-red-600">
            <div v-for="message in validationErrors?.price">
              {{ message }}
            </div>
          </div>
        </div>

        <div class="mb-8">
          <textarea
            v-model="newProduct.description"
            id="description"
            class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
            name="description"
            placeholder="Need a specific delivery day? Sending a gift? Let’s say ..."
            rows="4"
          ></textarea>
          <label class="absolute -top-2 left-0 font-montserrat font-semibold" for="description">
            Description:
          </label>
          <div class="mt-1 text-red-600">
            <div v-for="message in validationErrors?.description">
              {{ message }}
            </div>
          </div>
        </div>
        <div class="mb-8 inline-flex rounded-xl p-4 shadow">
          <input
            class="mb-6 file:rounded-lg file:border-none file:bg-amber-400 file:px-8 file:py-2 file:font-montserrat file:text-sm file:font-bold file:text-white file:transition-colors file:hover:bg-amber-500"
            name="image"
            type="file"
            @change="uploadFile"
          />
          <img v-if="newProduct.image" :src="previewPhotoPath" alt="" class="ml-8 h-36 w-auto" />
        </div>
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
