import httpInstance from "@/utils/http"

// 获取banner图片
export function getBannerAPI(params = {}) {
  // 默认为1 分类下为2
  const { distributionSite = '1' } = params
  return httpInstance({
    url: '/home/banner',
    params: {
      distributionSite
    }
  })
}

export function getNewAPI() {
  return httpInstance({
    url: '/home/new'
  })
}

export function getHotAPI() {
  return httpInstance({
    url: '/home/hot'
  })
}

export function getGoodsAPI() {
  return httpInstance({
    url: '/home/goods'
  })
}