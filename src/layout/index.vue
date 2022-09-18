<template>
  <el-container>
    <el-aside width="200px">
      <Aside/>
    </el-aside>
    <el-container>
      <el-header>
        <Header/>
      </el-header>
      <el-main>
        <router-view v-slot="{ Component, route }">
          <transition name="page">
            <keep-alive>
              <component :is="Component" :key="route.path"></component>
            </keep-alive>
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
  import Aside from './Aside/index.vue'
  import Header from './Header/index.vue'
</script>

<style scoped lang="less">
.el-container {
  height: 100%;
  .el-aside {
    overflow: visible;
  }
  .el-header {
    height: 90px;
  }
  .el-main {
    .main-container {
      padding: 10px;
      height: calc(100% - 20px);
      background-color: rgba(255, 255, 255, .1);
    }
  }
}

</style>