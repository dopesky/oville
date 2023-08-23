<script setup lang="ts">
import { RouterView } from 'vue-router'
import logo from './assets/logo.svg'
import NavLink from './components/NavLink.vue'
import { routes } from './router'
</script>

<template>
  <div class="bg-sky-100 min-h-[calc(100vh-6rem)]">
    <nav
      class="z-10 fixed w-full top-0 flex sm:gap-2 md:gap-4 items-center justify-end px-2 sm:px-8 lg:px-12 bg-blue-900 shadow-md shadow-sky-300"
    >
      <div class="grow">
        <img :src="logo" alt="Logo" class="h-10 w-auto my-1 px-2 py-1" />
      </div>
      <NavLink v-for="(route, index) in routes" :key="`navigation-key-${index}`" v-bind="route" />
    </nav>
    <div class="my-12 py-6 text-blue-900">
      <RouterView />
    </div>
    <footer
      class="z-10 fixed w-full h-12 bottom-0 flex gap-4 items-center justify-end px-4 sm:px-8 lg-px-12 bg-blue-900 text-sky-200"
    >
      &copy; {{ new Date().getFullYear() }} Oville Associates
    </footer>
  </div>
</template>
