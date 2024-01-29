<script setup lang="ts">

</script>

<template>
  <div class="sticker-container rounded-md w-full h-full  bg-white p-[6px] text-[var(--cover-main-color)] ">
    <div class="box pointer-events-none h-full w-full flex flex-col items-center justify-center rounded-md bg-[var(--cover-main-color)] text-center font-bold ">
      <!-- 椭圆 -->
      <div class="grid w-full flex-1 flex-shrink-0 place-items-center px-[30px]">
        <div contenteditable class="h-[calc(100%_-_60px)] w-full rounded-[50px] bg-white leading-[60px] flex justify-center items-center text-[36px]">
          {{ `Arvin` }}
        </div>
      </div>
      <!-- 描述 -->
      <div contenteditable class="h-1/4 max-h-[42px] w-full flex-shrink-0 border-4 border-[var(--cover-main-color)] rounded-md border-solid bg-white p-[2px] flex justify-center items-center">
        mmeme.me
      </div>
    </div>
  </div>
</template>

<style scoped>
.sticker-container::before {
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
