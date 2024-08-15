// 封装购物车模块
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('cart', () => {
  // 1.定义state - cartList
  const cartList = ref([])

  // 2.定义action - addCart
  const addCart = (goods) => {
    // 添加购物车操作
    // 已添加过 - count + 1
    // 没有添加过 - 直接 push
    // 思路：通过匹配传递过来的skuId能不能在cartList中找到 找到了就是添加过
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      // 找到了
      item.count++
    } else {
      // 没找到
      cartList.value.push(goods)
    }
  }

  // 删除功能
  const delCart = skuId => {
    // 思路：1.找到要删除项的下标 用splice方法
    // 2.使用过滤方法 - filter
    // console.log('点击了删除！')
    cartList.value = cartList.value.filter(item => item.skuId !== skuId)
  }

  // 总计
  const sum = computed(() => cartList.value.reduce((prve, curr) => prve + curr.count * curr.price, 0))

  // 总的数量
  const total = computed(() => cartList.value.reduce((prev, curr) => prev + curr.count, 0))

  return {
    cartList,
    addCart,
    delCart,
    sum,
    total
  }
}, {
  persist: true,
})