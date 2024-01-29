<script setup lang="ts">
import { ref } from 'vue'
import { useResizeObserver } from '@vueuse/core'

const text = ref("My default cover");


const el = ref(null)
useResizeObserver(el, (entries) => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
})


</script>

<template>
  <div
    class="content-container w-fit h-fit border-[2px] border-[#ffffff] rounded-md border-solid bg-[var(--cover-main-color)] px-4 py-8 ">

    <!-- 线条 -->
    <span class="pointer-events-none absolute inset-0 m-[16px] select-none opacity-100 ">
      <span class="absolute h-2.5 w-2.5 border border-[#457AF7] bg-[#457AF7] -left-1.5 -top-1.5" />
      <span class="absolute h-2.5 w-2.5 border border-[#457AF7] bg-[#457AF7] -right-1.5 -top-1.5" />
      <span class="absolute h-2.5 w-2.5 border border-[#457AF7] bg-[#457AF7] -bottom-1.5 -left-1.5" />
      <span class="absolute h-2.5 w-2.5 select-none border border-[#457AF7] bg-[#457AF7] -bottom-1.5 -right-1.5" />

      <span
        class="absolute h-[calc(100%_+_72px)] w-1px select-none border border-[#457AF7] border-dashed -left-0.5 -top-[36px]" />
      <span
        class="absolute h-[calc(100%_+_72px)] w-1px select-none border border-[#457AF7] border-dashed -right-0.5 -top-[36px]" />
      <span
        class="absolute h-1px w-[calc(100%_+_72px)] select-none border border-[#457AF7] border-dashed -left-[36px] -top-0.5" />
      <span
        class="absolute h-1px w-[calc(100%_+_72px)] select-none border border-[#457AF7] border-dashed -bottom-0.5 -right-[36px]" />
    </span>

    <!-- 输入框 -->
    <div class="mx-[10px] text-[36px] text-[#c29048] font-bold leading-normal ">
      <textarea ref="el" class="resize bg-[var(--cover-main-color)] focus-within:outline-none" v-text="text" />
    </div>
  </div>
</template>

<style scoped>
.content-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-image: url(/noise-light.png); */
  background-repeat: repeat;
  pointer-events: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  color: rgb(255, 250, 221);
}
</style>
