<script setup>
import { RouterLink } from 'vue-router'
import {
  BookOpenIcon,
  BanknotesIcon,
  EnvelopeIcon,
  SparklesIcon,
  Square3Stack3DIcon
} from '@heroicons/vue/24/outline'
</script>

<template>
  <ul class="main-nav__list">
    <li>
      <RouterLink :to="{ name: 'products.index' }" class="main-nav__link">
        <Square3Stack3DIcon class="main-nav__icon" />
        Products
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'about' }" class="main-nav__link">
        <SparklesIcon class="main-nav__icon" />
        About
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'contacts' }" class="main-nav__link">
        <EnvelopeIcon class="main-nav__icon" />
        Contacts
      </RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'checkout' }" class="main-nav__link">
        <BanknotesIcon class="main-nav__icon" />
        Checkout
      </RouterLink>
    </li>
    <li>
      <a class="main-nav__link" href="https://blog.xeniaweb.ru/" target="_blank">
        <BookOpenIcon class="main-nav__icon" />
        Blog
      </a>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.main-nav__list {
  @apply flex items-center gap-8;
}

.main-nav__item {
  @apply mx-4 flex items-center gap-2 text-2xl text-amber-600;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    @apply text-amber-500;
  }
}

.main-nav__link {
  @apply flex items-center border-b border-transparent text-amber-800;
}

.router-link-active {
  @apply border-b border-amber-700 text-amber-800;
}

.main-nav__icon {
  @apply mr-2 h-4 w-4;
}
</style>
