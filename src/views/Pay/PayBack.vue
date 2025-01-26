<script setup>
import { getOrderAPI } from '@/apis/pay'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const orderInfo = ref({})

const getOrder = async () => {
  const res = await getOrderAPI(route.query.orderId)
  orderInfo.value = res.result
}

onMounted(() => getOrder())

</script>


<template>
  <div class="xtx-pay-page">
    <div class="container">
      <!-- 支付结果 -->
      <div class="pay-result">
        <!-- 路由参数中获取到的是字符串 不是布尔值 -->
        <span class="iconfont icon-queren2 green" v-if="$route.query.payResult === 'true'"></span>
        <span class="iconfont icon-shanchu red" v-else></span>
        <p class="tit">支付{{ $route.query.payResult === 'true' ? '成功' : '失败' }}</p>
        <p class="tip" v-if="$route.query.payResult === 'true'">我们将尽快为您发货，收货期间请保持手机畅通</p>
        <p class="tip" v-else>支付异常 请重试或联系我们</p>
        <p>支付方式：<span>支付宝</span></p>
        <p>支付金额：<span>¥{{ orderInfo.payMoney?.toFixed(2) || ' 请等待... ' }}</span></p>
        <div class="btn">
          <RouterLink to="/member/order"><el-button type="primary" style="margin-right:20px">查看订单</el-button>
          </RouterLink>
          <RouterLink to="/"><el-button>进入首页</el-button></RouterLink>
        </div>
        <p class="alert">
          <span class="iconfont icon-tip"></span>
          温馨提示：小兔鲜儿不会以订单异常、系统升级为由要求您点击任何网址链接进行退款操作，保护资产、谨慎操作。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pay-result {
  padding: 100px 0;
  background: #fff;
  text-align: center;
  margin-top: 20px;

  >.iconfont {
    font-size: 100px;
  }

  .green {
    color: #1dc779;
  }

  .red {
    color: $priceColor;
  }

  .tit {
    font-size: 24px;
  }

  .tip {
    color: #999;
  }

  p {
    line-height: 40px;
    font-size: 16px;
  }

  .btn {
    margin-top: 50px;
  }

  .alert {
    font-size: 12px;
    color: #999;
    margin-top: 50px;
  }
}
</style>