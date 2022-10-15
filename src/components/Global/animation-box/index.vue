<template>
  <transition name="mimetic" appear>
    <div class="mimetic" :style="{ '--mimetic-i': delay }">
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
interface Props {
  delay?: number;
}

const { delay = 0 } = defineProps<Props>();
</script>

<style scoped lang="less"></style>
