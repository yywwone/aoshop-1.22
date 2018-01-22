<template>
  <div class="bigbox">
    <!-- 顶部导航 -->
    <navheader></navheader>
    <div class="pay-box">
      <div class="pay-main">
        <p class="receiver">收货人信息<a class="add-address">添加新地址</a></p>
        <ul class="rece-ul">
          <li>
            <p><span>王奇</span><span>182****7160</span><span class="default">默认地址</span></p>
            <p>浙江省杭州市余杭区良睦路382号</p>
            <p class="change">修改地址</p>  
            <img src="../../assets/images/choice.png" alt="">   
          </li>
          <li>
            <p><span>王奇</span><span>182****7160</span><span class="default">默认地址</span></p>
            <p>浙江省杭州市余杭区良睦路382号</p>
            <p class="change">修改地址</p>  
            <img src="../../assets/images/choice.png" alt="">
          </li>
          <li>
            <p><span>王奇</span><span>182****7160</span><span class="default">默认地址</span></p>
            <p>浙江省杭州市余杭区良睦路382号</p>
            <p class="change">修改地址</p>  
            <img src="../../assets/images/choice.png" alt="">
          </li>
          <li>
            <p><span>王奇</span><span>182****7160</span><span class="default">默认地址</span></p>
            <p>浙江省杭州市余杭区良睦路382号</p>
            <p class="change">修改地址</p>  
            <img src="../../assets/images/choice.png" alt="">
          </li>
          <li>
            <p><span>王奇</span><span>182****7160</span><span class="default">默认地址</span></p>
            <p class="dizhi">浙江省杭州市余杭区良睦路382号</p>
            <a href="#" class="change">修改地址</a>  
            <img src="../../assets/images/choice.png" alt="">
          </li>
        </ul>
        <p class="receiver">支付方式</p>
        <ul class="rece-ul">
          <li class="payer">
            <p>支付宝支付</p>
            <img src="../../assets/images/choice.png" alt="">   
          </li>
           <li class="payer">
            <p>财付通支付</p>
            <img src="../../assets/images/choice.png" alt="">   
          </li>
          <li class="payer">
            <p>PayPal支付</p>
            <img src="../../assets/images/choice.png" alt="">   
          </li>
        </ul>
        <p class="receiver">商品及物流信息</p>
        <div class="goodmes">
          <table>
          <tr>
            <th>商品信息</th>
            <th>物流信息</th> 
            <th>单价</th>
            <th>数量</th>
            <th>总价(含运费)</th>
          </tr>
          <tr>
            <td>
              <img src="../../assets/images/comment/nai.png" alt="">
              <div class="tdimg">
                <p>a2 白金婴儿配方幼儿奶粉三段 900克/罐 4罐 1-3岁</p>
                <p>不支持七天无理由退货</p>
              </div> 
            </td>
            <td>
              <p class="inter">国际物流</p>
              <p>运费: $16.00</p>
            </td>
            <td>
              <p>$160</p>
              <p>(会员价)</p>
            </td>
            <td>1</td>
            <td class="price">$176.00</td>
          </tr>
          </table>
        </div>
        <p class="receiver">发票信息</p>
        <div class="bill">
          <span>发票类型：<b>电子发票</b></span>
          <span>发票抬头：<b>王奇</b></span>
        </div>
        <!-- 使用优惠券 -->
        <p class="receiver Coupon">使用优惠券<span>∨</span></p>
        <p class="receiver Coupon">发票信息</p>
        <div class="all">
          <p class="rlt"><span>共<b>1</b>件商品，总额:</span><span>$160.00</span></p>
          <p class="rlt"><span>运费:</span><span>$16.00</span></p>
          <p class="rlt"><span>已优惠:</span><span>$0.00</span></p>
          <p class="rlt"><span>应付金额:</span><span class="price-all">$176.00</span></p>
          <p class="smallfont"><span>配送至 浙江省杭州市余杭区良睦路382号</span></p>
          <p class="smallfont"><span>收货人:王奇  182***7160</span></p>
        </div>
        <input class="submit" type="submit" value="提交订单">
      </div>
    </div>
      <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>
