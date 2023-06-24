<script setup>
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import ShoppingCart from '@/views/elements/ShoppingCart.vue'
import CheckoutForm from '@/components/form/CheckoutForm.vue'
</script>

<template>
  <BaseLayout>
    <div class="grid-checkout">
      <CheckoutForm />
      <ShoppingCart />
    </div>
  </BaseLayout>
</template>

<style scoped>
.grid-checkout {
  @apply grid grid-cols-2 gap-x-1 p-5;
  grid-template-columns: 3fr 2fr;
}
</style>
