<template>
  <div class="header">
    <div class="header-left">
      <HeaderBrumb/>
      <HeaderSearch/>
    </div>

    <div class="header-right">
      <HeaderUser/>
      <HeaderFullscreen/>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderSearch from './components/header-search/index.vue'
import HeaderUser from './components/header-user/index.vue'
import HeaderFullscreen from './components/header-fullscreen/index.vue'
import HeaderBrumb from './components/header-brumb/index.vue';

</script>

<style scoped lang="less">
  .header {
    padding-right: 20px;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .header-left {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .header-right {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 20px;
    }
  }
</style>