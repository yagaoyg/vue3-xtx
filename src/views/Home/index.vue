<script setup>
import HomeCategory from './components/HomeCategory.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeGoods from './components/HomeGoods.vue'

</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeGoods />

  <!-- 测试面板组件 -->
  <!-- <Homepanel title="新鲜好物" sub-title="新鲜好物副标题">
    <div>
      我是新鲜好物的插槽
    </div>
  </Homepanel>

  <Homepanel title="人气推荐" sub-title="人气推荐副标题">
    <div>
      我是人气好物的插槽
    </div>
  </Homepanel> -->
</template>

<style scoped></style>