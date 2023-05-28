<script setup>
import {RouterLink} from "vue-router";
import AppLogoXeniaWeb from "@/views/elements/AppLogoXeniaWeb.vue";
</script>

<template>
  <div class="bg-amber-600/10 min-h-[100px] mt-auto p-4">
    <div class="flex justify-between items-center mx-auto max-w-7xl">
      <div class="text-2xl text-amber-600">
        Footer
      </div>

      <RouterLink :to="{ name: 'home'}" class="main-nav__item">
        <AppLogoXeniaWeb color-xenia="#fbbf24" class="logo" src="@/assets/logo.svg" width="130" height="60"/>
      </RouterLink>

    </div>
  </div>
</template>
