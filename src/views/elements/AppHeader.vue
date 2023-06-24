<script setup>
import AppLogoXeniaWeb from '@/views/elements/AppLogoXeniaWeb.vue'
import AppNavigation from '@/views/elements/AppNavigation.vue'
import { RouterLink } from 'vue-router'
import SearchForm from '@/components/form/SearchForm.vue'
import { UserIcon } from '@heroicons/vue/24/outline'
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <header class="sticky w-full bg-white/50">
    <div class="container mx-auto px-4">
      <nav class="top-menu flex justify-between py-2">
        <div class="top-menu__contacts contacts flex">
          <div class="contacts__item contacts__item--title">Chat with us</div>
          <a href="tel:+41764104101" class="contacts__item contacts__item--phone inline-block"
            >+41 76 410 4101</a
          >
          <a href="mailto:info@xeniaweb.ch" class="contacts__item contacts__item--email"
            >info@xeniaweb.ch</a
          >
        </div>
        <div class="main-nav flex items-center">
          <AppNavigation />
        </div>
      </nav>
      <div class="mx-auto my-4 flex max-w-7xl items-center justify-between">
        <RouterLink :to="{ name: 'home' }" class="main-nav__item">
          <AppLogoXeniaWeb
            class="logo"
            color-xenia="#fbbf24"
            height="60"
            src="@/assets/logo.svg"
            width="130"
          />
        </RouterLink>
        <SearchForm />
        <nav>
          <ul class="flex">
            <li>
              <a href="#">
                <UserIcon class="h-6 w-6 stroke-amber-700" />
              </a>
            </li>
            <li class="ml-4">
              <a href="#">
                <ShoppingCartIcon class="h-6 w-6 stroke-amber-700" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.contacts {
  @apply flex;
}

.contacts__item {
  @apply mr-5;

  &--title {
    @apply text-amber-700;
  }
}

.navigation__list {
  @apply flex;
}

.navigation__item {
  @apply ml-6;
}
</style>
