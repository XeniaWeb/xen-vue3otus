<script setup>
import BaseLayout from "@/views/layouts/BaseLayout.vue";
import products from '@/data/products.json';
import ProductCard from "@/components/ProductCard.vue";
</script>

<template>
  <BaseLayout>
    <div class="p-4 my-6">
      <h1 class="text-amber-700 pb-4 ">Страница продуктов</h1>
      <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 content-stretch">
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
