<script setup lang="ts">
import OverlayedImage from '@/components/OverlayedImage.vue'
import { onIntersecting } from '@/main'
import { vIntersectionObserver } from '@vueuse/components'
</script>
<template>
  <div class="relative slide-in-up" v-intersection-observer="onIntersecting">
    <OverlayedImage
      src="https://png.pngtree.com/background/20210710/original/pngtree-company-profile-corporate-culture-brochure-cross-page-design-background-material-picture-image_1011696.jpg"
      alt="The Firm"
    />
    <h1 class="absolute font-semibold bottom-2 left-2 text-sky-200 text-3xl">The Firm</h1>
  </div>
  <h1
    class="mt-2 mx-2 text-xl border-b-2 border-blue-800 slide-in-left"
    v-intersection-observer="onIntersecting"
  >
    About Oville Associates
  </h1>
  <p class="ml-2 slide-in-right" v-intersection-observer="onIntersecting">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, asperiores veniam enim officia
    modi illo repellendus similique odio eum ex? Optio dolor eaque officia recusandae sapiente fuga
    quidem quasi adipisci. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
    molestiae voluptate illum modi quasi, tenetur optio esse eos facilis possimus, voluptatibus
    dolor libero omnis pariatur aliquam ea iste deserunt cum. Lorem ipsum dolor sit amet consectetur
    adipisicing elit. Aspernatur ex neque, doloremque non facilis, voluptate explicabo nemo, dolor
    sed nobis aperiam quo esse eum officia pariatur perferendis quis? Autem, eaque? Lorem ipsum
    dolor sit amet consectetur, adipisicing elit. Distinctio quos vitae, rerum adipisci soluta quia
    cumque placeat ullam ab voluptates error at, cupiditate iusto reiciendis fugit in corrupti
    perferendis aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, asperiores
    veniam enim officia modi illo repellendus similique odio eum ex? Optio dolor eaque officia
  </p>
</template>
