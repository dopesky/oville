<script setup lang="ts">
import DashItem from '@/components/DashItem.vue'
import OverlayedImage from '@/components/OverlayedImage.vue'
import ProjectModal from '@/components/modals/ProjectModal.vue'
import ServiceModal from '@/components/modals/ServiceModal.vue'
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

const projects = ref(
  Array.from({ length: 4 }, (_, i) => ({
    title: `Project Name ${i + 1}`,
    tagline: `I am a tagline for project ${i + 1}`,
    location: 'Naro Moru, Kenya',
    description:
      i % 2 === 0
        ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam ullam dolor magnam, incidunt possimus reprehenderit, eum accusamus qui fugit modi. Accusamus perspiciatis possimus magni quaerat iusto, aliquid accusantium? Natus quod totam tenetur ut doloribus repellat consequuntur. Quam id harum magnam adipisci explicabo doloribus rerum molestias eligendi eum, consectetur, quos asperiores, et quis libero doloremque perspiciatis sunt minus aliquid esse enim magni cum? Delectus, non omnis earum quidem, quod maxime cum dolorem doloribus consectetur officia rerum iste ullam nisi nihil minus perferendis autem reprehenderit. Ea quam error totam soluta tempora ad quis facere provident rerum vitae sint alias laudantium optio sunt exercitationem impedit magnam similique ratione, veritatis dolorem quos illum dolores eum accusamus! Ipsa ad iure, a nulla sunt, ullam optio necessitatibus debitis pariatur minus hic, et officiis? Quod cum repellendus, accusantium, atque natus nulla sequi ea iure ex ut dolores quae odio facere laborum adipisci voluptatem minus explicabo illo!',
    image: 'https://ocdn.eu/images/pulscms/ZjI7MDA_/35e1c217d9cf5e75392a7df2382e8b45.jpg'
  }))
)
const currentProject = ref()

const services = ref(
  Array.from({ length: 4 }, (_, i) => ({
    title: `Service Name ${i + 1}`,
    description:
      i % 2 === 0
        ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
        : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam ullam dolor magnam, incidunt possimus reprehenderit, eum accusamus qui fugit modi. Accusamus perspiciatis possimus magni quaerat iusto, aliquid accusantium? Natus quod totam tenetur ut doloribus repellat consequuntur. Quam id harum magnam adipisci explicabo doloribus rerum molestias eligendi eum, consectetur, quos asperiores, et quis libero doloremque perspiciatis sunt minus aliquid esse enim magni cum? Delectus, non omnis earum quidem, quod maxime cum dolorem doloribus consectetur officia rerum iste ullam nisi nihil minus perferendis autem reprehenderit. Ea quam error totam soluta tempora ad quis facere provident rerum vitae sint alias laudantium optio sunt exercitationem impedit magnam similique ratione, veritatis dolorem quos illum dolores eum accusamus! Ipsa ad iure, a nulla sunt, ullam optio necessitatibus debitis pariatur minus hic, et officiis? Quod cum repellendus, accusantium, atque natus nulla sequi ea iure ex ut dolores quae odio facere laborum adipisci voluptatem minus explicabo illo!',
    image:
      'https://blogimages.softwaresuggest.com/blog/wp-content/uploads/2022/04/27192327/Need-of-CRM-Software-in-Service-Industry.png'
  }))
)
const currentService = ref()

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
        class="text-center font-semibold text-2xl underline slide-in-up !ease-in-out"
        v-intersection-observer="onIntersecting"
      >
        Featured Projects
      </h1>
      <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div
          v-for="({ title, tagline, location, description, image }, index) in projects"
          :key="`featured-project-${index}`"
          class="relative cursor-pointer"
          @click="currentProject = { title, tagline, location, description, image }"
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
          v-for="({ title, description, image }, index) in services"
          :key="`featured-project-${index}`"
          class="relative cursor-pointer"
          @click="currentService = { title, description, image }"
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
  <ProjectModal :project="currentProject" @close="currentProject = undefined" />
  <ServiceModal :service="currentService" @close="currentService = undefined" />
</template>
