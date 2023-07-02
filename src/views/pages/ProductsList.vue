<script setup>
import { onMounted } from 'vue'
import BaseLayout from '@/views/layouts/BaseLayout.vue'
import useProducts from '@/composables/products'
import ProductCard from '@/components/ProductCard.vue'
// import AppLogoXeniaWeb from "@/views/elements/AppLogoXeniaWeb.vue";
import {RouterLink} from "vue-router";

const { products, getProducts } = useProducts()
onMounted(getProducts)
</script>

<template>
  <BaseLayout>
    <RouterLink :to="{ name: 'add_product' }" class="main-nav__item">
    <button >Add New</button>
    </RouterLink>
    <div class="my-6 p-4">
      <h1 class="pb-4 text-amber-700">Страница продуктов</h1>
      <ul
        class="grid grid-cols-1 content-stretch gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
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
