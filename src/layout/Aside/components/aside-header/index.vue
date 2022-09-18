<template>
  <div class="aside-header">
    <el-dropdown>
      <el-button>
        首页<el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>Action 1</el-dropdown-item>
          <el-dropdown-item>Action 2</el-dropdown-item>
          <el-dropdown-item>Action 3</el-dropdown-item>
          <el-dropdown-item>Action 4</el-dropdown-item>
          <el-dropdown-item>Action 5</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'

</script>

<style scoped lang="less">
 .aside-header {
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-dropdown {
    width: 180px;
    height: 40px;
    .el-button {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
 }
</style>