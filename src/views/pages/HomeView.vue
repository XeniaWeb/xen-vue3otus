<script setup>
import BaseLayout from "@/views/layouts/BaseLayout.vue";
import {RouterLink} from "vue-router";
</script>

<template>
  <BaseLayout>
    <div class="grid-home">
      <h1 class="text-amber-700 pb-4">Это домашняя страница</h1>
      <div class="block text-xl">
        <p>
          Список товаров вы найдете на странице Products или по кнопке ниже
        </p>
        <RouterLink :to="{ name: 'products'}" class="btn-primary">
          Список товаров
        </RouterLink>
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.grid-home {
  @apply grid gap-4 place-content-center h-48 p-5 md:p-48;
}

.btn-primary {
  @apply block max-w-[240px] text-center mt-6 py-2 px-4 bg-amber-600 hover:bg-amber-500 text-amber-100 rounded-lg;
}
</style>
