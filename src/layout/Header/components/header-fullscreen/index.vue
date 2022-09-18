<template>
  <div class="header-fullscreen" @click="toggle">

  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()

</script>

<style scoped lang="less">
.header-fullscreen {
  width: 30px;
  height: 30px;
  background-color: black;
}
</style>