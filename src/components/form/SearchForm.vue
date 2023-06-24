<script setup>
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const searchText = ref('')
</script>

<template>
  <form class="search-form" @submit.prevent="mySubmit">
    <input
      v-model.lazy="searchText"
      class="search-form__input"
      placeholder="Искать здесь..."
      type="text"
    />
    <button class="search-form__btn" type="submit">
      <MagnifyingGlassIcon class="search-form__icon" />
    </button>
  </form>
</template>

<style scoped>
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
  @apply outline-none focus:ring-amber-500 focus:ring-offset-1;
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
  @apply absolute right-2 top-2 h-7 w-7 stroke-amber-500  hover:stroke-amber-700;
}
</style>
