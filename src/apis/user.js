// 封装所有与用户相关的接口函数
import httpInstance from "@/utils/http"

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