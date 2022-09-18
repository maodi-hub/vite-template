<template>
  <transition name="mimetic" appear>
    <div class="mimetic box" :style="{ '--i': delay}">
      <slot></slot>
    </div>
  </transition>
  
</template>

<script setup lang="ts">
interface Props {
  delay?: number
}

const { delay = 0 } = defineProps<Props>()
</script>

<style scoped lang="less">
.box {
  padding: 10px;
  min-width: 56px;
  min-height: 56px;
}
</style>