<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'

const projects = Array.from({ length: 10 }, (_, i) => ({
  title: 'Project Name',
  tagline: 'I am a tagline',
  location: 'Naro Moru, Kenya',
  description:
    i % 2 === 0
      ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
      : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita quam ullam dolor magnam, incidunt possimus reprehenderit, eum accusamus qui fugit modi. Accusamus perspiciatis possimus magni quaerat iusto, aliquid accusantium? Natus quod totam tenetur ut doloribus repellat consequuntur. Quam id harum magnam adipisci explicabo doloribus rerum molestias eligendi eum, consectetur, quos asperiores, et quis libero doloremque perspiciatis sunt minus aliquid esse enim magni cum? Delectus, non omnis earum quidem, quod maxime cum dolorem doloribus consectetur officia rerum iste ullam nisi nihil minus perferendis autem reprehenderit. Ea quam error totam soluta tempora ad quis facere provident rerum vitae sint alias laudantium optio sunt exercitationem impedit magnam similique ratione, veritatis dolorem quos illum dolores eum accusamus! Ipsa ad iure, a nulla sunt, ullam optio necessitatibus debitis pariatur minus hic, et officiis? Quod cum repellendus, accusantium, atque natus nulla sequi ea iure ex ut dolores quae odio facere laborum adipisci voluptatem minus explicabo illo!',
  image: 'https://ocdn.eu/images/pulscms/ZjI7MDA_/35e1c217d9cf5e75392a7df2382e8b45.jpg'
}))
</script>
<template>
  <div class="p-3">
    <h1
      class="slide-in-left text-center underline text-2xl mb-2 font-semibold"
      v-intersection-observer="onIntersecting"
    >
      Featured Projects
    </h1>
    <div class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
      <div
        v-for="({ image, title, tagline, location, description }, index) in projects.slice(0, 5)"
        :key="`project-${index}`"
        v-intersection-observer="onIntersecting"
        :style="{ transitionDelay: `${index * 120}ms` }"
        class="slide-in-right group bg-blue-200 hover:bg-opacity-60 active:bg-blue-300 border border-blue-300 w-full h-full rounded-md shadow-md shadow-cyan-200 hover:shadow-cyan-200 hover:shadow-xl active:shadow-none flex flex-col cursor-pointer"
      >
        <img :src="image" :alt="title" class="w-full rounded-t-md h-40 object-cover" />
        <div class="px-2 py-1 grow">
          <p class="text-lg font-semibold truncate">
            {{ title }}
            <small class="text-sm italic">- {{ location }}</small>
          </p>
          <p class="text-xs truncate">{{ tagline }}</p>
          <p class="text-sm line-clamp-3">{{ description }}</p>
        </div>
        <PrimaryButton class="m-2 self-end">View More</PrimaryButton>
      </div>
    </div>
    <h1
      class="text-center underline text-xl mb-2 font-semibold mt-6 slide-in-left"
      v-intersection-observer="onIntersecting"
    >
      Other Projects
    </h1>
    <div
      class="overflow-auto p-2 bg-blue-200 rounded-md shadow-lg shadow-cyan-200 slide-in-right"
      v-intersection-observer="onIntersecting"
    >
      <table class="w-full">
        <thead class="bg-[#30366E]">
          <tr>
            <th class="text-gray-200 border border-[#30366E] px-2 py-1 w-40">Image</th>
            <th class="text-gray-200 border border-[#30366E] px-2 py-1">Title</th>
            <th class="text-gray-200 border border-[#30366E] px-2 py-1">Tagline</th>
            <th class="text-gray-200 border border-[#30366E] px-2 py-1">Location</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="({ title, location, image, tagline }, index) in projects.slice(5)"
            :key="`project-other-${index}`"
          >
            <td class="border border-[#30366E]">
              <img :src="image" :alt="title" class="w-full h-24" />
            </td>
            <td class="border border-[#30366E] px-2 py-1">{{ title }}</td>
            <td class="border border-[#30366E] px-2 py-1">{{ tagline }}</td>
            <td class="border border-[#30366E] px-2 py-1">{{ location }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
