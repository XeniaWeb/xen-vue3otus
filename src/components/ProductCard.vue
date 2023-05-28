<script setup>
const product = defineProps([
  'image',
  'title',
  'description',
  'price',
  'rating',
  'category',
])
</script>

<template>
  <div class="border bg-white rounded-lg shadow flex flex-col items-center mb-2 py-2 px-4 h-full ">
    <img :src=product.image :alt=product.title class="w-1/3 block  my-auto "/>
    <h2 class="text-emerald-600 text-xl py-2 px-4">{{ product.title }}</h2>
    <p class=" text-2xl md:text-xl font-bold w-full text-center border-t-2">RUB {{ product.price }}</p>
    <p>{{ product.description }}</p>
    <p class="font-bold">Category: {{ product.category }}</p>
    <p class="text-2xl">
      <span class="font-bold text-emerald-600">
         {{ product.rating.rate }}
      </span>
    </p>
  </div>
</template>
