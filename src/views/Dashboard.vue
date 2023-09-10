<script setup lang="ts">
import adrian from '@/assets/adrian.png'
import citam from '@/assets/citam.png'
import eserian from '@/assets/eserian.png'
import ips from '@/assets/ips.jpg'
import kncci from '@/assets/kncci.png'
import linksoft from '@/assets/linksoft.png'
import montessori from '@/assets/montessori.png'
import stChristophers from '@/assets/st-christophers.png'
import symphony from '@/assets/symphony.webp'
import telkom from '@/assets/telkom.png'
import uap from '@/assets/uap.png'
import DashItem from '@/components/DashItem.vue'
import Projects from '@/components/projects/All.vue'
import Services from '@/components/services/All.vue'
import { onIntersecting } from '@/main'
import { whoWeAre } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const ourPhilosophy = ref({
  name: 'about',
  title: 'Our Philosophy',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt veniam facere ipsum nulla odio asperiores soluta dignissimos, et sint eos fugit, repudiandae quam amet nihil, nesciunt modi inventore. Nobis.',
  image:
    'https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
})

const clients = ref([
  adrian,
  citam,
  eserian,
  ips,
  kncci,
  linksoft,
  montessori,
  stChristophers,
  symphony,
  telkom,
  uap
])
</script>
<template>
  <div class="overflow-hidden">
    <DashItem v-bind="whoWeAre" />
    <div class="bg-blue-800 bg-opacity-20 mt-6 p-3">
      <h1
        class="text-center font-semibold text-2xl mb-2 underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Featured Projects
      </h1>
      <Projects :featured-limit="4" />
    </div>
    <DashItem class="mt-6" v-bind="ourPhilosophy" alternate />
    <div class="bg-blue-800 bg-opacity-20 mt-6 p-3">
      <h1
        class="text-center font-semibold text-2xl mb-2 underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Services Offerred
      </h1>
      <Services :limit="4" />
    </div>

    <div class="my-6 mx-2 flex flex-col items-center gap-4">
      <h1
        class="font-semibold text-2xl underline slide-in-left"
        v-intersection-observer="onIntersecting"
      >
        Our Clients
      </h1>
      <Swiper
        slides-per-view="auto"
        :space-between="10"
        autoplay
        keyboard
        class="sm:max-w-[60%] slide-in-right"
        :speed="1000"
        :modules="[Keyboard, Autoplay]"
        v-intersection-observer="onIntersecting"
      >
        <SwiperSlide
          v-for="(image, index) in clients"
          :key="`client-${index}`"
          class="flex justify-center items-center sm:max-w-[20%]"
        >
          <img :src="image" alt="Client" class="w-full h-24 object-contain mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
