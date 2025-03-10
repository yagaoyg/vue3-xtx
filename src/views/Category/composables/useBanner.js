// 封装Banner轮播图业务相关代码
import { ref, onMounted } from "vue"
import { getBannerAPI } from '@/apis/home'

export function useBanner() {
  const bannerList = ref([])

  const getBanner = async () => {
    const res = getBannerAPI()
    // console.log(res.result)
    bannerList.value = res
  }

  onMounted(() => getBanner())

  return {
    bannerList
  }
}