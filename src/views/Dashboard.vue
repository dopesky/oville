<script setup lang="ts">
import DashItem from '@/components/DashItem.vue'
import OverlayedImage from '@/components/OverlayedImage.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
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

const projects = ref(
  Array.from({ length: 4 }, () => ({
    title: 'Project Name',
    image: 'https://ocdn.eu/images/pulscms/ZjI7MDA_/35e1c217d9cf5e75392a7df2382e8b45.jpg'
  }))
)

const services = ref(
  Array.from({ length: 4 }, () => ({
    title: 'Service Name',
    image:
      'https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2022/04/27192327/Need-of-CRM-Software-in-Service-Industry.png'
  }))
)
</script>
<template>
  <div>
    <DashItem v-bind="whoWeAre" />
    <div class="bg-blue-800 bg-opacity-20 mt-6 p-3">
      <h1
        class="text-center font-semibold text-2xl underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Featured Projects
      </h1>
      <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="({ title, image }, index) in projects"
          :key="`featured-project-${index}`"
          class="relative"
        >
          <OverlayedImage
            :src="image"
            :alt="title"
            inner-classes="rounded-md"
            class="rounded-md after:rounded-md shadow-md shadow-blue-500 slide-in-left"
            v-intersection-observer="onIntersecting"
            :style="{ transitionDelay: `${index * 200}ms` }"
          />
          <h2
            class="absolute w-full truncate font-semibold bottom-1 left-2 text-sky-200 text-lg slide-in-down"
            v-intersection-observer="onIntersecting"
            :style="{ transitionDelay: `${index * 200 + 200}ms` }"
          >
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
    <DashItem class="mt-6" v-bind="ourPhilosophy" alternate />
    <div class="bg-blue-800 bg-opacity-20 mt-6 p-3">
      <h1
        class="text-center font-semibold text-2xl underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Services Offerred
      </h1>
      <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="({ title, image }, index) in services"
          :key="`featured-project-${index}`"
          class="relative"
        >
          <OverlayedImage
            :src="image"
            :alt="title"
            inner-classes="rounded-md"
            class="rounded-md after:rounded-md shadow-md shadow-blue-500 slide-in-left"
            v-intersection-observer="onIntersecting"
            :style="{ transitionDelay: `${index * 200}ms` }"
          />
          <h2
            class="absolute w-full truncate font-semibold bottom-1 left-2 text-sky-200 text-lg slide-in-down"
            v-intersection-observer="onIntersecting"
            :style="{ transitionDelay: `${index * 200 + 200}ms` }"
          >
            {{ title }}
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>
