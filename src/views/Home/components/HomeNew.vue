<script setup>
import Homepanel from './Homepanel.vue'
import { getNewAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

const newList = ref([])

const getNew = async () => {
  const res = await getNewAPI()
  // console.log(res)
  newList.value = res.result
}

onMounted(() => {
  getNew()
})

</script>

<template>
  <Homepanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </Homepanel>
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;
    border-radius: 10px;
    overflow: hidden;

    background: $sucColor;
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
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>