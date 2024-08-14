<script setup>
// 以24小时热榜为例 获取数据 渲染模版
import { getHotAPI } from '@/apis/detail.js'
import { computed, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const prop = defineProps({
  hotType: String
})

// 适配 title 1 - 24小时榜 | 2 - 周热榜
const TYPEMAP = {
  1: '24小时热榜',
  2: '周热榜'
}

const title = computed(() => TYPEMAP[prop.hotType])

const hotList = ref([])
const route = useRoute()
const getHot = async () => {
  const res = await getHotAPI({
    id: route.params.id,
    type: prop.hotType,
  })
  hotList.value = res.result
}

onMounted(() => {
  getHot()
})

</script>


<template>
  <div class="goods-hot">
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink :to="`/detail/${item.id}`" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>