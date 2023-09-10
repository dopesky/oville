<script setup lang="ts">
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
import { useRouter } from 'vue-router'
import PrimaryButton from './PrimaryButton.vue'

defineProps({ title: String, description: String, image: String, alternate: Boolean, name: String })

const router = useRouter()
</script>
<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 px-3 gap-3 items-center">
    <div
      v-intersection-observer="onIntersecting"
      :class="{ 'order-last': alternate }"
      class="slide-in-left bg-no-repeat bg-cover bg-center rounded-lg max-sm:bg-blue-100 bg-blend-overlay max-sm:p-3 sm:!bg-none"
      :style="{ backgroundImage: `url(${image})` }"
    >
      <h2 class="text-2xl font-bold border-b-2 border-blue-800 mb-3">{{ title }}</h2>
      <p
        class="text-justify"
        :class="{ 'text-ellipsis line-clamp-6 sm:max-md:line-clamp-4': !!name }"
        v-html="description"
      ></p>
      <PrimaryButton v-if="!!name" class="mt-2" @click="router.push({ name })">
        Learn More
      </PrimaryButton>
    </div>
    <img
      v-intersection-observer="onIntersecting"
      class="max-sm:hidden slide-in-right delay-200 h-full w-full object-cover rounded-lg shadow-md shadow-blue-800"
      :src="image"
    />
  </div>
</template>
