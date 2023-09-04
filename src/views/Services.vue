<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import ServiceModal from '@/components/modals/ServiceModal.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
import { ref } from 'vue'

const services = ref(
  Array.from({ length: 10 }, (_, i) => ({
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
</script>
<template>
  <div class="p-3">
    <h1
      class="slide-in-left text-center underline text-2xl mb-2 font-semibold"
      v-intersection-observer="onIntersecting"
    >
      Services We Offer
    </h1>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
      <div
        v-for="({ image, title, description }, index) in services"
        :key="`service-${index}`"
        v-intersection-observer="onIntersecting"
        :style="{ transitionDelay: `${index * 120}ms` }"
        @click="currentService = { image, title, description }"
        class="slide-in-left group bg-blue-200 hover:bg-opacity-60 active:bg-blue-300 border border-blue-300 w-full h-full rounded-md shadow-md shadow-cyan-200 hover:shadow-cyan-200 hover:shadow-xl active:shadow-none flex flex-col cursor-pointer"
      >
        <img :src="image" :alt="title" class="w-full rounded-t-md h-40 object-cover" />
        <div class="px-2 py-1 grow">
          <p class="text-lg font-semibold truncate">{{ title }}</p>
          <p class="text-sm line-clamp-3">{{ description }}</p>
        </div>
        <PrimaryButton class="m-2 self-end">View More</PrimaryButton>
      </div>
    </div>
  </div>
  <ServiceModal :service="currentService" @close="currentService = undefined" />
</template>
