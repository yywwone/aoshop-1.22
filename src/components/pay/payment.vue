<template>
  <div class="big-box">]
      <div class="payment">
          <navlogo></navlogo>
          <div class="ordersussed">
              <div class="sub">订单提交成功，请尽快付款！</div>
              <div class="money">支付金额<b>$176.00</b><p>收起详情</p></div>
          </div>
          <div class="goods-detail">
              <p>商品名称：a2 白金婴儿配方幼儿奶粉三段 900克/罐 4罐 1-3岁</p>
              <p>收货地址：浙江省杭州市余杭区良睦路356号  王奇  182****7160</p>
          </div>
          <div class="Alipay">
              <p>支付宝支付</p>
              <div class="showimg">
                  <div class="left">
                      <p><img src="../../assets/images/pay/er.png" alt=""></p>
                      <p><img src="../../assets/images/pay/sao.png" alt=""></p>
                  </div>
                  <div class="right">
                      <img class="pos" src="../../assets/images/pay/ss.png" alt="">
                      <img src="../../assets/images/pay/phone.png" alt="">
                  </div>
              </div>
              <a href="#" class="log">登录账户付款 ﹥</a>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
/* 订单提交成功 */
    .payment {
        width: 1200px;
        margin:0 auto;
    }
    .ordersussed {
        margin-top:20px;
        overflow: hidden;
    }
    .sub {
        float:left;
        font-size:16px;
    }
    .money {
        float:right;
        text-align: right;
        font-size:14px;
    }
    .money b {
        font-size:24px;
        color:#d4282d;
        margin-left:10px;
    }
    .money p {
        color:#148fcc;
        font-size:14px;
        margin-top:5px;
        padding-right:20px;
        background: url('../../assets/images/upd.png') no-repeat;
        background-position: 150px 2px
    }
    
    /* 收起详情 */
  .goods-detail {
      width: 1120px;
      margin:0 auto;
      border-top:2px solid #ccc;
      margin-top:40px;
      padding-top:5px;
      /* display:none; */
  }
  .goods-detail p {
      height: 30px;
      line-height: 30px;
  }
  /* 支付宝支付 */
  .Alipay {
      width:100%;
      margin-top:35px;
      padding:30px;
      box-shadow: 1px  1px 20px #ccc;
      margin-bottom:130px;
  }
  .Alipay p {
      font-size:24px;
  }
  .showimg  {
      overflow: hidden;
      width:700px;
      margin:20px auto;
  }
  .showimg .left {
      float: left;
  }
  .showimg {
      display: block;
  }
.showimg .left p:first-child img {
    width: 300px;
    height:300px;
}
.showimg .left p:nth-child(2) img {
    width: 300px;
    height:70px;
    margin-top:20px;
}
  .showimg .right {
      float: right;
      position: relative;
  }
  .pos {
      position: absolute;
      top:50%;
      left:-55px;
      transform: translateY(-50%);
  }
  .log {
      font-size:16px;
      color:#148fcc;
  }
</style>

