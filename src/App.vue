<script setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<template>
  <div>
    <!-- 国际化处理 -->
    <el-config-provider :locale="zhCn">
      <router-view></router-view>
    </el-config-provider>
  </div>
</template>

<style scoped>

</style>