<style scoped>
.pay-box {
  width:100%;
}
.pay-main {
  width:1200px;
  margin:0 auto;
  margin-top: 55px;  
}
.receiver {
  font-size:16px;
  color:#333;
}
.add-address {
  font-size:12px;
  color:#18afe7;
  display:inline-block;
  margin-left:10px;
}
.rece-ul {
  margin-top:30px;
  width:1200px;
  overflow: hidden;
}
.rece-ul li {
  position: relative;
  width:260px;
  border:1px dashed red;
  padding-top:15px;
  padding-left: 15px; 
  padding-bottom:10px;
  font-size:12px;
  float: left;
  margin-right:35px;
  margin-bottom:30px;
}

.rece-ul p {
  color:#333;
  height: 23px;
  line-height: 23px;
}
.dizhi {
  width:70%;
}
li .change {
  display: inline-block;
  text-align: right;
  width:80%;
  color:#18afe7;
}
li p>span {
  display:inline-block;
   padding-left: 5px;
   padding-right: 5px;
}
li p>span:nth-child(2) {
  margin-left:29px;
  margin-right:29px;
}
.default {
  background-color: #fdf4f4;
  color:#d4282d;
}
li img {
  position: absolute;
  width: 40px;
  height:30px;
  bottom:0px;
  right:0px;
  opacity:1;
}
.rece-ul .payer {
  width:130px;
  padding-left:30px;
}

/* 商品及物流消息 */
  .goodmes {
    width: 1200px;
    border:1px solid #eee;
    background-color: #fafafa;
    margin-top:25px;
    margin-bottom: 40px;
  }
  td>img {
    float:left;
    width:90px;
    height:90px;
  }
  .tdimg {
    float:left;
    width:220px;
    margin-left:20px;
  }
  .tdimg p {
    height: 40px;
    line-height:20px;
  }
  .tdimg p:nth-child(2){
    color:#999;
  }
  tr {
    color:#333;
  }
  tr:first-child {
    height: 40px;
    border-bottom:1px solid #eee;
  }
  th {
    font-size:14px;
  }
  th:first-child {
    width:400px;
  }
  td {
    font-size: 12px;
    padding-top:15px;
    padding-left:20px;
    padding-bottom:15px;
  }
  td:not(:first-child){
    text-align: center;
  }
  .inter { 
    border:1px solid #d4282d;
    width:70px;
    height: 25px;
    line-height:25px;
    margin:0 auto;
    border-radius:5px;
    color:#d4282d; 
  }
  td p:nth-child(2) {
    margin-top:10px;
    color:#999;
  }
  .price {
    color:#d4282d;
    font-size:18px;            
  }
/* 发票信息 */
  .bill {
  height: 44px;
  line-height: 40px;
  margin:40px auto;
  }
  .bill span {
    display:inline-block;
    width:200px;
    text-align: center;
    color:#999;
  }
  span>b {
    color:#888;
  }
/* 使用优惠券 */
  .Coupon {
    margin-bottom: 40px;
  }
/* 发票 */
.all {
   background:#fafafa;
   font-size:14px;
   text-align: right;
   padding-top:30px;
   padding-bottom:30px;
}
.all p {
  height: 35px;
  line-height:35px;
  padding-right:30px;
}
.price-all {
  font-size:24px;
  color:#d4282d;
}
.smallfont {
  font-size:12px;
}
.all p span:first-child {
  color:#999;
}
.rlt span {
  display:inline-block;
  width:140px;
  vertical-align: middle;
}
.all b {
  color:#d4282d;
  display:inline-block;
  margin:auto 5px;
}
/* 提交 */
.submit {
  width: 142px;
  height:45px;
  color:#fff;
  background-color: #d4282d;
  border-radius: 4px;
  margin-left:85%;
  margin-top: 30px;
  margin-bottom:90px;
}

</style>
<script>
export default {
  
}
</script>

