// axios基础的封装
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import { useUserStore } from "@/stores/user"


const httpInstance = axios.create({
  // 设置基地址
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  // 设置超时时间
  timeout: 5000
})

// 拦截器
// 添加请求拦截器
httpInstance.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // 1.从 pinia 获取 token 数据
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  // 2.按照后端要求拼接数据
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
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
  // 统一错误提示
  ElMessage({
    type: 'warning',
    message: error.response.data.message
  })
  return Promise.reject(error)
})

export default httpInstance