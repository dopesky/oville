<script setup lang="ts">
defineProps({ src: String, alt: String, innerClasses: String })
</script>
<template>
  <div
    class="relative after:content-[''] after:absolute after:w-full after:h-full after:bg-[#30366E] after:bg-opacity-60 after:top-0"
  >
    <img :class="innerClasses" class="w-full h-auto max-h-96 object-cover" :src="src" :alt="alt" />
  </div>
</template>
