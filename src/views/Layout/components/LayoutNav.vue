<script setup>
import { useUserStore } from '@/stores/userStore'
import { RouterLink, useRouter } from 'vue-router'

const userStoer = useUserStore()
const router = useRouter()

const confirm = () => {
  // console.log('用户要退出登录了')
  // 退出登录逻辑
  userStoer.clearUserInfo()
  // 跳回登录页
  router.replace({ path: '/login' })
}

</script>

<template>
  <div class="shortcut">
    <div class="wrapper">
      <ul>
        <!-- 多模版渲染 区分登陆状态和非登陆状态 -->

        <!-- 适配思路：登录时显示第一块 非登录时显示第二块  通过是否有token来判断 -->
        <template v-if="userStoer.userInfo.token">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>{{ userStoer.userInfo.account }}</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消" @confirm="confirm">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li>
            <RouterLink to="/member/order">我的订单</RouterLink>
          </li>
          <li>
            <RouterLink to="/member">会员中心</RouterLink>
          </li>
        </template>
        <template v-else>
          <li>
            <RouterLink class="login" to="/login">请先登录</RouterLink>
          </li>
          <li>
            <RouterLink to="/">免费注册</RouterLink>
          </li>
          <!-- <li>
            <RouterLink to="/member/order">我的订单</RouterLink>
          </li>
          <li>
            <RouterLink to="/member">会员中心</RouterLink>
          </li> -->
          <li>
            <RouterLink to="/">帮助中心</RouterLink>
          </li>
          <li>
            <RouterLink to="/">在线客服</RouterLink>
          </li>
          <!-- <li><a href="#"><i class="iconfont icon-mobile-phone"></i>手机版</a></li> -->
        </template>
      </ul>
    </div>
  </div>

</template>


<style scoped lang="scss">
.wrapper {
  margin: 0 auto;
  width: 1240px;
}

.shortcut {
  height: 52px;
  background-color: #333;
}

.shortcut .wrapper {
  display: flex;
  justify-content: flex-end;
  /* background-color: pink; */
}

.shortcut ul {
  display: flex;
}

.shortcut li a {
  padding: 0 15px;
  font-size: 14px;
  line-height: 52px;
  color: #fff;
  border-right: 1px solid #999;
}

.shortcut li:last-child a {
  border: 0;
}

.shortcut li .iconfont {
  vertical-align: middle;
}

.shortcut li .login {
  color: #5EB69C;
}
</style>