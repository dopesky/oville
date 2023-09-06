<script setup lang="ts">
import DashItem from '@/components/DashItem.vue'
import Featured from '@/components/projects/Featured.vue'
import All from '@/components/services/All.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
import { Autoplay, Keyboard } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const whoWeAre = ref({
  name: 'about',
  title: 'Who We Are',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt veniam facere ipsum nulla odio asperiores soluta dignissimos, et sint eos fugit, repudiandae quam amet nihil, nesciunt modi inventore. Nobis.',
  image:
    'https://www.thehousedesigners.com/images/uploads/SiteImage-Landing-modern-house-plans-1.webp'
})

const ourPhilosophy = ref({
  name: 'about',
  title: 'Our Philosophy',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Quisquam voluptatibus, quibusdam, quia, quod voluptatem voluptates quos voluptatum quas quidem doloribus quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non deserunt veniam facere ipsum nulla odio asperiores soluta dignissimos, et sint eos fugit, repudiandae quam amet nihil, nesciunt modi inventore. Nobis.',
  image:
    'https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGhpbG9zb3BoeXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
})

const clients = ref(
  Array.from({ length: 10 }, (_, i) => ({
    name: 'Client Name',
    image: [
      'https://cdn-icons-png.flaticon.com/512/174/174857.png',
      'https://purepng.com/public/uploads/large/purepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png',
      'https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png',
      'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-czn3g8x8.png'
    ][i % 4]
  }))
)
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
      <Featured dashboard />
    </div>
    <DashItem class="mt-6" v-bind="ourPhilosophy" alternate />
    <div class="bg-blue-800 bg-opacity-20 mt-6 p-3">
      <h1
        class="text-center font-semibold text-2xl mb-2 underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Services Offerred
      </h1>
      <All dashboard />
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
          v-for="({ image, name }, index) in clients"
          :key="`client-${index}`"
          class="flex justify-center items-center sm:max-w-[20%]"
        >
          <img :src="image" :alt="name" class="w-24 h-24 object-cover mx-auto" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>
