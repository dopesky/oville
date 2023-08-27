<script setup lang="ts">
import OverlayedImage from '@/components/OverlayedImage.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { onIntersecting } from '@/main'
import { AtSymbolIcon, MapPinIcon, PhoneIcon } from '@heroicons/vue/24/solid'
import { vIntersectionObserver } from '@vueuse/components'
</script>
<template>
  <div class="relative slide-in-up" v-intersection-observer="onIntersecting">
    <OverlayedImage
      src="https://png.pngtree.com/background/20210710/original/pngtree-company-profile-corporate-culture-brochure-cross-page-design-background-material-picture-image_1011696.jpg"
      alt="The Firm"
    />
    <h1
      class="absolute font-semibold bottom-3 border-b border-sky-200 w-full max-w-[calc(100%-2rem)] left-2 text-sky-200 text-3xl"
    >
      Contact Us
    </h1>
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 px-3 gap-5 items-start mt-2">
    <div v-intersection-observer="onIntersecting" class="slide-in-left">
      <h2 class="text-lg font-semibold border-b border-blue-800 mb-2">Information</h2>
      <table class="table-fixed w-full text-sm mx-1">
        <thead>
          <tr>
            <th class="w-[85px]"></th>
            <th class="w-[calc(100%-85px)]"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th valign="top">
              <div class="font-semibold flex gap-1">
                <MapPinIcon class="h-4 w-4" />
                Address:
              </div>
            </th>
            <td>
              1234 Main Street, Kingston 10, Jamaica 1234 Main Street, Kingston 10, Jamaica 1234
              Main Street, Kingston 10, Jamaica 1234 Main Street, Kingston 10, Jamaica
            </td>
          </tr>
          <tr>
            <th valign="top">
              <div class="font-semibold flex gap-1">
                <PhoneIcon class="h-4 w-4" />
                Phone:
              </div>
            </th>
            <td class="flex flex-col">
              <a
                v-for="tel in ['0712345678', '0110568831', '0787654321']"
                :key="tel"
                :href="`tel:${tel}`"
                class="text-sky-600 truncate hover:text-sky-800 hover:underline"
              >
                {{ tel }}
              </a>
            </td>
          </tr>
          <tr>
            <th valign="top">
              <div class="font-semibold flex gap-1">
                <AtSymbolIcon class="h-4 w-4" />
                Email:
              </div>
            </th>
            <td class="flex flex-col">
              <a
                v-for="mail in ['johndoe@example.com', 'janedoe@example.com', 'whoism@example.com']"
                :key="mail"
                :href="`mailto:${mail}`"
                class="text-sky-600 truncate hover:text-sky-800 hover:underline"
              >
                {{ mail }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div
      v-intersection-observer="onIntersecting"
      class="flex flex-col gap-3 slide-in-right delay-200"
    >
      <h2 class="text-lg font-semibold border-b border-blue-800">Inquiries</h2>
      <div class="flex flex-col">
        <input
          type="text"
          placeholder="Name"
          class="border-gray-300 w-full focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm"
        />
        <span class="text-xs text-emerald-600">e.g John Doe</span>
      </div>
      <div class="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          class="border-gray-300 w-full focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm"
        />
        <span class="text-xs text-emerald-600">e.g johndoe@example.com</span>
      </div>
      <div class="flex flex-col">
        <textarea
          placeholder="Message"
          rows="4"
          class="border-gray-300 focus:border-sky-500 focus:ring-sky-500 rounded-md shadow-sm"
        />
        <span class="text-xs text-emerald-600">e.g I have an inquiry . . .</span>
      </div>
      <div class="flex justify-end">
        <PrimaryButton>Get in touch!</PrimaryButton>
      </div>
    </div>
  </div>
  <hr class="border-1 border-blue-200 mx-1 mt-4" />
  <h1
    class="mt-2 mx-2 text-xl text-center underline slide-in-up"
    v-intersection-observer="onIntersecting"
  >
    Our Location
  </h1>
  <iframe
    v-intersection-observer="onIntersecting"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9633.621109969456!2d-2.301343058034589!3d53.464014026219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bae72e7e47f69%3A0x6c930e96df4455fe!2sOld%20Trafford!5e0!3m2!1sen!2ske!4v1693093764783!5m2!1sen!2ske"
    class="slide-in-down w-[calc(100%-1.5rem)] h-96 m-3 border border-blue-300 rounded-lg shadow-lg shadow-sky-200"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
</template>
