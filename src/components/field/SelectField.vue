<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  name: String,
  label: String,
  categories: Array
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <select
    v-model="value"
    id="category"
    class="form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
  >
    <option selected disabled>Select Category...</option>
    <option v-for="category in props.categories" :key="category.id" :value="category.id">
      {{ category.title }}
    </option>
  </select>
  <span class="mt-2 pl-5 text-red-600">
    {{ errorMessage }}
  </span>
  <label class="form__label absolute -top-2 left-0 font-montserrat font-semibold" for="category">
    {{ props.label }}
  </label>
</template>

<style scoped></style>
