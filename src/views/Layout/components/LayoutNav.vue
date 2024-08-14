<script setup>

</script>

<template>
  <div class="shortcut">
    <div class="wrapper">
      <ul>
        <!-- 多模版渲染 区分登陆状态和非登陆状态 -->
        <template v-if="false">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>周杰伦</a></li>
          <li>
            <el-popconfirm title="确认退出吗?" confirm-button-text="确认" cancel-button-text="取消">
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="#" class="login" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="#">免费注册</a></li>
          <li><a href="#">我的订单</a></li>
          <li><a href="#">会员中心</a></li>
          <li><a href="#">帮助中心</a></li>
          <li><a href="#">在线客服</a></li>
          <li><a href="#"><i class="iconfont icon-mobile-phone"></i>手机版</a></li>
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