<script setup lang="ts">
import Featured from '@/components/projects/Featured.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
import { ref } from 'vue'

const projects = ref(
  Array.from({ length: 10 }, (_, i) => ({
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
</script>
<template>
  <div class="p-3">
    <h1
      class="slide-in-left text-center underline text-2xl mb-2 font-semibold"
      v-intersection-observer="onIntersecting"
    >
      Featured Projects
    </h1>
    <Featured />
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
