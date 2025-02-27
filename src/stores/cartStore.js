// 封装购物车模块
import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from "./userStore"
import { insertCartAPI, getCartAPI, delCartAPI } from "@/apis/cart"

export const useCartStore = defineStore('cart', () => {
  // 1.定义state - cartList
  const cartList = ref([])

  // 获取token
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)

  // 更新购物车列表
  const updateCart = async () => {
    const res = await getCartAPI()
    cartList.value = res.result
  }

  // 2.定义action - addCart
  const addCart = async (goods) => {
    const { skuId, count } = goods
    if (isLogin.value) {
      // 登录后加入购物车的逻辑
      await insertCartAPI({ skuId, count })
      updateCart()
    } else {
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
  }

  // 删除功能
  const delCart = async skuId => {
    if (isLogin.value) {
      // 登录后的删除实现
      await delCartAPI([skuId])
      updateCart()
    } else {
      // 思路：1.找到要删除项的下标 用splice方法
      // 2.使用过滤方法 - filter
      // console.log('点击了删除！')
      cartList.value = cartList.value.filter(item => item.skuId !== skuId)
    }
  }

  // 清除购物车数据
  const clearCart = () => {
    // console.log('退出登录了 自动清除购物车')
    cartList.value = []
  }

  // 合并本地购物车与服务端购物车
  // const mergeCart = () => [

  // ]

  // 单选功能
  const singleCheck = (skuId, selected) => {
    // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
    const item = cartList.value.find(item => item.skuId === skuId)
    item.selected = selected
  }

  // 总计
  const sum = computed(() => cartList.value.reduce((prve, curr) => prve + curr.count * curr.price, 0))

  // 总的数量
  const total = computed(() => cartList.value.reduce((prev, curr) => prev + curr.count, 0))

  // 是否全选
  const isAll = computed(() => cartList.value.every(item => item.selected))

  // 全选控制
  const allCheck = (selected) => {
    // 把 cartList 中的每一项中的 selected 都设置成全选框的状态
    cartList.value.forEach(item => item.selected = selected)
  }

  // 选中合计数量
  const checkTotal = computed(() => cartList.value.filter(item => item.selected).reduce((prev, curr) => prev + curr.count, 0))
  // 选中合计
  const checkSum = computed(() => cartList.value.filter(item => item.selected).reduce((prve, curr) => prve + curr.count * curr.price, 0))

  return {
    cartList,
    addCart,
    delCart,
    sum,
    total,
    singleCheck,
    isAll,
    allCheck,
    checkTotal,
    checkSum,
    clearCart,
    updateCart
  }
}, {
  persist: true,
})