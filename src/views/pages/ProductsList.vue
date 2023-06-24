<script setup>
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import products from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'
</script>

<template>
  <BaseLayout>
    <div class="my-6 p-4">
      <h1 class="pb-4 text-amber-700">Страница продуктов</h1>
      <ul class="grid grid-cols-1 content-stretch gap-4 md:grid-cols-2 lg:grid-cols-3">
        <li v-for="product in products" :key="product.id" class="inline-block">
          <ProductCard
            :title="product.title"
            :price="product.price"
            :category="product.category"
            :image="product.image"
            :rating="product.rating"
            :description="product.description"
          />
        </li>
      </ul>
    </div>
  </BaseLayout>
</template>
