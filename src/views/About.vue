<script setup lang="ts">
import organogram from '@/assets/organogram.png'
import DashItem from '@/components/DashItem.vue'
import OverlayedImage from '@/components/OverlayedImage.vue'
import All from '@/components/team/All.vue'
import { onIntersecting } from '@/main'
import { whoWeAre } from '@/stores/fetch'
import { LightBulbIcon } from '@heroicons/vue/24/solid'
import { vIntersectionObserver } from '@vueuse/components'
import { ref } from 'vue'

const ourPhilosophy = ref({
  title: 'Our Philosophy',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt veniam facere ipsum nulla odio asperiores soluta dignissimos, et sint eos fugit, repudiandae quam amet nihil, nesciunt modi inventore. Nobis.',
  image:
    'https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
})
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
      The Firm
    </h1>
  </div>
  <h1
    class="mt-2 mx-2 text-xl text-center underline slide-in-left"
    v-intersection-observer="onIntersecting"
  >
    About Oville Associates
  </h1>
  <p
    class="mx-2 slide-in-right text-justify"
    v-intersection-observer="onIntersecting"
    v-html="whoWeAre.description"
  ></p>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-4 mx-2 gap-2">
    <div class="bg-blue-200 border border-blue-500 rounded-lg p-2 shadow-md shadow-sky-900">
      <h1
        class="text-xl border-b-2 border-blue-800 slide-in-right"
        v-intersection-observer="onIntersecting"
      >
        Our Vision
      </h1>
      <p class="slide-in-left" v-intersection-observer="onIntersecting">
        To be the Engineering Consultants of choice in the built and natural environment for
        develop- ers in Kenya and East Africa Region..
      </p>
    </div>
    <div class="bg-blue-200 border border-blue-500 rounded-lg p-2 shadow-md shadow-sky-900">
      <h1
        class="text-xl border-b-2 border-blue-800 slide-in-left"
        v-intersection-observer="onIntersecting"
      >
        Our Mission
      </h1>
      <p class="slide-in-right" v-intersection-observer="onIntersecting">
        To provide innovative, valuable and efficient engineering solutions, professional project
        management and precise forensic engineering services to our clients.
      </p>
    </div>
  </div>
  <div class="my-10 mx-4 flex items-center justify-around gap-10 flex-wrap">
    <div class="flex flex-col items-center">
      <LightBulbIcon class="h-10 w-10 mb-2" />
      <h1 class="text-sky-500 text-2xl font-bold">100+</h1>
      <h4 class="font-bold text-xl">Successful Projects</h4>
    </div>
    <div class="flex flex-col items-center">
      <LightBulbIcon class="h-10 w-10 mb-2" />
      <h1 class="text-sky-500 text-2xl font-bold">99+</h1>
      <h4 class="font-bold text-xl">Satisfied Clients</h4>
    </div>
  </div>
  <h1
    class="text-xl text-center mt-6 mb-1 underline slide-in-left"
    v-intersection-observer="onIntersecting"
  >
    Our Organogram
  </h1>
  <img
    :src="organogram"
    alt="Organogram"
    class="w-full max-h-[40rem] h-auto object-contain bg-[#1f2052]"
    v-intersection-observer="onIntersecting"
  />
  <DashItem class="mt-6" v-bind="ourPhilosophy" />
  <div class="mt-6 p-3 bg-blue-200">
    <h1
      class="text-xl text-center underline slide-in-down mb-2"
      v-intersection-observer="onIntersecting"
    >
      The Team
    </h1>
    <All />
  </div>
</template>
