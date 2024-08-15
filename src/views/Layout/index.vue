<!-- eslint-disable no-unused-vars -->
<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'
import { useCategoryStore } from '@/stores/categoryStore'
import { onMounted } from 'vue'

// 触发获取导航的action
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())

</script>

<template>
  <LayoutNav />
  <LayoutHeader />
  <LayoutFixed />
  <!-- 二级路由出口 -->
  <!-- 给二级路由出口添加 key 破坏复用机制 强制销毁重建 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />
  <LayoutFooter />
</template>

<style scoped></style>