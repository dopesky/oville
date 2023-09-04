<script lang="ts" setup>
import PrimaryButton from '../PrimaryButton.vue'
import DialogModal from './DialogModal.vue'

defineProps({ project: Object })

const emit = defineEmits(['close'])
</script>
<template>
  <DialogModal :show="!!project" @close="emit('close')" max-width="4xl">
    <template #title>
      <div class="truncate flex gap-1 items-center">
        {{ project?.title }}
        <small>- {{ project?.location }}</small>
      </div>
    </template>

    <template #content>
      <img
        :src="project?.image"
        :alt="project?.title"
        class="w-full sm:max-w-sm mr-3 mb-2 rounded-md h-52 object-cover float-left"
      />
      <div>
        <p class="font-semibold text-xs my-2">{{ project?.tagline }}</p>
        <p class="text-justify">{{ project?.description }}</p>
      </div>
    </template>

    <template #footer>
      <PrimaryButton :navigate="false" @click="emit('close')"> Close </PrimaryButton>
    </template>
  </DialogModal>
</template>
