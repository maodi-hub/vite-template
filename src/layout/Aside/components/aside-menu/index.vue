<template>
  <el-menu
    :default-active="defaultActive"
    background-color="#e9ecef"
    active-text-color="#333"
    router>
      <template v-for="(item, index) in menu">
        <MenuItem :index="index" :path="item.path" :name="item.name"/>
      </template>
    </el-menu>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router';
import MenuItem from './aside-menu-item/index.vue'

const $route = useRoute()

const menu = ref([
  {
    path: '/home',
    name: '首页'
  },
  {
    path: '/charts',
    name: '图表' 
  }
])

const defaultActive = computed(() => $route.path)


</script>

<style scoped lang="less">
  .el-menu {
    border-right: none;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>