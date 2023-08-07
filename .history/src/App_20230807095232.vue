<template>
  <!--  <router-view />-->
    <div>
      <el-config-provider :locale="zhCn">
        <router-view />
      </el-config-provider>
    </div>
  </template>
  
  <script setup>

  </script>
  