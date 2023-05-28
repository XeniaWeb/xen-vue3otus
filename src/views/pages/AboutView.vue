<script setup>
import BaseLayout from "@/views/layouts/BaseLayout.vue";
</script>

<template>
  <BaseLayout>
    <div class="grid-about">
      <h1 class="text-amber-700 pb-4">This is an about page</h1>
      <p>
        Как вы видели выше, мы создали класс специально для карточки без изображения, поскольку нам не нужен display:
        flex на родительском элементе. Вопрос в том, можем ли мы это сделать в CSS, без второго класса?
        Ну, вот где CSS :has приходит на помощь. Это может помочь нам проверить, есть ли у элемента .card изображение
        .card__image или нет.
      </p>
    </div>
  </BaseLayout>
</template>

<style scoped>
.grid-about {
  @apply grid gap-4 place-content-center h-48 p-5 md:p-48;
}
</style>
