<script setup lang="ts">
import DashItem from '@/components/DashItem.vue'
import OverlayedImage from '@/components/OverlayedImage.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
import { ref } from 'vue'

const team = ref(
  Array.from({ length: 4 }, () => ({
    name: 'Full Name',
    image: 'https://ocdn.eu/images/pulscms/ZjI7MDA_/35e1c217d9cf5e75392a7df2382e8b45.jpg'
  }))
)

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
    <h1 class="absolute font-semibold bottom-2 left-2 text-sky-200 text-3xl">The Firm</h1>
  </div>
  <h1
    class="mt-2 mx-2 text-xl text-center underline slide-in-left"
    v-intersection-observer="onIntersecting"
  >
    About Oville Associates
  </h1>
  <p class="ml-2 slide-in-right" v-intersection-observer="onIntersecting">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, asperiores veniam enim officia
    modi illo repellendus similique odio eum ex? Optio dolor eaque officia recusandae sapiente fuga
    quidem quasi adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    molestiae voluptate illum modi quasi, tenetur optio esse eos facilis possimus, voluptatibus
    dolor libero omnis pariatur aliquam ea iste deserunt cum. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Aspernatur ex neque, doloremque non facilis, voluptate explicabo nemo, dolor
    sed nobis aperiam quo esse eum officia pariatur perferendis quis?
  </p>
  <div class="grid grid-cols-1 sm:grid-cols-2 mt-4 mx-2 gap-2">
    <div class="bg-blue-200 border border-blue-500 rounded-lg p-2 shadow-md shadow-sky-900">
      <h1
        class="text-xl border-b-2 border-blue-800 slide-in-right"
        v-intersection-observer="onIntersecting"
      >
        Our Vision
      </h1>
      <p class="slide-in-left" v-intersection-observer="onIntersecting">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, asperiores veniam enim
        officia modi illo repellendus similique odio eum ex?
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, asperiores veniam enim
        officia modi illo repellendus similique odio eum ex?
      </p>
    </div>
  </div>
  <DashItem class="mt-6" v-bind="ourPhilosophy" />
  <div class="mt-6 p-3 bg-blue-200">
    <h1
      class="text-xl text-center underline slide-in-down"
      v-intersection-observer="onIntersecting"
    >
      The Team
    </h1>
    <div class="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="({ name, image }, index) in team"
        :key="`featured-project-${index}`"
        class="relative"
      >
        <OverlayedImage
          :src="image"
          :alt="name"
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
          {{ name }}
        </h2>
      </div>
    </div>
  </div>
</template>
