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
  <div class="mb-2 flex h-full flex-col items-center rounded-lg border bg-white px-4 py-2 shadow">
    <img :src="product.image" :alt="product.title" class="my-auto block w-1/3" />
    <h2 class="px-4 py-2 text-xl text-emerald-600">{{ product.title }}</h2>
    <p class="w-full border-t-2 text-center text-2xl font-bold md:text-xl">
      RUB {{ product.price }}
    </p>
    <p>{{ product.description }}</p>
    <p class="font-bold">Category: {{ product.category }}</p>
    <p class="text-2xl">
      <span class="font-bold text-emerald-600">
        {{ product.rating.rate }}
      </span>
    </p>
  </div>
</template>
