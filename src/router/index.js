// createRouter:创建路由实例
// createWebHistory:创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置 path 和 component 对应关系的位置
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: 'category/:id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: 'category/sub/:id',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: 'detail/:id',
          component: () => import('@/views/Detail/index.vue')
        },
        {
          path: 'cartlist',
          component: () => import('@/views/CartList/index.vue')
        },
        {
          path: 'checkout',
          component: () => import('@/views/CheckOut/index.vue')
        },
        {
          path: 'pay',
          component: () => import('@/views/Pay/index.vue')
        },
        {
          path: 'paycallback',
          component: () => import('@/views/Pay/PayBack.vue')
        },
        {
          path: 'member',
          component: () => import('@/views/Member/index.vue'),
          children: [
            {
              // 路径置空 二级路由默认渲染此三级路由的内容
              path: '',
              component: () => import('@/views/Member/components/UserInfo.vue')
            },
            {
              path: 'order',
              component: () => import('@/views/Member/components/UserOrder.vue')
            },
          ]
        },
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  // 路由滚动行为配置
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
