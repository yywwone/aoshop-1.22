<template>
<div class="bigbox">
    <div class="combox">
        <div class="navlogo">
            <div class="logo-box center">
                <div class="logo-left">
                    <p>欢迎来到澳新</p>  
                </div>
                <div class="logo-right">
                   <p>
                       <span>尼康古斯1745</span>
                       <span>退出</span>
                       <span class="myorder">我的订单</span>
                       <span>支付帮助</span>
                    </p> 
                </div>
            </div>
        </div>
        <div class="com-main">
            <p class="com-title">发表评论</p>
            <div class="com-content">
                <div class="com-img">
                    <img src="../../assets/images/comment/nai.png" alt="">
                    <div class="com-font"><p>a2 白金婴儿配方幼儿奶粉三段 900克/罐 4罐 1-3岁</p></div>
                </div>
                <div class="xing">
                    <div class="block">
                        <el-rate
                        v-model="value2"
                        :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
                        </el-rate>
                    </div>
                    <textarea name="" id="" placeholder="请输入您的评论..."></textarea>
                    <div class="photo-up">
                        <div class="img-box"></div>
                        <div class="upfile">
                            <div class="file-box">
                                <img src="../../assets/images/comment/up.png" alt="图片上传">
                                <p>上传照片</p>
                                <p>(最多五张)</p>
                            </div>
                             <input type="file" multiple>
                        </div>
                    </div>
                    <input class="submit" type="submit" value="确认发表">
                </div>
            </div>
        </div>
    </div>
      <!-- 底部介绍 -->
    <footlist></footlist>
</div>
</template>

<style scoped> 
.bigbox {
    width: 100%;;
}
.combox {
    width: 1200px;
    margin:0 auto;
}
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
.logo-right p {
    float:right;
}
.logo-right span {
    display:inline-block;
    padding:0 10px;
}
.myorder {
    border-left:1px solid #ccc;
    border-right:1px solid #ccc;
}
.com-title {
    height: 52px;
    line-height:52px;
    color:#fff;
    background-color: #d4282d;
    font-size:20px;
    padding-left:22px;
}
.com-main {
    margin-top:45px;
    overflow:hidden;
}
.com-content {
    width: 750px;
    margin:0 auto;
    overflow: hidden;
    margin-top:50px;
}
.com-img {
    width: 165px;
    font-size: 14px;
    float:left;
}
.com-font {
    height:70px;
}
.com-font p{
    font-size:14px;
    height: 20px;
    line-height: 20px;
}
.com-img img {
    display:block;
    height:125px;
    margin-bottom: 20px;
}
.xing {
    float:left;
    margin-left:67px;
}
textarea {
    width: 480px;
    height:160px;
    resize:none;
    outline:none;
    padding:15px;
    border:1px solid #ccc;
    color:#ccc;
    margin-top:20px; 
}
textarea::-webkit-input-placeholder{
    color: #ccc;
}
.upfile {
    width:88px;
    height:88px;
    text-align: center;
    padding-top:20px;
    position: absolute;
}
.upfile img {
    width:35px;
    height:35px;
}
.upfile p {
    font-size:12px;
    height: 20px;
    line-height:20px;
    color:#ccc;
}
input[type='file'] {
    position:relative;
    width:100%;
    height:88px;
    opacity:0;
    bottom:88px;
}
.file-box {
    height:88px;
    border:1px solid #ccc;
    padding-top:10px;
}
.photo-up {
    overflow: hidden;
    height:120px;
}
.submit {
    width:140px;
    height: 40px;
    color:#fff;
    background-color: #d4282d;
    font-size:18px;
    margin-bottom: 120px;
    border-radius: 5px;
    text-align: center;
}
</style>

<script>
    export default {
    data() {
      return {
        value1: null,
        value2: null
      }
    }
  }
</script>

