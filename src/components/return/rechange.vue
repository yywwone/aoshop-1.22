<template>
  <div class="rec-box">
      <div class="rechange">
        <navlogo></navlogo>
        <p class="bread">当前位置：<span>我的账户</span>﹥<span>退换/售后</span>﹥<span>申请售后</span></p>
        <div class="mainbox">
            <p class="message">商品信息</p>
            <div class="goodmes">
                <table>
                    <tr>
                        <th>商品信息</th>
                        <th>交易状态</th> 
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
                        <p class="inter">已发货</p>
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
            <div class="return">
                <p class="message">选择售后服务</p>
                <div class="rebox">
                    <p><img src="../../assets/images/rec.png" alt="">退款/退货</p>
                    <p>未收货，需要退还钱款/已收货，需要退回货物</p>
                </div>
            </div>
        </div>
      </div>
      <footlist></footlist>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.rechange {
    width: 1200px;
    margin:0 auto;
}
.bread {
    height: 30px;
    line-height: 30px;
    margin-bottom:20px;
}
/* mainbox */
.mainbox {
    padding:20px;
    background-color: #fafafa;
    margin-bottom:60px;
}
/* 商品及物流消息 */
  .goodmes {
    border:1px solid #eee;
    background-color: #fff;
    margin-top:25px;
    margin-bottom: 40px;
  }
  td>img {
    float:left;
    width:90px;
    height:90px;
    margin-left:20px;
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
    color:#999;
  }
  th:first-child {
    width:400px;
  }
  td {
    font-size: 12px;
    padding-top:15px;
    /* padding-left:20px; */
    padding-bottom:15 px;
  }
  td:not(:first-child){
    text-align: center;
  }
  .inter { 
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
  .message {
      font-size:16px;
  }
  /* 选择售后服务 */
  .return {
      height: 265px;
      padding-top:30px;
      padding-bottom:30px;
  }
  .rebox {
      width:400px;
      height: 160px;
      background-color: #fff;
      margin-top:20px;
      padding-top:40px;
      text-align: center;
  }
  .rebox p:first-child{
     font-size:24px;
     height: 50px;
     width:170px;
     margin:0 auto;
     text-align: center;
     line-height: 50px;

  }
   .rebox p>img {
       width: 37px;
       height:37px;
       vertical-align: middle;
       margin-right:10px;
   }
   .rebox p:nth-child(2) {
       height: 35px;
       line-height: 35px;
   }
</style>


