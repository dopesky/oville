<script setup lang="ts">
import PrimaryButton from '@/components/PrimaryButton.vue'
import { onIntersecting } from '@/main'
import { fetch, type Team } from '@/stores/fetch'
import { vIntersectionObserver } from '@vueuse/components'
import { ref, watch } from 'vue'
import Modal from './Modal.vue'

const { loading, data: team, error } = fetch<Team>({ path: 'members' })
watch(error, console.error)

const currentTeam = ref<Team>()
</script>
<template>
  <div>
    <h1 v-if="loading" class="text-lg mt-5 text-center font-semibold animate-bounce">
      Loading . . .
    </h1>
    <h1 v-else-if="!team || team.length === 0" class="mt-4 text-center font-semibold italic">
      No Team Members Available!
    </h1>
    <div v-else class="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-5">
      <div
        v-for="(
          { id, full_name, full_profile_photo_url, bio, contacts, role, qualifications }, index
        ) in team"
        :key="`team-member-${index}`"
        v-intersection-observer="onIntersecting"
        :style="{ transitionDelay: `${index * 120}ms` }"
        @click="
          currentTeam = {
            id,
            full_name,
            full_profile_photo_url,
            contacts,
            role,
            bio,
            qualifications
          }
        "
        class="slide-in-right cursor-pointer group bg-blue-200 hover:bg-opacity-60 active:bg-blue-300 border border-blue-300 w-full h-full rounded-md shadow-md hover:shadow-xl active:shadow-none flex flex-col cursor-pointer"
      >
        <img
          :src="
            full_profile_photo_url ??
            'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
          "
          :alt="full_name"
          class="w-full rounded-t-md h-56 bg-sky-100 group-hover:bg-sky-200 object-cover"
        />
        <div class="px-2 py-1 grow">
          <p class="text-lg font-semibold truncate">
            {{ full_name }}
            <small v-if="role" class="text-sm italic">- {{ role }}</small>
          </p>
          <p v-if="qualifications" class="text-xs truncate italic">{{ qualifications }}</p>
          <p class="text-sm line-clamp-3">
            {{ bio ?? 'No bio available for this team member!' }}
          </p>
        </div>
        <PrimaryButton class="m-2 self-end">View More</PrimaryButton>
      </div>
    </div>
  </div>
  <Modal :team="currentTeam" @close="currentTeam = undefined" />
</template>
