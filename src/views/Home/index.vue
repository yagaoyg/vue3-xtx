<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeGoods from './components/HomeGoods.vue'
import { ElMessage } from 'element-plus'
import { onMounted } from 'vue'

onMounted(() => {
  ElMessage({
    type: 'warning',
    message: '本网站仅供编程学习交流使用，不具备购物功能！',
  })
})
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeGoods />
</template>

<style scoped></style>