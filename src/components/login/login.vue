<template>
  <div id="app">
    <!-- 顶部导航 -->
    <navheader></navheader>
    <div class="login-box">
      <div class="login-main">
        <template> 
          <div class="login-tab">
            <nav class="tab">
              <a class="tabTitle" href="javascript:void(0);" @click="toggleTabs(singin);">账号登录</a>
            
              <a href="javascript:void(0);" @click="toggleTabs(register);">新用户注册</a>
            
              </nav>
            <singin :is="currentView" keep-alive></singin>
          </div>
        </template>
      </div>
    </div>
    <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>
<style>
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
  width: 500px;
  background-color: #fff;
}
.login-tab {
  padding:25px 70px 30px;
}
.tab {
  margin-bottom: 35px;
}
.tab a{
  color:#999;
  text-decoration: none;
  font-size: 24px;
  display:inline-block;
  width: 176px;
  height:35px;
  line-height: 35px;
  text-align: center;
}
.tabTitle {
  border-right: 1px solid #ccc;
}
</style>

<script>
import navheader from '../nav/navheader'
import footlist from '../nav/footlist'

//导入子组件
import singin from './singin/singin';
import register from './singin/register';

export default {
  name: 'login',
   data () {
             return {
                 singin: "singin", //导航栏文本1
                register: "register", //导航栏文本2
                currentView: 'singin', //默认选中first子组件
             };
         },
         components: { 
             navheader,
            footlist,
              singin,
            register,    
         },
         methods: {
             toggleTabs (tabText) {
                 this.currentView = tabText;
             }
         },
}
</script>
