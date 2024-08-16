// 封装所有与用户相关的接口函数
import httpInstance from "@/utils/http"

// 登录接口
export const loginAPI = ({ account, password }) => {
  return httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

// 个人中心猜你喜欢接口
export const getLikeListAPI = ({ limit = 4 }) => {
  return httpInstance({
    url: '/goods/relevant',
    params: {
      limit
    }
  })
}