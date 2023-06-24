<script setup></script>

<template>
  <div class="border-grey-300 rounded-xl border bg-white px-8 py-2">
    <form>
      <fieldset class="mb-8 rounded-xl">
        <legend class="font-montserrat text-xl font-bold">Billing info</legend>
        <div class="mb-8 flex w-full justify-between">
          <span class="block">Please enter your billing info</span>
          <span class="block">Step 1 of 5</span>
        </div>
        <div class="grid grid-cols-2 gap-8">
          <div class="">
            <input
              id="fname"
              name="fname"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Nina"
            />
            <label for="fname" class="absolute -top-2 left-0 font-montserrat font-semibold">
              First name:
            </label>
          </div>
          <div class="">
            <input
              id="lname"
              name="lname"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Richi"
            />
            <label for="lname" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Last name:
            </label>
          </div>
          <div class="">
            <input
              id="email"
              name="email"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="nina@example.com"
            />
            <label for="email" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Email address:
            </label>
          </div>
          <div class="">
            <input
              id="phone"
              name="phone"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="+41 070 000 00 00"
            />
            <label for="phone" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Phone number:
            </label>
          </div>
        </div>
      </fieldset>
      <button
        type="submit"
        class="rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors hover:bg-amber-500"
      >
        Complete order
      </button>
    </form>
  </div>
</template>
