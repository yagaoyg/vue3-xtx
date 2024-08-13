import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

// 引入懒加载指令插件并注册
import { laztImg } from './directives'

// 测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then((result) => {
//   console.log(result)
// }).catch((err) => {
//   console.log(err)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(laztImg)

app.mount('#app')
