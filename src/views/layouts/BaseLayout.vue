<script setup>
import AppHeader from '@/views/elements/AppHeader.vue'
import AppFooter from '@/views/elements/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen grid-base">
    <AppHeader/>
    <main class="max-w-7xl mx-auto">
      <slot/>
    </main>
      <AppFooter/>
  </div>
</template>

<style scoped>
.grid-base {
  display: grid;
  grid-template-areas: "top-menu" "main" "footer";
  grid-template-rows: auto 1fr auto;
}
</style>
