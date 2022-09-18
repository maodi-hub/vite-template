<template>
  <div class="search-input">
    <el-autocomplete
      v-model="inputValue"
      :fetch-suggestions="querySearch"
      :trigger-on-focus="false"
      clearable
      placeholder="搜索"
      @select="handleSelect"
      size="default"
      class="custom-border-radius-base">
        <template  #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-autocomplete>
  </div>
</template>

<script setup lang="ts">
import {
  Search
} from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { QueryValue } from '../interface'

const inputValue = ref('')
const queryParams = reactive([
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ])

const querySearch = (queryString: string, cb: any) => {
  const results = queryString
  // call callback function to return suggestions
  cb(results)
}

const handleSelect = (item: QueryValue) => {
  console.log(item)
}
</script>

<style scoped lang="less">
  .search-input {
    :deep(.el-autocomplete){
      width: 200px;
    }
  }

</style>