<script setup lang="ts">
import { ArrowSmallRightIcon } from '@heroicons/vue/24/solid'
import { computed } from 'vue'
const props = defineProps({ href: String, navigate: { type: Boolean, default: true } })

const hasHref = computed(() => {
  try {
    return Boolean(new URL(props.href ?? ''))
  } catch (e) {
    return false
  }
})
</script>
<template>
  <component
    :is="hasHref ? 'a' : 'button'"
    v-bind="hasHref ? { href, target: '_blank' } : { type: 'button' }"
    class="group inline-flex items-center rounded-2xl rounded-tr-sm rounded-bl-sm px-3 py-1 font-semibold shadow-md text-sky-400 shadow-sky-300 bg-blue-800 hover:shadow-sky-500 hover:bg-blue-900 active:bg-blue-950 active:shadow-none transition-all duration-200 ease-in-out"
  >
    <slot />
    <ArrowSmallRightIcon
      v-if="navigate"
      class="h-4 w-0 -translate-x-3 group-hover:w-4 group-hover:ml-1 group-hover:translate-x-0 transition-all duration-200 ease-in-out"
    />
  </component>
</template>
