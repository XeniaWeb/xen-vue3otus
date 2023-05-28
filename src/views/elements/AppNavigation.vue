<script setup>
import {RouterLink} from "vue-router";
import IconDocumentation from "@/components/icons/IconDocumentation.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
import IconCommunity from "@/components/icons/IconCommunity.vue";
</script>

<template>
  <nav class="flex items-center main-nav">
    <ul class="main-nav__list ">
      <li>
        <RouterLink :to="{ name: 'home'}" class="main-nav__item">
          <IconDocumentation/>
          Home
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'products'}" class="main-nav__item">
          <IconTooling/>
          Products
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'about'}" class="main-nav__item">
          <IconCommunity/>
          About
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.router-link-active {
  @apply text-amber-600 border-b-2 border-amber-600;
}
</style>
