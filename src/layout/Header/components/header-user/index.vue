<template>
  <div class="header-user">
    <div class="no-login">
      <el-icon><UserFilled/></el-icon>
      <span>Sign In</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  UserFilled
} from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
  .header-user {
    .no-login {
      width: 81px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: .2s linear;
      cursor: pointer;
      &:hover {
        opacity: .7;
      }
      span {
        color: #333;
        font-size: 14px;
      }
    }
  }
</style>