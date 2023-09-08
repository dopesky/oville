<script setup lang="ts">
import { ContactType, fetch, type Contact } from '@/stores/fetch'
import { computed, provide } from 'vue'
import { RouterView } from 'vue-router'
import logo from './assets/logo.jpg'
import NavLink from './components/NavLink.vue'
import { routes } from './router'

const { loading, data: contacts, error } = fetch<Contact>({ path: 'contacts' })
error(console.error)

const socials = computed(
  () =>
    contacts.value?.filter(
      ({ contact_type_id }: Contact) => [1, 2, 8].indexOf(contact_type_id) === -1
    ) ?? []
)

provide('contacts', { loading, contacts })
</script>

<template>
  <div class="bg-sky-100 min-h-[calc(100vh-6rem)]">
    <nav
      class="z-10 fixed w-full top-0 flex sm:gap-2 md:gap-4 sm:pr-2 md:pr-4 items-end justify-end bg-[#30366E] shadow-md shadow-sky-300"
    >
      <div class="grow">
        <img :src="logo" alt="Logo" class="h-28 w-auto mx-1" />
      </div>
      <NavLink v-for="(route, index) in routes" :key="`navigation-key-${index}`" v-bind="route" />
      <div class="grow"></div>
    </nav>
    <div class="mt-28 mb-12 py-6 text-[#30366E]">
      <RouterView />
    </div>
    <footer
      class="z-10 fixed w-full h-12 bottom-0 flex gap-4 items-center justify-end px-4 sm:px-8 lg-px-12 bg-blue-900 text-sky-200"
    >
      &copy; {{ new Date().getFullYear() }} Oville Associates
      <div class="grow flex justify-end items-center gap-5">
        <template v-if="!loading">
          <a
            v-for="({ contact_type_id, contact }, index) in socials"
            :key="`contact-${index}`"
            :href="contact"
            target="_blank"
            class="w-8 h-8 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-sky-950 active:scale-100 active:shadow-none bg-blue-950 fill-sky-200 rounded-full p-2 transition-all duration-100 ease-in-out shadow-sky-600 hover:shadow-sky-600"
          >
            <component
              class="w-full h-full"
              :is="ContactType[contact_type_id as keyof typeof ContactType]"
            />
          </a>
        </template>
      </div>
    </footer>
  </div>
</template>
