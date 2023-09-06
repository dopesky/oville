<script setup lang="ts">
import All from '@/components/services/All.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
</script>
<template>
  <div class="p-3">
    <h1
      class="slide-in-left text-center underline text-2xl mb-2 font-semibold"
      v-intersection-observer="onIntersecting"
    >
      Services We Offer
    </h1>
    <All />
  </div>
</template>
