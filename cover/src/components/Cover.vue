<script setup lang="ts">
import CoverContent from './Content.vue'
import StickerOne from './StickerOne.vue'
import StickerTwo from './StickerTwo.vue'
import StickerThree from './StickerThree.vue'
import StickerFour from './StickerFour.vue'
</script>

<template>
  <div class="cover-container relative h-full w-full overflow-hidden bg-[var(--cover-main-color)]">
    <CoverContent class="absolute top-1/2 -translate-y-1/2 left-4" />
    <StickerOne class="absolute top-1/2 -translate-y-1/2 right-4"></StickerOne>
    <StickerTwo class="absolute left-1/2 -translate-x-1/2 top-4"></StickerTwo>
    <StickerThree class="absolute left-2/3 -translate-x-1/2 top-4"></StickerThree>
    <StickerFour class="absolute top-2/3 -translate-y-1/2 left-4"></StickerFour>

  </div>
</template>

<style scoped>
.cover-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(/noise-light.png);
  background-repeat: repeat;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  color: rgb(255, 250, 221);
  background-color: linear-gradient(82deg, #4c8bff, #f27d7d, #1f65fe);
}

.cover-container::after{
  content: '';
  position: absolute;
  pointer-events: none;
  width: 50vw;
  height: 50vw;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 100%;
  filter: blur(40px);
  opacity: 0.3;
  /* background-image: linear-gradient(82deg, #4c8bff, #f27d7d, #1f65fe); */
}
</style>
