<script setup lang="ts">
import { ref } from 'vue'
import { useWindowSize, useMagicKeys } from '@vueuse/core'
import { useDraggable, Position } from '@vueuse/core'
import StickerContent from './StickerContent.vue'
import StickerOne from './StickerOne.vue'
import StickerTwo from './StickerTwo.vue'
import StickerThree from './StickerThree.vue'
import StickerFour from './StickerFour.vue'

import { ResizeCard, ResizeCardContent } from './resize-card'

const { width, height } = useWindowSize()
const { ctrl } = useMagicKeys()

const stickerContentRef = ref<HTMLElement | null>(null)
const { style: stickerContentStyle } = useDraggable(stickerContentRef, {
  initialValue: { x: 40, y: 40 },
  onStart: () => {
    if (!ctrl.value) {
      return false;
    }
  },
  onMove: (position: Position) => {
    if (position.x > width.value - 40) {
      position.x = width.value - 40
    }
    if (position.x < 0) {
      position.x = 0
    }
    if (position.y > height.value - 40) {
      position.y = height.value - 40
    }
    if (position.y < 0) {
      position.y = 0
    }
  }
})

const stickerOneRef = ref<HTMLElement | null>(null)
const { style: stickerOneStyle } = useDraggable(stickerOneRef, {
  initialValue: { x: 40, y: 40 },
  onStart: () => {
    if (!ctrl.value) {
      return false;
    }
  },
  onMove: (position: Position) => {
    if (position.x > width.value - 40) {
      position.x = width.value - 40
    }
    if (position.x < 0) {
      position.x = 0
    }
    if (position.y > height.value - 40) {
      position.y = height.value - 40
    }
    if (position.y < 0) {
      position.y = 0
    }
  }
})

const stickerTwoRef = ref<HTMLElement | null>(null)
const { style: stickerTwoStyle } = useDraggable(stickerTwoRef, {
  initialValue: { x: 40, y: 40 },
  onStart: () => {
    if (!ctrl.value) {
      return false;
    }
  },
  onMove: (position: Position) => {
    if (position.x > width.value - 40) {
      position.x = width.value - 40
    }
    if (position.x < 0) {
      position.x = 0
    }
    if (position.y > height.value - 40) {
      position.y = height.value - 40
    }
    if (position.y < 0) {
      position.y = 0
    }
  }
})
const stickerThreeRef = ref<HTMLElement | null>(null)
const { style: stickerThreeStyle } = useDraggable(stickerThreeRef, {
  initialValue: { x: 40, y: 40 },
  onStart: () => {
    if (!ctrl.value) {
      return false;
    }
  },
  onMove: (position: Position) => {
    if (position.x > width.value - 40) {
      position.x = width.value - 40
    }
    if (position.x < 0) {
      position.x = 0
    }
    if (position.y > height.value - 40) {
      position.y = height.value - 40
    }
    if (position.y < 0) {
      position.y = 0
    }
  }
})

const stickerFourRef = ref<HTMLElement | null>(null)
const { style: stickerFourStyle } = useDraggable(stickerFourRef, {
  initialValue: { x: 40, y: 40 },
  onStart: () => {
    if (!ctrl.value) {
      return false;
    }
  },
  onMove: (position: Position) => {
    if (position.x > width.value - 40) {
      position.x = width.value - 40
    }
    if (position.x < 0) {
      position.x = 0
    }
    if (position.y > height.value - 40) {
      position.y = height.value - 40
    }
    if (position.y < 0) {
      position.y = 0
    }
  }
})

</script>

<template>
  <div class="cover-container relative h-full w-full overflow-hidden bg-[var(--cover-main-color)]">
    <div ref="stickerContentRef" :style="stickerContentStyle" class="fixed">
      <ResizeCard>
        <ResizeCardContent>
          <StickerContent />
        </ResizeCardContent>
      </ResizeCard>
    </div>

    <div ref="stickerOneRef" :style="stickerOneStyle" class="fixed">
      <ResizeCard>
        <ResizeCardContent>
          <StickerOne />
        </ResizeCardContent>
      </ResizeCard>
    </div>

    <div ref="stickerTwoRef" :style="stickerTwoStyle" class="fixed">
      <StickerTwo></StickerTwo>
    </div>


    <div ref="stickerThreeRef" :style="stickerThreeStyle" class="fixed">
      <StickerThree></StickerThree>
    </div>

    <div ref="stickerFourRef" :style="stickerFourStyle" class="fixed">
      <ResizeCard>
        <ResizeCardContent>
          <StickerFour />
        </ResizeCardContent>
      </ResizeCard>
    </div>


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

.cover-container::after {
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
