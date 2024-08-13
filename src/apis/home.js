import httpInstance from "@/utils/http"

// 获取banner图片
export function getBannerAPI() {
  return httpInstance({
    url: '/home/banner'
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