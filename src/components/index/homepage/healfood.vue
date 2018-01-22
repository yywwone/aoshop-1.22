<template>
  <div class="gooddetail">
      <!-- 图片盒子 -->
    <div class="healimg-box">
        <!-- 系列 -->
        <ul class="healimg">
            <li>
                <a href="http://www.baidu.com">
                <img src="../../../assets/images/index/healthy.jpg" alt="">
                <p>Swisse 美肌幼白亮白脸50粒</p>
                <span class="huiyu">汇率5.0704</span>
                <span class="money">$1245</span>
                </a>
            </li>
            <li class="healColor">
                <a href="http://www.baidu.com">
                <img src="../../../assets/images/index/healthy.jpg" alt="">
                <p>Swisse 美肌幼白亮白脸50粒</p>
                <span class="huiyu">汇率5.0704</span>
                <span class="money">$1245</span>
                </a>
            </li>
            <li class="healColor">
                <a href="http://www.baidu.com">
                <img src="../../../assets/images/index/healthy.jpg" alt="">
                <p>Swisse 美肌幼白亮白脸50粒</p>
                <span class="huiyu">汇率5.0704</span>
                <span class="money">$1245</span>
                </a>
            </li>
            <li class="healColor">
                <a href="http://www.baidu.com">
                <img src="../../../assets/images/index/healthy.jpg" alt="">
                <p>Swisse 美肌幼白亮白脸50粒</p>
                <span class="huiyu">汇率5.0704</span>
                <span class="money">$1245</span>
                </a>
            </li>
        </ul>
    </div>
  </div>
</template>
<style scoped>
.gooddetail {
    width: 1200px;
    margin:0 auto;
    height:100%;
}
.healimg-box {
    overflow: hidden;
}
.healthy {
    margin-top:50px;
}
        
.healimg {
    float: left;
}
 .healimg li{
    width: 290px;
    height: 505px;
    box-sizing: border-box;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    margin-bottom: 12px;
}
.healColor {
margin-left: 12px;
}
    .healimg li img {
    width: 98%;
    height: 360px;
}
.healimg li a>p {
    border-top: 1px solid #adadad;
    font-size: 18px;
    color:#333;
    height: 60px;
    padding-top: 32px;
    /* border: 1px solid red; */
}
.healimg li a {
    display: inline-block;
    text-decoration: none;
}
.healimg li a>span {
    font-size: 18px;
    height: 27px;
    line-height: 27px;
    display: inline-block;
    box-sizing: border-box;
    margin-top:20px;
}
.healimg a .huiyu {
    float:left;
    color: #d4282d;
}
.healimg a .money {
    float: right;
    background-color: #d4282d;
    color:#fff;
    padding-left: 12px;
    padding-right: 12px;
    border-radius: 20px;
}
</style>
<script>
export default {
  
}
</script>


