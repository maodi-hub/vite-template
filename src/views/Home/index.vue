<template>
  <div class="home-container">
    home{{ $t("name") }}
    <el-button @click="locale = locale == 'zh-cn' ? 'en-us' : 'zh-cn'">qiehuan</el-button>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale, messages } = useI18n();
</script>

<style scoped lang="less"></style>
