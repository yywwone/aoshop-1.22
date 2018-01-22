<template>
    <div>
        <!-- 导航部分 -->
        <div class="navbox">
            <!-- 顶部导航 start -->
            <div class="navbar">
                <div class="navheader center">
                    <ul class="fl-l">
                        <li>注册</li>
                        <li>登录</li>
                        <li><img src="../../assets/images/flag_1.jpg" alt=""></li>
                        <li>
                            <select>
                                <option value="">中&nbsp;&nbsp;&nbsp;&nbsp;国</option>
                                <option value="">澳大利亚</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value="">人民币</option>
                                <option value="">澳币</option>
                            </select>
                        </li>
                        <li>
                            <select>
                                <option value="">English</option>
                                <option value="">Chinese</option>
                            </select>
                        </li>
                    </ul>
                    <ul class="fl-r">
                        <li>我的账户</li>
                        <li>会员中心</li>
                        <li>结账</li>
                        <li>客户服务</li>
                    </ul>
                </div>
            </div>
            <!-- logo导航 start -->
            <div class="navlogo">
                <div class="logo-box center">
                    <div class="logo-left">
                        <p>欢迎来到澳新</p>  
                    </div>
                    <div class="logo-right">
                        <input type="text" placeholder="鱼腥草">
                        <img src="../../assets/images/search.jpg" alt="搜索">
                        <img src="../../assets/images/shopCar.jpg" alt="购物车">
                    </div>
                </div>
            </div>
            
        </div>
        <!-- 导航结束 -->
    </div>
</template>
<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    /* 版心 */
    .center {
        width: 1200px;
        margin: 0 auto;
    }
    /* 导航box */
    .navbox {
        width: 100%;
        height: 135px;
    }
    /* 顶部导航 start */
    .navbar{
        width: 100%;
        height: 22px;
        background-color: rgb(212, 40, 45);
        color:#fff;
    }
    .navheader {
        height: 20px;
        font-size: 12px;
    }
    .fl-l li{
        float:left;
        margin-right: 13px;
    }
    .fl-r li{
        float:right;
        margin-left: 13px;

    }
    ul>li {
        list-style: none;
        height: 20px;
        line-height: 20px;
    }
    li>select {
        border: none;
        background-color: rgb(212, 40, 45);
        color:#fff;
        outline: none;
    }
    /* 顶部导航  end */

    /* logo 导航start */
    .navlogo {
        width: 100%;
        height: 120px;
        background: #fff;
    }
    .logo-box {
        height: 120px;
    }
    .logo-left {
        width: 225px;
        height: 120px;
        line-height: 120px;
        background: url('../../assets/images/navlogo_1.jpg') no-repeat;
        padding-left:105px; 
        float:left;
    }
    .logo-left p {
        font-size: 14px;
    }
    .logo-right {
        float:right;
        width: 550px;
        height: 120px;
        padding-top: 40px;
    }
    .logo-right input[type="text"] {
        width: 450px;
        height: 35px;
        border: none;
        border-bottom: 2px solid #d4282d;
        outline:none;
    }
    .logo-right img {
        margin-left: 15px;
    }
    .navlogo {
        overflow: hidden
    }
    /* logo导航 end */

</style>

<script>
    export default {
        name: "navheader",
        components: {},
        data(){
            return{
               items:[
                   {

                   }
               ] 
            }
        }
    }
</script>

