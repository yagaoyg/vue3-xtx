<script setup>
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

const bannerList = ref([])
const getBanner = async () => {
  const res = await getBannerAPI()
  // console.log(res)
  bannerList.value = res
  console.log(bannerList.value)
}

onMounted(() => {
  getBanner()
})

</script>

<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <RouterLink :to="item.hrefUrl">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style scoped lang="scss">
.home-banner {
  position: absolute;
  width: 1240px;
  height: 500px;
  // background-color: pink;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>