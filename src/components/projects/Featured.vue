<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import { onIntersecting } from '@/main'
import { fetch, type Project } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { ref } from 'vue'
import Modal from './Modal.vue'

const { dashboard } = defineProps({ dashboard: Boolean })

const {
  loading,
  data: projects,
  error
} = fetch<Project>({ path: `projects?limit=${dashboard ? 4 : 6}` })
error(console.error)

const currentProject = ref<Project>()
</script>
<template>
  <div>
    <h1 v-if="loading" class="text-lg mt-5 text-center font-semibold animate-bounce">
      Loading . . .
    </h1>
    <h1
      v-else-if="!projects || projects.length === 0"
      class="mt-4 text-center font-semibold italic"
    >
      No Featured Projects Available!
    </h1>
    <div v-else class="grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-5">
      <div
        v-for="({ id, images, project_name, client, location, description }, index) in projects"
        :key="`featured-project-${index}`"
        v-intersection-observer="onIntersecting"
        :style="{ transitionDelay: `${index * 120}ms` }"
        @click="currentProject = { id, images, project_name, client, location, description }"
        class="slide-in-right cursor-pointer group bg-blue-200 hover:bg-opacity-60 active:bg-blue-300 border border-blue-300 w-full h-full rounded-md shadow-md hover:shadow-xl active:shadow-none flex flex-col cursor-pointer"
      >
        <img
          :src="
            images?.[0]?.full_image_url ??
            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          "
          :alt="project_name"
          class="w-full rounded-t-md h-56 bg-sky-100 group-hover:bg-sky-200 object-cover"
        />
        <div class="px-2 py-1 grow">
          <p class="text-lg font-semibold truncate">
            {{ project_name }}
            <small v-if="location" class="text-sm italic">- {{ location }}</small>
          </p>
          <p v-if="client" class="text-xs truncate">{{ client }}</p>
          <p v-if="description && !dashboard" class="text-sm line-clamp-3">{{ description }}</p>
        </div>
        <PrimaryButton v-if="!dashboard" class="m-2 self-end">View More</PrimaryButton>
      </div>
    </div>
  </div>
  <Modal :project="currentProject" @close="currentProject = undefined" />
</template>
