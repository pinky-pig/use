<script setup lang="ts">
const props = withDefaults(defineProps<{
  class?: string,
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'initial' | 'inherit',
  minWidth?: number,
  minHeight?: number,
  maxWidth?: number,
  maxHeight?: number,
}>(),{
  resize: 'both'
})
</script>

<template>
  <div 
    :class="props.class" 
    :style="{
      resize: resize,
      overflow: resize !=='none' ? 'auto' : 'unset',
      minWidth: maxWidth + 'px !important',
      minHeight: maxWidth + 'px !important',
      maxWidth: maxWidth + 'px !important',
      maxHeight: maxWidth + 'px !important',
    }" 
    class="rounded-lg border bg-white text-black shadow-sm min-w-[50px] min-h-[50px]"
  >
    <slot />
  </div>
</template>
