<script setup>
// import IconSecuritySafety from '@/components/icons/IconSecuritySafety.vue'
import { computed, onMounted, reactive } from 'vue'
import useAuth from '@/composables/auth'
// import { useForm } from 'vee-validate'
// import * as yup from 'yup'
// import InputText from '@/components/field/InputText.vue'

const { user, loginForm, validationErrors, processing, submitLogin, getUser, loginUser } = useAuth()
</script>

<template>
  <form @submit.prevent="submitLogin">
    <!-- Email -->
    <div>
      <label for="email" class="block text-sm font-medium text-gray-700"> Email </label>
      <input
        v-model="loginForm.email"
        id="email"
        type="email"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
        autofocus
        autocomplete="username"
      />
      <!-- Validation Errors -->
      <div class="mt-1 text-red-600">
        <div v-for="message in validationErrors?.email">
          {{ message }}
        </div>
      </div>
    </div>

    <!-- Password -->
    <div class="mt-4">
      <label for="password" class="block text-sm font-medium text-gray-700"> Password </label>
      <input
        v-model="loginForm.password"
        id="password"
        type="password"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        required
        autocomplete="current-password"
      />
      <!-- Validation Errors -->
      <div class="mt-1 text-red-600">
        <div v-for="message in validationErrors?.password">
          {{ message }}
        </div>
      </div>
    </div>

    <!-- Remember me -->
    <div class="mt-4 block">
      <label class="flex items-center">
        <input
          type="checkbox"
          name="remember"
          v-model="loginForm.remember"
          class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <span class="ml-2 text-sm text-gray-600">Remember me</span>
      </label>
    </div>

    <!-- Buttons -->
    <div class="mt-4 flex items-center justify-end">
      <button
        class="focus:shadow-outline-gray ml-4 inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:border-gray-900 focus:outline-none active:bg-gray-900"
        :class="{ 'opacity-25': processing }"
        :disabled="processing"
      >
        LogIn
      </button>
    </div>
  </form>
</template>
<!--<template>-->
<!--  <div class="flex flex-col px-8 py-8">-->
<!--    <form @submit.prevent="onSubmit" class="mb-8 rounded-lg bg-amber-50/60 p-4 shadow shadow-amber-500">-->
<!--      <fieldset class="form__fieldset mb-2">-->
<!--        <legend class="form__legend font-montserrat text-xl font-bold">Sign In</legend>-->
<!--        <div class="form__sub-legend mb-8 flex w-full">-->
<!--          <span class="block">Please enter your data </span>-->
<!--        </div>-->
<!--        <div class="mb-8">-->
<!--          <InputText name="email" type="email"  placeholder="Your E-mail..." label="E-mail: " />-->
<!--        </div>-->
<!--        <div class="mb-8">-->
<!--          <InputText name="password" type="password" placeholder="Your Name on this site..." label="Password: " />-->
<!--        </div>-->
<!--      </fieldset>-->
<!--      <button-->
<!--        class="mb-2 rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-amber-500"-->
<!--        type="submit"-->
<!--      >-->
<!--        Login-->
<!--      </button>-->
<!--    </form>-->
<!--  </div>-->
<!--</template>-->

<style scoped></style>
