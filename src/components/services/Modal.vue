<script lang="ts" setup>
import DialogModal from '@/components/modals/DialogModal.vue'
import type { Service } from '@/stores/fetch'
import PrimaryButton from '../PrimaryButton.vue'
import { Autoplay, Keyboard, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

defineProps<{ service?: Service }>()

const defaultImage: Image[] = [
  {
    full_image_url:
      'https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg'
  }
]

const emit = defineEmits(['close'])
</script>
<template>
  <DialogModal :show="!!service" @close="emit('close')" max-width="4xl">
    <template #title>{{ service?.service_name }}</template>

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
          v-for="({ full_image_url }, index) in service?.images ?? defaultImage"
          :key="`service-image-${index}`"
        >
          <img
            :src="full_image_url"
            :alt="service?.service_name"
            class="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <p class="text-justify">{{ service?.description ?? 'N/A' }}</p>
      </div>
    </template>

    <template #footer>
      <PrimaryButton :navigate="false" @click="emit('close')"> Close </PrimaryButton>
    </template>
  </DialogModal>
</template>
