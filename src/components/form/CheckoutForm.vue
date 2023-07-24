<script setup>
import IconFedEx from '@/components/icons/IconFedEx.vue'
import IconDhl from '@/components/icons/IconDhl.vue'
import IconBitcoin from '@/components/icons/IconBitcoin.vue'
import IconPayPal from '@/components/icons/IconPayPal.vue'
import IconVisa from '@/components/icons/IconVisa.vue'
import IconMasterCard from '@/components/icons/IconMasterCard.vue'
import IconSecuritySafety from '@/components/icons/IconSecuritySafety.vue'
import {reactive} from "vue";
import useCustomers from "@/composables/customer";

const { storeCustomer } = useCustomers()

const newCustomer = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  country: '',
  zip: '',
  diffAddress: false,
  deliveryAddress: '',
  comment: '',
  billMethod: null,
  paymentMethod: null,
  newsletter: true,
  terms: false,
})
</script>

<template>
  <div class="flex flex-col px-8 py-2">
    <form @submit.prevent="storeCustomer(newCustomer)">
      <!-- TODO разделить на компоненты -->
      <!-- Billing info-->
      <fieldset class="form__fieldset mb-16">
        <legend class="form__legend font-montserrat text-xl font-bold">Billing info</legend>
        <div class="form__sub-legend mb-8 flex w-full justify-between">
          <span class="block">Please enter your billing info</span>
          <span class="block">Step 1 of 5</span>
        </div>
        <div class="input-group mb-8 grid grid-cols-2 gap-8">
          <div>
            <input
              v-model="newCustomer.firstName"
              id="first_name"
              name="first_name"
              type="text"
              class="form__input relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Nina"
            />
            <label
              for="first_name"
              class="form__label absolute -top-2 left-0 font-montserrat font-semibold"
            >
              First name:
            </label>
          </div>
          <div>
            <input
              v-model="newCustomer.lastName"
              id="last_name"
              name="last_name"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Richi"
            />
            <label for="last_name" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Last name:
            </label>
          </div>
          <div>
            <input
              v-model="newCustomer.email"
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
          <div>
            <input
              v-model="newCustomer.phone"
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
          <div>
            <input
              v-model="newCustomer.address"
              id="address"
              name="address"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Address"
            />
            <label for="address" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Address:
            </label>
          </div>
          <div>
            <input
              v-model="newCustomer.city"
              id="city"
              name="city"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Town or city"
            />
            <label for="city" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Town / City:
            </label>
          </div>
          <div>
            <input
              v-model="newCustomer.country"
              id="country"
              name="country"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Country"
            />
            <label for="country" class="absolute -top-2 left-0 font-montserrat font-semibold">
              Country:
            </label>
          </div>
          <div>
            <input
              v-model="newCustomer.zip"
              id="zip"
              name="zip"
              type="text"
              class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
              placeholder="Postal code or ZIP"
            />
            <label for="zip" class="absolute -top-2 left-0 font-montserrat font-semibold">
              ZIP / Postal code:
            </label>
          </div>
        </div>
        <div class="mt-3 inline-flex rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs">
          <input
            v-model="newCustomer.diffAddress"
            class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
            type="checkbox"
            name="diff_address"
          />
          <label for="zip" class="ml-4 font-openSans text-[14px]">
            Ship to a different address?
          </label>
        </div>
        <div v-show="newCustomer.diffAddress === true" class="mt-8">
          <input
            v-model="newCustomer.deliveryAddress"
            id="delivery_address"
            name="delivery_address"
            type="text"
            class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
            placeholder="Different delivery address"
          />
          <label for="delivery_address" class="absolute -top-2 left-0 font-montserrat font-semibold">
            Delivery address:
          </label>
        </div>
      </fieldset>
      <!-- Billing method-->
      <fieldset class="mb-16 rounded-xl">
        <legend class="font-montserrat text-xl font-bold">Billing method</legend>
        <div class="mb-8 flex w-full justify-between">
          <span class="block">Please enter your billing method</span>
          <span class="block">Step 2 of 5</span>
        </div>
        <div
          class="mt-3 grid w-full grid-cols-3 items-center rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"
        >
          <div class="">
            <input
              v-model="newCustomer.billMethod"
              id="fedexRadio"
              class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
              type="radio"
              name="bill_method"
              value="fedex"
            />
            <label for="fedexRadio" class="ml-4 font-openSans text-[14px] font-semibold"> FedEx </label>
          </div>
          <div class="flex justify-self-end">
            <span class="font-semibold text-amber-600">+32 CHF</span>
            <span class="px-2 font-semibold">Additional price</span>
          </div>
          <IconFedEx class="justify-self-end" />
        </div>
        <div
          class="mt-3 grid w-full grid-cols-3 items-center rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"
        >
          <div class="">
            <input
              v-model="newCustomer.billMethod"
              id="dhlRadio"
              class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
              type="radio"
              name="bill_method"
              value="dhl"
            />
            <label for="dhlRadio" class="ml-4 font-openSans text-[14px] font-semibold"> DHL </label>
          </div>
          <div class="flex justify-self-end">
            <span class="font-semibold text-amber-600">+15 CHF</span>
            <span class="px-2 font-semibold">Additional price</span>
          </div>
          <IconDhl class="justify-self-end" />
        </div>
      </fieldset>
      <!-- Payment method-->
      <fieldset class="mb-16 rounded-xl">
        <legend class="font-montserrat text-xl font-bold">Payment method</legend>
        <div class="mb-8 flex w-full justify-between">
          <span class="block">Please enter your payment method</span>
          <span class="block">Step 3 of 5</span>
        </div>
        <div
          class="mt-3 grid w-full grid-cols-2 items-center rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"
        >
          <div class="">
            <input
              v-model="newCustomer.paymentMethod"
              id="creditCard"
              class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
              type="radio"
              name="payment_method"
              value="credit_card"
              checked
            />
            <label for="creditCard" class="ml-4 font-openSans text-[14px] font-semibold">
              Credit card
            </label>
          </div>
          <div class="flex items-center justify-end">
            <IconVisa />
            <IconMasterCard class="ml-2" />
          </div>
        </div>
        <div
          class="mt-3 grid w-full grid-cols-2 items-center rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"
        >
          <div class="">
            <input
              v-model="newCustomer.paymentMethod"
              id="paypal"
              class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
              type="radio"
              name="payment_method"
              value="paypal"
            />
            <label for="paypal" class="ml-4 font-openSans text-[14px] font-semibold"> PayPal </label>
          </div>
          <IconPayPal class="justify-self-end" />
        </div>
        <div
          class="mt-3 grid w-full grid-cols-2 items-center rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs"
        >
          <div class="">
            <input
              v-model="newCustomer.paymentMethod"
              id="bitcoin"
              class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
              type="radio"
              name="payment_method"
              value="bitcoin"
            />
            <label for="bitcoin" class="ml-4 font-openSans text-[14px] font-semibold"> Bitcoin </label>
          </div>
          <IconBitcoin class="justify-self-end" />
        </div>
      </fieldset>
      <!-- Additional information-->
      <fieldset class="mb-16 rounded-xl">
        <legend class="font-montserrat text-xl font-bold">Additional information</legend>
        <div class="mb-8 flex w-full justify-between">
          <span class="block">Need something else? We will make it for you!</span>
          <span class="block">Step 4 of 5</span>
        </div>
        <div>
          <textarea
            v-model="newCustomer.comment"
            rows="4"
            id="comment"
            name="comment"
            class="relative mt-3 w-full rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs placeholder:text-xs placeholder:text-gray-400"
            placeholder="Need a specific delivery day? Sending a gift? Let’s say ..."
          ></textarea>
          <label for="comment" class="absolute -top-2 left-0 font-montserrat font-semibold">
            Order notes:
          </label>
        </div>
      </fieldset>
      <!-- Confirmation-->
      <fieldset class="mb-16 rounded-xl">
        <legend class="font-montserrat text-xl font-bold">Confirmation</legend>
        <div class="mb-8 flex w-full justify-between">
          <span class="block"
            >We are getting to the end. Just few clicks and your order si ready!</span
          >
          <span class="block">Step 5 of 5</span>
        </div>
        <div class="mt-3 inline-flex rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs">
          <input
            v-model="newCustomer.newsletter"
            id="newsletter"
            class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
            type="checkbox"
            name=""
            value=""
          />
          <label for="newsletter" class="ml-4 font-openSans text-[14px]">
            I agree with sending an Marketing and newsletter emails. No spam, promised!
          </label>
        </div>
        <div class="mt-3 inline-flex rounded-xl border border-gray-300 bg-gray-50 p-3 text-xs">
          <input
            v-model="newCustomer.terms"
            id="terms"
            class="border border-gray-300 bg-gray-50 checked:bg-amber-600 focus:text-amber-600"
            type="checkbox"
            name=""
            value=""
          />
          <label for="terms" class="ml-4 font-openSans text-[14px]">
            I agree with our terms and conditions and privacy policy.
          </label>
        </div>
      </fieldset>
      <button
        :disabled="newCustomer.terms !== true"
        type="submit"
        class="disabled:opacity-75 mb-8 rounded-lg border border-amber-700 bg-amber-600 px-12 py-3 font-montserrat text-sm font-bold text-white transition-colors enabled:hover:bg-amber-500 disabled:cursor-not-allowed"
      >
        Complete order
      </button>
      <div class="mb-2 w-1/3">
        <IconSecuritySafety />
        <h6 class="my-2 font-montserrat font-semibold">All your data are safe</h6>
        <p class="text-xs text-gray-400">
          We are using the most advanced security to provide you the best experience ever.
        </p>
      </div>
    </form>
  </div>
</template>
