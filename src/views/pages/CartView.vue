<script setup>
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import RegisterForm from '@/components/form/auth/RegisterForm.vue'
import ShoppingCart from "@/components/ShoppingCart.vue";
</script>

<template>
  <BaseLayout>
    <h2>Ваша корзина</h2>
    <ShoppingCart />
  </BaseLayout>
</template>

<style scoped></style>
