<script setup>
import { RouterLink } from 'vue-router'
import AppLogoXeniaWeb from '@/views/elements/AppLogoXeniaWeb.vue'
import AppNavigation from '@/views/elements/AppNavigation.vue'
</script>

<template>
  <div class="mt-auto min-h-[100px] bg-amber-600/10 p-4">
    <div class="container mx-auto flex items-center justify-between">
      <nav>
        <AppNavigation />
      </nav>
      <div class="text-amber-600">Footer</div>

      <RouterLink :to="{ name: 'home' }" class="main-nav__item">
        <AppLogoXeniaWeb
          class="logo"
          color-xenia="#fbbf24"
          height="60"
          src="@/assets/logo.svg"
          width="130"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-nav__list {
  @apply block;
}
</style>
