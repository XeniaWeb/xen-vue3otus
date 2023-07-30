<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  name: String,
  type: {
    type: String,
    default: 'text'
  },
  placeholder: String,
  label: String
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <input
    v-model="value"
    id="text_input"
    class="form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
    :placeholder="props.placeholder"
    :type="props.type"
  />
  <span class="mt-2 pl-5 text-red-600">
    {{ errorMessage }}
  </span>
  <label class="form__label absolute -top-2 left-0 font-montserrat font-semibold" for="text_input">
    {{ props.label }}
  </label>
</template>

<style scoped></style>
