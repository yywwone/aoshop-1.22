<template>
  <div class="box">
   <!-- 顶部导航 -->
    <navheader></navheader>
    <!-- 商品系列导航 -->
    <navlist></navlist>
    <div class="des-main">
      <p class="bread"><span>健康食品</span><b>></b><span>婴幼儿食品</span><b>></b><span>a2 白金婴儿配方幼儿奶粉...</span></p>
      <div class="lunbo">
        <div class="lun-l">
          <div class="lun-l-top">
            <img src="../../assets/images/g1.jpg" alt="">
          </div>
          <div class="lun-l-bottom"></div>
        </div>
        <div class="lun-r">
          <p class="l-tit">a2 白金婴儿配方幼儿奶粉三段 900克/罐 4罐 1-3岁</p>
          <div class="lun-price">
            <p><span>售价</span><b class="lun-native">$170</b><em>/</em><span class="lun-vip">我的会员价:</span><b class="lun-native">$160</b></p>
            <p><span>汇率</span><span class="huilu">5.0704</span></p>
          </div>
          <div class="lun_mes">
            <p><span id="ways">物流方式</span><span class="huoji samew">国际物流</span><span class="samew shang">上门自提</span></p>
            <p><span>重量</span><span>4.52kg</span></p>
            <p><span>数量</span><span><el-input-number size="small" v-model="num6"></el-input-number></span></p>
            <p><span>说明</span><span>不支持使用优惠券</span></p>
          </div>
          <p><button class="nowpay">立即购买</button><button class="addcar">加入购物车</button><span class="xing">☆</span><span class="star">收藏</span></p>
        </div>
      </div>
      <!-- 详情 评价 参数介绍 -->
      <div class="detail-main">
        <!-- 侧边栏 -->
        <div class="silder">
          <p class="other-title">其他推荐</p>
          <div class="other-tui">
            <div class="other">
              <img src="../../assets/images/detail/other1.png" alt="">
              <div class="jieshao"><p class="hui">惠氏启赋(Wyeth illuma)婴儿配方奶粉</p></div>
              <p class="detail-price"><span>汇率5.704</span><span>$160</span></p>
            </div>
            <div class="other">
              <img src="../../assets/images/detail/other1.png" alt="">
              <div class="jieshao"><p class="hui">惠氏启赋(Wyeth illuma)婴儿配方奶粉</p></div>
              <p class="detail-price"><span>汇率5.704</span><span>$160</span></p>
            </div>
            <div class="other">
              <img src="../../assets/images/detail/other1.png" alt="">
              <div class="jieshao"><p class="hui">惠氏启赋(Wyeth illuma)婴儿配方奶粉</p></div>
              <p class="detail-price"><span>汇率5.704</span><span>$160</span></p>
            </div>
          </div>
        </div>
        <!-- 中心部分 -->
        <div class="detatil-center">
          <div class="defirst">
            <div class="title-bar">
              <span>商品详情</span>
              <span>包装及参数</span>
              <span>评论（5871）</span>
              <span>售后保障</span>
            </div>
            <!-- 基本信息 -->
            <div class="wordfont">
              <table>
                <tr>
                  <td>商品品牌：a2</td>
                  <td>品牌国：澳大利亚</td>
                  <td>适用阶段：三段</td>
                </tr>
                <tr>
                  <td>版本：澳版</td>
                  <td>奶粉种类 ：牛奶粉</td>
                  <td>净含量：4.52kg</td> 
                </tr>
                <tr>
                  <td>商品货号：无</td>
                  <td>产地：新西兰</td>
                  <td>存储方式：干燥通风处存放</td>
                </tr>
                <tr>
                  <td>包装：组合装</td>
                </tr>
              </table>
            </div>
            <!-- 图片详情 -->
            <div class="photo">
              <div class="img1">
                <img src="../../assets/images/detail/d1.png" alt="">
              </div>
              <div class="img2">
                <img src="../../assets/images/detail/d2.png" alt="">
              </div>
              <div class="img3">
                <img src="../../assets/images/detail/d3.png" alt="">
              </div>
              <div class="img4">
                <img src="../../assets/images/detail/d4.png" alt="">
              </div>
              <div class="img5">
                <img src="../../assets/images/detail/d3.png" alt="">
              </div>
            </div>
          </div>
          <!-- 评价 -->
          <div class="comm">
            <p class="shangP">商品评价</p>
            <div class="pingt">
              <table>
                <tr>
                  <td>
                    <p>好评率</p>
                    <p>98%</p>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
     <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>

<script>
 export default {
    name: 'description',
    components: {
        
    },
    data() {
     return {
        checked: true,
         num6: 1,
      };
    },
 
  }
</script>

