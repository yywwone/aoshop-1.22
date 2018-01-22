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
                 <p>账户名</p>
                 <input class="samelength" type="text" placeholder="请输入您的支付宝账户">
                 <p>支付密码</p>
                 <input class="samelength" type="password" placeholder="请输入您的支付密码，不是登录密码"></br>
                 <input class="checkbox" type="checkbox">同意<a class="agree">《快速付款服务协议》</a>
                 <input class="samelength submit" type="submit" value="确认支付">
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
      width:380px;
      margin:20px auto;
  }
  .showimg p {
      font-size:14px;
      height: 30px;
      line-height: 30px;
  }
  .samelength {
      width:360px;
      height:40px;
      border:1px solid #ccc;
      padding-left:10px;
  }
  .checkbox {
      display:inline-block;
      margin:10px 0;
      margin-right:10px;
  }
  .agree {
      color:#148fcc;
      font-size:12px;
  }
  .submit {
      color:#fff;
      background-color: #d4282d;
      border: none;
      margin-top:10px;
  }
  .log {
      font-size:16px;
      color:#148fcc;
  }
</style>

