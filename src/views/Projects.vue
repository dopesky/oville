<script setup lang="ts">
import All from '@/components/projects/All.vue'
import { onIntersecting } from '@/main'
import type { Image } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { Autoplay, Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

const defaultImage: Image[] = [
  {
    id: 0,
    full_image_url:
      'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
  }
]
</script>
<template>
  <div class="p-3">
    <h1
      class="slide-in-left text-center underline text-2xl mb-2 font-semibold"
      v-intersection-observer="onIntersecting"
    >
      Featured Projects
    </h1>
    <All>
      <template #rest="{ loading, projects }">
        <h1
          class="text-center underline text-xl mb-2 font-semibold mt-6 slide-in-left"
          v-intersection-observer="onIntersecting"
        >
          Other Projects
        </h1>
        <h1 v-if="loading" class="text-lg mt-5 text-center font-semibold animate-bounce">
          Loading . . .
        </h1>
        <h1
          v-else-if="!projects || projects.length === 0"
          class="mt-4 text-center font-semibold italic"
        >
          No Projects Available!
        </h1>
        <div
          class="overflow-auto p-2 bg-blue-200 rounded-md shadow-lg shadow-cyan-200 slide-in-right"
          v-intersection-observer="onIntersecting"
          v-else
        >
          <table class="w-full">
            <thead class="bg-[#30366E]">
              <tr>
                <th class="text-gray-200 border border-[#30366E] px-2 py-1 w-40">Image</th>
                <th class="text-gray-200 border border-[#30366E] px-2 py-1">Project</th>
                <th class="text-gray-200 border border-[#30366E] px-2 py-1">Client</th>
                <th class="text-gray-200 border border-[#30366E] px-2 py-1">Location</th>
                <th class="text-gray-200 border border-[#30366E] px-2 py-1">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(
                  { project_name, location, images, client, description }, parentIndex
                ) in projects"
                :key="`project-other-${parentIndex}`"
              >
                <td class="border border-[#30366E]">
                  <Swiper
                    autoplay
                    keyboard
                    :pagination="{ clickable: true }"
                    class="w-52 bg-sky-100 h-36 float-left"
                    :speed="1000"
                    :modules="[Keyboard, Autoplay, Pagination]"
                  >
                    <SwiperSlide
                      v-for="({ full_image_url }, index) in images && images.length
                        ? images
                        : defaultImage"
                      :key="`project-image-${parentIndex}-${index}`"
                    >
                      <img
                        :src="full_image_url"
                        :alt="project_name"
                        class="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  </Swiper>
                </td>
                <td class="border border-[#30366E] px-2 py-1">{{ project_name }}</td>
                <td class="border border-[#30366E] px-2 py-1">{{ client ?? 'N/A' }}</td>
                <td class="border border-[#30366E] px-2 py-1">{{ location ?? 'N/A' }}</td>
                <td class="border border-[#30366E] px-2 py-1">{{ description ?? 'N/A' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </template>
    </All>
  </div>
</template>
