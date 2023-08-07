<template>
  <!--  <router-view />-->
    <div>
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
  </template>
  
  <script setup>
  import zhCn from "element-plus/lib/locale/lang/zh-cn"
  </script>
  