<script setup>
import Homepanel from './Homepanel.vue'
import { getHotAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

const hotList = ref([])

const getHot = async () => {
  const res = await getHotAPI()
  hotList.value = res.result
  // console.log(res.result)
}

onMounted(() => {
  getHot()
})

</script>

<template>
  <Homepanel title="人气推荐" sub-title="人气爆款 不容错过">
    <ul class="goods-list">
      <li v-for="item in hotList" :key="item.id">
        <RouterLink to="/">
          <img v-img-lazy="item.picture" alt="">
          <p class="name">{{ item.title }}</p>
          <p class="desc">{{ item.alt }}</p>
        </RouterLink>
      </li>
    </ul>
  </Homepanel>
</template>

<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;

  li {
    width: 306px;
    height: 406px;

    border-radius: 10px;
    overflow: hidden;
    transition: all .2s;

    &:hover {
      transform: translate3d(0, -5px, 0);
      box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }

    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>