// 引入vueuse用于判断元素是否进入视口区域
import { useIntersectionObserver } from '@vueuse/core'

// 定义懒加载插件
export const laztImg = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:指令绑定的那个元素 img
        // binding: binding.value 指令等于号后面绑定的表达式的值 图片url

        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 图片进入了视口区域
              el.src = binding.value
              // 加载后停止监听 防止内存浪费
              stop()
            }
          },
        )
      }
    })
  }
}