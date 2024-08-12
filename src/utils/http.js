// axios基础的封装
import axios from "axios"

const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// 拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
httpInstance.interceptors.response.use(res => {
  // 2xx 范围内的状态码都会触发该函数。
  return res.data
}, error => {
  // 超出 2xx 范围的状态码都会触发该函数。
  return Promise.reject(error)
})

export default httpInstance