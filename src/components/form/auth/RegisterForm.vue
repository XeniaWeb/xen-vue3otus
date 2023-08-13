<script setup>
import IconSecuritySafety from '@/components/icons/IconSecuritySafety.vue'
import { computed, onMounted, reactive } from 'vue'
import useAuth from '@/composables/auth'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import InputText from '@/components/field/InputText.vue'

const schema = yup.object({
  user: yup.string().required().label('Title '),
  email: yup.string().required().email().label('Price ')
})

const { handleSubmit } = useForm({
  validationSchema: schema
})

const onSubmit = handleSubmit((values) => {
  loginUser(values)
})

const { loginUser } = useAuth()
</script>

<template>
  <div class="flex flex-col px-8 py-8">
    <form
      @submit.prevent="onSubmit"
      class="mb-8 rounded-lg bg-amber-50/60 p-4 shadow shadow-amber-500"
    >
      <fieldset class="form__fieldset mb-2">
        <legend class="form__legend font-montserrat text-xl font-bold">Sign Up</legend>
        <div class="form__sub-legend mb-8 flex w-full">
          <span class="block">Please enter your data </span>
        </div>
        <div class="mb-8">
          <InputText
            name="name"
            type="text"
            placeholder="Your Name on this site..."
            label="Your name: "
          />
        </div>
        <div class="mb-8">
          <InputText name="email" type="email" placeholder="Your E-mail..." label="E-mail: " />
        </div>
        <div class="mb-8">
          <InputText name="password" type="password" label="Password: " />
        </div>
        <div class="mb-8">
          <InputText name="password_confirmation" type="password" label="Password confirm: " />
        </div>
      </fieldset>
      <button
        class="mb-2 rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-amber-500"
        type="submit"
      >
        Register
      </button>
    </form>
  </div>
</template>

<style scoped></style>
