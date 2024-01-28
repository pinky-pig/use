<script setup lang="ts">

</script>

<template>
  <div class="sticker-container rounded-md w-[200px] h-[170px] bg-transparent p-[6px] text-[var(--cover-main-color)]  border-[#457af7] border border-solid">
    <div 
    style="-webkit-text-stroke: 1px #457af7;"
    class="box pointer-events-none h-full w-full flex flex-col items-center justify-center rounded-md bg-[#020661] text-center font-bold border-[#457af7] border border-solid text-transparent ">
      <!-- 椭圆 -->
      <div class="grid w-full flex-1 flex-shrink-0 place-items-center px-[20px] ">
        <div class="h-[80%] w-full rounded-[100%] bg-transparent text-[36px] leading-[60px] border border-[#457af7]">
          {{ `Arvin` }}
        </div>
      </div>
      <!-- 描述 -->
      <div class="h-1/4 max-h-[42px] w-full flex-shrink-0 border-t border-[#457af7] rounded-b-md  border-solid bg-transparent p-[2px] ">
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
