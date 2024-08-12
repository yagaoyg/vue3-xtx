<script setup>

</script>

<template>
  <header>
    <!-- 头部 -->
    <div class="header wrapper">

      <!-- logo -->
      <div class="logo">
        <h1><a href="#">小兔鲜儿</a></h1>
      </div>

      <!-- 导航 -->
      <div class="nav">
        <ul>
          <li><a href="#">首页</a></li>
          <li><a href="#">居家</a></li>
          <li><a href="#">美食</a></li>
          <li><a href="#">服装</a></li>
        </ul>
      </div>

      <!-- 搜索 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 购物车 -->
      <div class="cart">
        <a href="#"><span class="iconfont icon-cart-full"></span>
          <i>2</i>
        </a>
      </div>
    </div>
  </header>
</template>


<style scoped lang='scss'>
header {
  background-color: #fff;
}

.wrapper {
  margin: 0 auto;
  width: 1240px;
}

.header {
  display: flex;
  padding-top: 22px;
  padding-bottom: 22px;
  height: 132px;
}

/* logo */
.logo {
  margin-right: 40px;
  width: 200px;
  height: 88px;
}

.logo a {
  display: block;
  width: 200px;
  height: 88px;
  background-image: url(@/assets/images/logo.png);
  background-size: contain;
  font-size: 0;
}

/* 导航 */
.nav {
  margin-top: 33px;
  margin-right: 28px;

}

.nav ul {
  display: flex;
}

.nav li {
  margin-right: 47px;
}

.nav li a {
  padding-bottom: 10px;
  font-size: 16px;
  /* background-color: skyblue; */
}

.nav li a:hover {
  color: #5EB69C;
  border-bottom: 2px solid #5EB69C;
}

/* 搜索 */
.search {
  display: flex;
  margin-top: 33px;
  margin-right: 45px;
  margin-left: 390px;
  width: 170px;
  height: 34px;
  background-color: #fff;
  border-bottom: 2px solid #f4f4f4;
}

.search .iconfont {
  font-size: 18px;
  color: #ccc;
  margin-right: 8px;
}

.search input {
  /* 浏览器默认生效 input 标签的默认宽度，所以flex: 1 不生效 */
  /* 解决办法：重置 input 标签的默认宽度 → width: 0 */
  width: 0;
  flex: 1;
}

.search input::placeholder {
  color: #ccc;
}

/* 购物车 */
.cart {
  position: relative;
  margin-top: 32px;
}

.cart .iconfont {
  font-size: 24px;
}

.cart i {
  position: absolute;
  padding: 0 6px;
  top: 1px;
  /* right 定位右对齐，如果文字多了，向左撑开，可能盖住其他内容 */
  /* right: 1px; */
  left: 15px;

  height: 15px;
  background-color: #E26237;
  border-radius: 8px;

  font-size: 14px;
  color: #fffefe;
  line-height: 15px;
}
</style>