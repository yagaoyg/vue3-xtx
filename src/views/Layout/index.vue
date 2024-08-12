<!-- eslint-disable no-unused-vars -->
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <!-- 二级路由出口 -->
  <RouterView />
  <LayoutFooter />
</template>

<style scoped></style>