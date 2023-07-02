<script setup>
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import { RouterLink } from 'vue-router'
import { computed, reactive } from 'vue'

const searchText = reactive({
  text: '',
  name: '',
  photo: null
})
function mySubmit() {
  console.log('Воооот!', searchText.name, searchText.text, searchText.photo)
}

const uploadFile = (e) => {
  console.log(e.target.files)
  searchText.photo = e.target.files[0]
}

const previewPhotoPath = computed(() => {
  if (searchText.photo) {
    return URL.createObjectURL(searchText.photo)
  }
  return '#'
})
</script>

<template>
  <BaseLayout>
    <div class="grid-home">
      <!--      <p class="p-2 text-2xl text-amber-700">{{ searchText.text }}{{ searchText.name }}</p>-->
      <!--      <form class="search-form" @submit.prevent="mySubmit">-->
      <!--        <input-->
      <!--          v-model.lazy="searchText.name"-->
      <!--          class="search-form__input"-->
      <!--          placeholder="Искать здесь..."-->
      <!--          type="text"-->
      <!--        />-->
      <!--        <input-->
      <!--          v-model.lazy="searchText.text"-->
      <!--          class="search-form__input"-->
      <!--          placeholder="Искать здесь..."-->
      <!--          type="text"-->
      <!--        />-->
      <!--        <input-->
      <!--          class="search-form__input"-->
      <!--          name="photo"-->
      <!--          placeholder="Искать здесь..."-->
      <!--          type="file"-->
      <!--          @change="uploadFile"-->
      <!--        />-->
      <!--        <img :src="previewPhotoPath" alt="" class="w-full" />-->

      <!--        <button class="search-form__btn" type="submit">-->
      <!--          <MagnifyingGlassIcon class="search-form__icon" />-->
      <!--        </button>-->
      <!--      </form>-->

      <h1 class="pb-4 text-amber-700">Это домашняя страница</h1>
      <div class="block text-xl">
        <p>Список товаров вы найдете на странице Products или по кнопке ниже</p>
        <RouterLink :to="{ name: 'products' }" class="btn-primary"> Список товаров</RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.grid-home {
  @apply grid place-content-center gap-4 p-5 md:p-48;
}

.btn-primary {
  @apply mt-6 block max-w-[240px] rounded-lg bg-amber-600 px-4 py-2 text-center text-amber-100 hover:bg-amber-500;
}

.search-form {
  width: 500px;
  margin: 0 auto;
}

.search-form__input {
  padding: 10px 40px 10px 25px;
  border: #d1d1d1 1px solid;

  background: #f9f9f9;
  border-radius: 12px;

  position: relative;
  width: 100%;
  @apply outline-1 outline-offset-1 outline-amber-500 focus:outline-offset-1 focus:outline-amber-500;
}

.search-form__btn {
  outline: none;

  height: 42px;
  width: 42px;
  position: absolute;
  top: 2px;
  right: 0;
  cursor: pointer;
}

.search-form__icon {
  @apply absolute right-2 top-2 h-7 w-7 stroke-amber-500 hover:stroke-amber-700;
}
</style>
