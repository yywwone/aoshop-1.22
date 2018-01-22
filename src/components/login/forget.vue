<template>
  <div id="app">
    <!-- 顶部导航 -->
    <navheader></navheader>
    <div class="login-box">
      <div class="login-main">
          <form action="">
        <p class="findpass">找回密码<span>请填写您的注册手机找回密码</span></p>
          <p>手机号码</p>
          <input type="tel" class="same samelength">
          <p>验证码</p>
          <input type="num" class="same changelength"><span class="yanzheng">获取验证码</span></br>
        <p>输入新密码</p>
          <input type="password" class="same samelength"></br>

          <input type="submit" class="same submit" value="登录">
        <a href="#" class="emailFind">邮箱找回</a>
        </form>
           
      </div>
    </div>
    <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>
<style scoped>
.login-box {
  width: 100%;
  background-image: url("../../assets/images/signin/signinbg.png");
  background-repeat: no-repeat;
  background-position: top;
  border-top: 4px solid #d4282d;
  padding-top: 80px;
  padding-bottom: 80px;
  padding-left: 50%;
}
.login-main {
    width:500px;
  background-color: #fff;
  padding: 25px 70px 30px;
}
.findpass {
    color:#d4282d;
    font-size:24px;
    border-left:4px solid #d4282d;
    padding-left:10px;
    margin-bottom:35px;
}
.findpass span {
    color:#999;
    font-size:12px;
    display: inline-block;
    margin-left:10px;
}
form>p {
    font-size:14px;
    color: #999;
    height: 30px;
    line-height:30px;
}
input { 
    margin-bottom:10px;
    border:1px solid #ccc;
}
.same {
    height:40px;
}
.samelength {
    width: 100%;
}
.changelength {
    width: 66%;
}
.yanzheng {
    display:inline-block;
    background-color: #d4282d;
    height: 40px;
    line-height:40px;
    color:#fff;
    font-size:14px;
    width:100px;
    text-align: center;
    vertical-align: top;
    margin-left:20px;
}

.forget {
    color:#73b5ce;
    font-size:12px;
    vertical-align: top;
    float:right;
}
.submit {
    background-color: #d4282d;
    color:#fff;
    font-size:20px;
    letter-spacing: 17px;
    text-align: center;
    line-height:40px;
    width:120px;
    height:42px;
    outline: none;
    border-radius:5px;
    padding-left:17px;
}
.emailFind {
    width: 120px;
    height:42px;
    line-height:42px;
    display:inline-block;
    border:1px solid #d4282d;
    font-size:20px;
    text-align: center;
     border-radius:5px;
     margin-left:20px;
}
</style>

<script>
import navheader from '../nav/navheader'
import footlist from '../nav/footlist'


export default {
  name: 'forget',
   data () {
             return {
                
             };
         },
         components: { 
             navheader,
            footlist,
                
         },
         methods: {
             
         },
}
</script>
