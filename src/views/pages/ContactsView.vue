<script setup>
import BaseLayout from '@/views/layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <div class="grid-about">
      <h1 class="pb-4 text-amber-700">This is Contacts Page</h1>
    </div>
  </BaseLayout>
</template>

<style scoped>
.grid-about {
  @apply grid h-48 place-content-center gap-4 p-5 md:p-48;
}
</style>
