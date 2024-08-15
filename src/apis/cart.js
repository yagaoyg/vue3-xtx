// 封装购物车相关接口
import httpInstance from "@/utils/http"

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

// 获取购物车
export const getCartAPI = () => {
  return httpInstance({
    url: '/member/cart'
  })
}

// 删除购物车
export const delCartAPI = (ids) => {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}