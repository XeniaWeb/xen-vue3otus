<script setup>
import { onMounted } from 'vue'
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import useProducts from '@/composables/products'
import ProductCard from '@/components/ProductCard.vue'
import { RouterLink } from 'vue-router'

const { products, getProducts } = useProducts()
onMounted(getProducts)
</script>

<template>
  <BaseLayout>
    <div class="my-6 p-4">
      <div class="mb-4 flex items-center justify-between">
        <h1 class="font-montserrat text-amber-500">Products Page</h1>
        <div class="flex items-center justify-between">
          <RouterLink :to="{ name: 'add_product_non_validate' }" class="main-nav__item">
            <button class="btn-primary text-sm font-bold">Add New  w/o Validate</button>
          </RouterLink>
          <RouterLink :to="{ name: 'add_product' }" class="main-nav__item pl-2">
            <button class="btn-primary text-sm font-bold">Add New</button>
          </RouterLink>
        </div>
      </div>
      <ul class="grid grid-cols-1 content-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="product in products" :key="product.id" class="inline-block">
          <ProductCard
            :categoryId="product.categoryId"
            :categoryTitle="product.categoryTitle"
            :description="product.description"
            :image="product.image"
            :price="product.price"
            :title="product.title"
          />
        </li>
      </ul>
    </div>
  </BaseLayout>
</template>

<style scoped>
.btn-primary {
  @apply block max-w-[240px] rounded-lg border-2 border-amber-500 px-2 py-2 text-center font-montserrat text-amber-500 transition-colors hover:bg-amber-500 hover:text-white;
}
</style>
