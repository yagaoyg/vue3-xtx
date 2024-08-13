// 封装分类数据业务相关代码
import { ref, onMounted } from "vue"
import { getCategoryAPI } from '@/apis/category.js'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'

export function useCategory() {
  // 获取路由实例 从而获得路由参数
  const route = useRoute()

  const categoryData = ref({})

  const getCategory = async (id = route.params.id) => {
    // 获取路由参数
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
    // console.log(categoryData.value)
  }

  onMounted(() => getCategory())

  // 目标：在路由参数变化的时候 可以把分类数据接口重新发送
  // 参数 to 是目标路由对象
  onBeforeRouteUpdate((to) => {
    // console.log('路由变化了！')
    // console.log(to)
    getCategory(to.params.id)
  })

  return {
    categoryData
  }
}

