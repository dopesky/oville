<script setup lang="ts">
import { onIntersecting } from '@/main'
import { ourPhilosophy } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
defineProps({ showContent: Boolean })
</script>
<template>
  <div
    class="flex flex-wrap justify-center mx-3"
    :class="{ 'gap-10': showContent, 'gap-8 my-5': !showContent }"
  >
    <div
      v-for="({ title, content, icon }, index) in ourPhilosophy"
      :key="`philosophy-${index}`"
      class="inline-flex flex-col gap-1 slide-in-right"
      v-intersection-observer="onIntersecting"
      :style="{ transitionDelay: `${index * 200}ms` }"
    >
      <div
        class="flex items-center gap-3"
        :class="{ 'my-3': showContent, 'bg-sky-200 p-2 rounded-lg shadow-md': !showContent }"
      >
        <component :is="icon" class="h-8 w-8" />
        <div>
          <h1
            class="font-semibold text-lg"
            :class="{
              'leading-[3.6rem]': showContent && index !== ourPhilosophy.length - 1,
              'w-52 mb-2': showContent
            }"
          >
            {{ title }}
          </h1>
          <hr v-if="showContent" class="border-b-2 border-blue-900 w-24" />
        </div>
      </div>
      <p v-if="showContent" class="text-xs w-64">{{ content }}</p>
    </div>
  </div>
</template>
