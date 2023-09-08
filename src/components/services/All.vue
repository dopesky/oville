<script setup lang="ts">
import Modal from './Modal.vue'
import PrimaryButton from '@/components/PrimaryButton.vue'
import { onIntersecting } from '@/main'
import { fetch, type Service } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { ref, watch } from 'vue'

const { limit } = defineProps({ limit: Number })

const {
  loading,
  data: services,
  error
} = fetch<Service>({ path: `services${limit !== undefined ? `?limit=${limit}` : ''}` })
watch(error, console.error)

const currentService = ref<Service>()
</script>
<template>
  <div>
    <h1 v-if="loading" class="text-lg mt-5 text-center font-semibold animate-bounce">
      Loading . . .
    </h1>
    <h1
      v-else-if="!services || services.length === 0"
      class="mt-4 text-center font-semibold italic"
    >
      No Services Available!
    </h1>
    <div v-else class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
      <div
        v-for="({ id, images, service_name, description }, index) in services"
        :key="`service-${index}`"
        v-intersection-observer="onIntersecting"
        :style="{ transitionDelay: `${index * 120}ms` }"
        @click="currentService = { id, images, service_name, description }"
        class="slide-in-right cursor-pointer group bg-blue-200 hover:bg-opacity-60 active:bg-blue-300 border border-blue-300 w-full h-full rounded-md shadow-md hover:shadow-xl active:shadow-none flex flex-col cursor-pointer"
      >
        <img
          :src="
            images?.[0]?.full_image_url ??
            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          "
          :alt="service_name"
          class="w-full rounded-t-md h-56 bg-sky-100 group-hover:bg-sky-200 object-cover"
        />
        <div class="px-2 py-1 grow">
          <p class="text-lg font-semibold truncate">
            {{ service_name }}
          </p>
          <p v-if="description && limit === undefined" class="text-sm line-clamp-3">
            {{ description }}
          </p>
        </div>
        <PrimaryButton v-if="limit === undefined" class="m-2 self-end">View More</PrimaryButton>
      </div>
    </div>
  </div>
  <Modal :service="currentService" @close="currentService = undefined" />
</template>
