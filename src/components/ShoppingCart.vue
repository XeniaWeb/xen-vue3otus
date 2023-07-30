<script setup></script>

<template>
  <div class="content-end rounded-xl border border-gray-300 bg-white px-4 py-8">
    <h2 class="cart__title font-montserrat text-xl font-bold">Order Summary</h2>
    <p class="cart__sub-title mb-10 text-xs">
      Price can change depending on shipping method and taxes of your state.
    </p>
    <div class="cart__list mb-10">
      <ul>
        <li class="mb-8 h-[154px] rounded-xl border border-gray-300">
          <h3>Product title</h3>
          <img src="" alt="" />
        </li>
        <li class="h-[154px] rounded-xl border border-gray-300">
          <h3>Product title</h3>
          <img src="" alt="" />
        </li>
      </ul>
    </div>
    <ul class="total-list mb-8">
      <li class="flex items-center justify-between">
        <span class="block">Subtotal</span>
        <span class="block">56 CHF</span>
      </li>
      <li class="flex items-center justify-between">
        <span class="block">Tax</span>
        <span class="block">7% 3,92 CHF</span>
      </li>
      <li class="flex items-center justify-between">
        <span class="block">Shipping</span>
        <span class="block">0 CHF</span>
      </li>
    </ul>
    <form action="" class="mb-10 flex justify-between">
      <input
        type="text"
        class="relative w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
        placeholder="Apply promo code"
      />
      <button type="submit" class="absolute right-0 p-3 font-montserrat font-semibold">
        Apply now
      </button>
    </form>

    <div class="flex justify-between">
      <div class="">
        <h6 class="font-montserrat font-semibold text-gray-950">Total Order</h6>
        <p class="text-gray-300">Guaranteed delivery day: June 12, 2020</p>
      </div>
      <div class="text-3xl font-bold text-amber-700">89.84 USD</div>
    </div>
  </div>
</template>

<style scoped></style>
