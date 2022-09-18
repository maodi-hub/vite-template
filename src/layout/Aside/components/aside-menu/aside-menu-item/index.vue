<template>
  <transition name="menu-item" appear>
    <el-menu-item :index="path" :style="{'--i': index + .75}">
      <el-icon><icon-menu /></el-icon>
      <span>{{name}}</span>
    </el-menu-item>
  </transition>
</template>

<script setup lang="ts">
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

interface Props {
  index: number,
  name: string,
  path: string
}
defineProps<Props>()
</script>

<style scoped lang="less">
.el-menu-item {
  padding: 0;
  margin: 0 10px;
  background: #e9ecef;
  border-radius: 10px;
  transition: .2s linear;
  box-shadow:
    7px 7px 12px rgba(0, 0, 0, .1),
    -7px -7px 12px rgba(255, 255, 255, .9),
    inset 0 0 0 rgba(255, 255, 255, .9),
    inset 0 0 0 rgba(0, 0, 0, .1);
    &.is-active {
      box-shadow:
        0 0 0 rgba(0, 0, 0, .1),
        0 0 0 rgba(255, 255, 255, .9),
        inset -7px -7px 12px rgba(255, 255, 255, .9),
        inset 7px 7px 12px rgba(0, 0, 0, .1);
    }
}

.menu-item-enter-from,
.menu-item-leave-to {
  opacity: 0;
  transform: translateX(-110%)
}

.menu-item-enter-to,
.menu-item.leave-from {
  opacity: 1;
  transform: translateX(0)
}

.menu-item-enter-active,
.menu-item-leave-active {
  transition: .3s calc(var(--i) * .1s) ;
}

</style>