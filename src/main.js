import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

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

app.mount('#app')
