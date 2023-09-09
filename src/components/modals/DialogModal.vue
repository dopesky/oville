<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import Modal from './Modal.vue'

const emit = defineEmits(['close'])

defineProps({
  show: {
    type: Boolean,
    default: false
  },
  maxWidth: {
    type: String,
    default: '2xl'
  },
  closeable: {
    type: Boolean,
    default: true
  }
})

const close = () => {
  emit('close')
}
</script>

<template>
  <Modal :show="show" :max-width="maxWidth" :closeable="closeable" @close="close">
    <div class="px-6 py-4">
      <div class="text-lg font-medium text-blue-950 flex justify-between">
        <slot name="title" />
        <button
          @click="close"
          class="rounded-full text-blue-800 hover:bg-sky-100 active:bg-sky-200 px-1 transition-all"
        >
          <XMarkIcon class="w-5 h-5" />
        </button>
      </div>

      <div class="mt-4 text-sm text-blue-900">
        <slot name="content" />
      </div>
    </div>

    <div class="w-full flex flex-row justify-end px-6 py-4 bg-sky-100 text-right">
      <slot name="footer" />
    </div>
  </Modal>
</template>
