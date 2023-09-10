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
import Philosophy from '@/components/Philosophy.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import Projects from '@/components/projects/All.vue'
import Services from '@/components/services/All.vue'
import { onIntersecting } from '@/main'
import { whoWeAre } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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
    <div class="mt-6">
      <h1
        class="text-center font-semibold text-2xl mb-2 underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Our Philosophy
      </h1>
      <Philosophy />
      <div class="mt-10 flex justify-center">
        <PrimaryButton @click="router.push({ name: 'about' })">Learn More</PrimaryButton>
      </div>
    </div>
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
