<script setup>
import AppLogoXeniaWeb from "@/views/elements/AppLogoXeniaWeb.vue";
import AppNavigation from "@/views/elements/AppNavigation.vue";
import {RouterLink} from "vue-router";
</script>

<template>
  <header class="bg-white/50 py-4">
    <div class="flex justify-between max-w-7xl mx-auto">

      <RouterLink :to="{ name: 'home'}" class="main-nav__item">
        <AppLogoXeniaWeb color-xenia="#fbbf24" class="logo" src="@/assets/logo.svg" width="130" height="60"/>
      </RouterLink>

      <AppNavigation/>

    </div>
  </header>
</template>
