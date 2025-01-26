import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

// 导航列表数据管理
export const useCategoryStore = defineStore('category', () => {
  // state 导航列表数据
  const categoryList = ref([])

  // action 获取导航数据的方法
  const getCategory = async () => {
    const res = await getCategoryAPI()
    // console.log(res)
    categoryList.value = res.result
  }

  return {
    categoryList,
    getCategory
  }
})
