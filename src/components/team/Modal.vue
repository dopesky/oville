<script lang="ts" setup>
import DialogModal from '@/components/modals/DialogModal.vue'
import type { Contact, Team } from '@/stores/fetch'
import { ContactType } from '@/stores/fetch'
import PrimaryButton from '../PrimaryButton.vue'

defineProps<{ team?: Team }>()

const emit = defineEmits(['close'])
</script>
<template>
  <DialogModal :show="!!team" @close="emit('close')" max-width="4xl">
    <template #title>
      <div class="truncate flex gap-1 items-center">
        {{ team?.full_name }}
        <small v-if="team?.qualifications">({{ team.qualifications }})</small>
      </div>
    </template>

    <template #content>
      <img
        :src="
          team?.full_profile_photo_url ??
          'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
        "
        :alt="team?.full_name"
        class="w-full sm:max-w-sm mr-3 mb-2 bg-sky-100 rounded-md h-60 object-cover float-left"
      />
      <div>
        <p v-if="team?.role" class="font-semibold text-xs my-2">
          {{ team.role }}
        </p>
        <p class="text-justify">{{ team?.bio ?? 'N/A' }}</p>
        <div class="flex flex-wrap justify-center mt-2 items-center gap-4">
          <a
            v-for="({ contact_type_id, contact }, index) in team?.contacts?.filter(
              ({ contact_type_id }: Contact) => contact_type_id in ContactType
            ) ?? []"
            :key="`team-member-contact-${index}`"
            :href="contact"
            @click.stop
            target="_blank"
            class="w-8 h-8 shadow-sm hover:shadow-lg hover:scale-110 hover:bg-sky-800 active:scale-100 active:shadow-none bg-sky-700 fill-sky-200 text-sky-200 rounded-full p-2 transition-all duration-100 ease-in-out shadow-sky-300 hover:shadow-sky-300"
          >
            <component
              class="w-full h-full"
              :is="ContactType[contact_type_id as keyof typeof ContactType]"
            />
          </a>
        </div>
      </div>
    </template>

    <template #footer>
      <PrimaryButton :navigate="false" @click="emit('close')"> Close </PrimaryButton>
    </template>
  </DialogModal>
</template>
