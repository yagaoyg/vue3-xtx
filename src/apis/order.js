import httpInstance from "@/utils/http"

export const getUserOrderAPI = (params) => {
  console.log('接口调用中！')
  return httpInstance({
    url: '/member/order',
    method: 'GET',
    params
  })
}