<style scoped>
  .des-main {
    width:1200px;
    margin:0 auto;
  }
  /* 面包屑 */
    .bread {
      height: 57px;
      line-height: 57px;
      width:100%;
      font-size:16px;
    }
    .bread b {
      margin:0 10px;
    }
  /* 轮播图部分 */
    .lunbo {
      width: 100%;
      height:535px;
    }
    /* 左边 图片盒子 */
    .lun-l {
      width:440px;
      height: 535px;
      border:1px solid #ccc;
      float:left
    }
    .lun-l-top {
      width:100%;
      height:410px;
    }
    .lun-l-top img {
      width:100%;
      height:408px;
    }
    /* 右边盒子 */
    .lun-r {
      float:left;
      width:730px;
      margin-left:30px;
    }
    .l-tit {
      font-size:28px;
      padding-left: 15px;
    }
    .lun-price {
      background-color: #fafafa;
      margin-top:20px;
      padding-left: 15px;
    }
    .lun-price p {
      height:44px;
      line-height:44px;
      font-size:16px;
    }
    .lun-price span {
      display: inline-block;
    }
    .lun-r p span:first-child {
      letter-spacing: 32px;
      width:120px;
    }
    .lun-native {
      display: inline-block;
      color:#d4282d;
      font-size:28px;
    }
    .lun-price p em {
      font-size:28px;
      margin:0 10px;
    }
    .lun-vip {
      margin-right:10px;
      font-size:14px;
      vertical-align: middle;
    }
    .huilu {
      height: 20px;
      border:1px solid #d4282d;
      line-height: 12px;
      font-size:14px;
      padding:4px; 
    }
    .lun_mes {
      padding-left: 15px;
      font-size:16px;
      border-bottom:1px solid #eee;
      margin-bottom:20px;
      margin-top:20px;
    }
    .lun_mes #ways {
      display:inline-block;
      letter-spacing: 0px;
      width:120px;
    }
    .lun-r .lun_mes span:first-child {
      display:inline-block;
      width:120px;
    }
    .lun_mes p {
      height: 50px;
      line-height:50px;
    }
    .samew {
      border:1px solid #ccc;
      display:inline-block;
      width: 110px;
      height: 40px;
      line-height:40px;
      text-align: center;
    }
    .huoji {
      border:1px solid #d4282d;
      color:#d4282d;
      margin-right:20px;
    }
    .lun-r button {
      width: 200px;
      height:70px;
      font-size:28px;
      outline: none;
    }
    .nowpay {
      border:2px solid #d4282d;
      color:#d4282d;
      margin-right:20px;
    }
    .addcar {
      background: #d4282d;
      color:#fff;
    }
    .xing {
      font-size: 35px;
      color:#d4282d;
      height:70px;
      line-height:70px;
      display:inline-block;
      vertical-align: top;
      margin-left:25px;
      margin-right:10px;
    }
    .star {
      font-size:18px;
      height:70px;
      line-height:70px;
      display:inline-block;
      vertical-align: top;
    }

  /* 详情 评价 参数介绍 */
    .detail-main {
      position: relative;
      width:100%;
      border:1px solid red; 
      min-height:1100px;
       margin-top:45px;
    }
  /* 侧边栏 */
    .silder {
      position:absolute;
      top:0px;
      left:0px;
      width:200px;
      background-color: #fafafa;
      border:1px solid #ebebeb;
    }
  /* 其他推荐 */
    .other-title {
      font-size:24px;
      color:#333;
      border-bottom:1px solid #ebebeb;
      width:100%;
      height:60px;
      line-height: 60px;
      padding-left:15px;
    }
    .other-tui {
      padding:10px 10px 0 10px; 
      overflow: hidden;   
    }
    .other {
      width:180px;
      background-color: #fff;
      padding:15px 10px;
      margin-bottom:10px;
      overflow: hidden;
    }
    .other-img {
      width:160px;
      height:190px;
    }
    .jieshao {
      width:100%;
      height:50px;
      border-top:2px solid #ebebeb;
      padding-top:10px;
    }
    .hui {
      height:20px;
      line-height:20px;
      font-size:16px;
      color:#999;
    }
    .detail-price {
      font-size:14px;
      overflow: hidden;
      margin-top:13px;
    }
    .detail-price span {
      display:inline-block;
      padding:4px 6px;
    }
    .detail-price span:first-child {
      float:left;
      color:#d4282d;
    }
    .detail-price span:last-child {
      float:right;
      color:#fff;
      background-color: #d4282d;
      border-radius: 10px;
    }

  /* 右边部分 */
    .detatil-center {
      width:970px;
      margin-left:228px;
    }
    .defirst {
      width:100%;
      background-color: #fafafa;
      border:1px solid #ccc;
    }
    .title-bar {
      width:100%;
      height:60px;
      border-bottom:2px solid #d4282d;
    }
    .title-bar span {
      font-size: 24px;
      width:190px;
      height:60px;
      line-height:60px;
      display:inline-block;
      text-align: center;
      color:#333;
    }
    .title-bar span:first-child {
      color:#fff;
      background-color: #d4282d;
    }
    .wordfont {
      width:100%;
      border-bottom:1px solid #ccc;
      padding-top:10px;
      padding-bottom:10px;
    }
    .wordfont tr {
      margin-right:20px;
    } 
    .wordfont td {
      height: 35px;
      line-height:35px;
      font-size:16px;
      color:#666;
      padding-left:20px;
    }
/* 图片 详情 */
  .photo {
    width: 809px;
    margin:0 auto;
    padding-top:80px;
    padding-bottom:80px;
  }
  .img1 { 
    width: 809px;
    height:447px;
    margin-bottom:60px;
  }
  .img1 img {
    width: 809px;
    height:447px;   
  }
  .img2 {
    width:100%;
    height:586px;
    margin-bottom:47px; 
  }
  .img2 img {
    width: 809px;
    height:586px;
  }
  .img3 {
    width:100%;
    height:516px;
    margin-bottom:40px;
  }
  .img3 img {
    width: 809px;
    height:516px;
  }
  .img4 {
    width:100%;
    height:480px;
  }
  .img4 img {
    width: 809px;
    height:480px;
  }
  .img5 {
    width:100%;
    height:358px;
  }
  .img5 img {
    width: 809px;
    height:358px;
  }
/* 商品评价 */
  .comm {
    width: 100%;
    margin-top:40px;
  }
  .shangP {
    width:100%;
    height:57px;
    line-height:57px;
    font-size:24px;
    padding-left:43px;
    background-color: #fafafa;
    border:1px solid #ccc;
    color:#888;
  }
</style>


