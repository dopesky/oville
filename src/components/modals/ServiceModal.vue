<script lang="ts" setup>
import PrimaryButton from '../PrimaryButton.vue'
import DialogModal from './DialogModal.vue'

defineProps({ service: Object })

const emit = defineEmits(['close'])
</script>
<template>
  <DialogModal :show="!!service" @close="emit('close')" max-width="4xl">
    <template #title>{{ service?.title }}</template>

    <template #content>
      <img
        :src="service?.image"
        :alt="service?.title"
        class="w-full sm:max-w-sm mr-3 mb-2 rounded-md h-52 object-cover float-left"
      />
      <div>
        <p class="text-justify">{{ service?.description }}</p>
      </div>
    </template>

    <template #footer>
      <PrimaryButton :navigate="false" @click="emit('close')"> Close </PrimaryButton>
    </template>
  </DialogModal>
</template>
