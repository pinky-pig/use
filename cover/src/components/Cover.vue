<script setup lang="ts">
import CoverContent from './Content.vue'
import StickerOne from './StickerOne.vue'
</script>

<template>
  <div class="cover-container relative h-full w-full overflow-hidden bg-[var(--cover-main-color)]">
    <CoverContent class="absolute w-3/5 h-3/5 top-1/2 -translate-y-1/2 left-4" />
    <StickerOne class="absolute w-[200px] h-[170px] top-1/2 -translate-y-1/2 right-4"></StickerOne>

    <!-- bg1 -->
    <div class="mask-1" />

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
  background-image: linear-gradient(82deg, #4c8bff, #f27d7d, #1f65fe);
}
.mask-1 {
  position: absolute;
  right: 20px;
  top: 50%;
  height: 90%;
  width: 60%;
  background-color: white;
  transform: translateY(-50%);
  backdrop-filter: blur(16px);
  opacity: 0.05;
  border-radius: 10px;
  z-index: 1;
}

</style>
