<script lang="ts" setup>
import DialogModal from '@/components/modals/DialogModal.vue'
import type { Project } from '@/stores/fetch'
import { Autoplay, Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import PrimaryButton from '../PrimaryButton.vue'

defineProps<{ project?: Project }>()

const defaultImage: Image[] = [
  {
    full_image_url:
      'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
  }
]

const emit = defineEmits(['close'])
</script>
<template>
  <DialogModal :show="!!project" @close="emit('close')" max-width="4xl">
    <template #title>
      <div class="truncate flex gap-1 items-center">
        {{ project?.project_name }}
        <small v-if="project?.location">- {{ project.location }}</small>
      </div>
    </template>

    <template #content>
      <Swiper
        autoplay
        keyboard
        :pagination="{ clickable: true }"
        class="w-full sm:max-w-sm mr-3 mb-2 bg-sky-100 rounded-md h-60 object-cover float-left"
        :speed="1000"
        :modules="[Keyboard, Autoplay, Pagination]"
      >
        <SwiperSlide
          v-for="({ full_image_url }, index) in project?.images && project.images.length
            ? project.images
            : defaultImage"
          :key="`project-image-${index}`"
        >
          <img
            :src="full_image_url"
            :alt="project?.project_name"
            class="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <p v-if="project?.client" class="font-semibold text-xs my-2">{{ project?.client }}</p>
        <p class="text-justify">{{ project?.description ?? 'N/A' }}</p>
      </div>
    </template>

    <template #footer>
      <PrimaryButton :navigate="false" @click="emit('close')"> Close </PrimaryButton>
    </template>
  </DialogModal>
</template>
