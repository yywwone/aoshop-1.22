<template>
  <div class="big-box">
       <!-- 顶部导航 -->
    <navheader></navheader>

    <!-- 我的消息 -->
    <div class="mybox">
      <div class="side">
        <p class="my-title">我的消息</p>
        <p><span>系统消息</span></p>
      </div>
      <div class="mycenter">
        <div class="center-title">系统通知</div>
        <div class="center-main">
          <div class="mymain">
            <p class="mywu">物流消息:</p>
            <p>您购买的物品有新的物流动态</p>
            <div class="myimg">
              <img src="../../assets/images/comment/nai.png" alt="">
              <div class="myimg-right">
                <p>运单号：473879724294</p>
                <a href="#">去看看</a>
                <a href="#">查看订单</a>
              </div>
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
  
}
</script>

<style scoped>
  .mybox {
    width: 1200px;
    margin:0 auto;
    margin-top:40px;
    position: relative;
  }
  /* 侧边栏 */
  .side {
    width:130px;
    background-color: #fafafa;
    position: absolute;
    top:0px;
    left:0px;
  }
  .side .my-title {
    height:50px;
    line-height: 50px;
    font-size:20px;
    border-bottom:2px solid #cbcbcb; 
  }
  .side p {
    width: 100%;
    height:75px;
    line-height: 75px;
    text-align: center;
    font-size:16px;
  }
  .side span {
    display:inline-block;
    border-left:1px solid #d4282d;
    width:100%;
    height:20px;
    line-height:20px;
    color:#d4282d;
  }

  /* 中心部分 */
  .mycenter {
    width:1000px;
    margin-left:200px;
    margin-bottom:480px;
  }
  .center-title {
    width:100%;
    font-size:18px;
    color:#fff;
    background-color: #d4282d;
    line-height: 50px;
    height:50px;
    text-align: center;
  }
  /* 主体 */
  .center-main {
    width: 100%;
  }
  .mymain {
    width: 300px;
    /* height:200px; */
    background-color: #fdf4f4;
    margin:30px;
    padding:20px 15px;
  }
  .mymain>p{
    font-size:14px;
    height: 30px;
    line-height:30px;
  }
   .mymain .mywu{
    font-size:18px;
  }
  .myimg {
    overflow: hidden;
    margin-top:15px;
  }
  .myimg img {
    width:90px;
    height:90px;
    float:left
  }
  .myimg-right {
    float:left;
    margin-left:15px;
  }
  .myimg-right p {
    height: 14px;
    margin-bottom:30px;
  }
  .myimg-right a {
    color:#4b9fd2;
    font-size:14px;
    display:block;
    height:25px;
    line-height:25px;
  }
</style>

