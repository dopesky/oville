<script setup lang="ts">
import type { FunctionalComponent } from 'vue'
import type { RouteRecordName } from 'vue-router'
import { RouterLink } from 'vue-router'
defineProps({ name: String, title: String, icon: Function })
const activeClasses = 'border-b-2 border-sky-400'
</script>

<template>
  <RouterLink
    :to="{ name: name as RouteRecordName }"
    :active-class="activeClasses"
    :title="title"
    class="sm:max-md:text-sm md-group h-12 flex items-center justify-center truncate min-w-[50px] sm:gap-2 px-2 font-semibold text-sky-400 hover:text-sky-200 hover:bg-white hover:bg-opacity-20 hover:border-b-2 hover:border-sky-200 transition-colors duration-200 ease-in-out"
  >
    <component :is="icon as FunctionalComponent" class="h-4 w-4 group-hover:animate-bounce" />
    <p class="max-sm:hidden">{{ title }}</p>
  </RouterLink>
</template>
