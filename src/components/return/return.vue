<template>
    <div class="re">
        <div class="return-box combox">
            <!-- 导航 -->
            <!-- <div class="navlogo">
                <div class="logo-box center">
                    <div class="logo-left">
                        <p>欢迎来到澳新</p>  
                    </div>
                    <div class="logo-right">
                    <p>
                        <span>尼康古斯1745</span>
                        <span>退出</span>
                        <span class="myorder">我的账户</span>
                        
                        </p> 
                    </div>
                </div>
            </div> -->
            <navlogo></navlogo>
            <!-- 面包屑 -->
            <p class="bread">当前位置：<span>我的账户</span> ﹥<span> 退换/售后</span>﹥<span>申请售后</span></p>
            <!-- 退货换货 -->
            <div class="return">
                <p class="re-title">当前申请：<span>退款/退货</span></p>
                <div class="re-detail">
                    <p><span class="re-goods">退货商品：</span><img class="detail-img" src="../../assets/images/comment/nai.png" alt=""><span>a2 白金婴儿配方幼儿奶粉三段 900克/罐 4罐 1-3岁</span></p>
                    <p>收货状态：<span class="need">*</span><input type="radio" name="send">已收到货<input type="radio" name="send">未收到货</p>
                    <p>退款原因：<span class="need">*</span>
                        <select name="" id="">
                        <option value="">请选择退款原因</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">3</option>
                        </select>
                    </p>
                    <p>退款金额：<span class="need">*</span><input type="text" placeholder="请输入退款金额"></p>
                    <p><span class="re-tex">退款说明：</span><textarea name="" id="" cols="30" rows="10" placeholder="请输入退款说明"></textarea></p>
                    <!-- <p>上传图片：<input type="file" multiple></p> -->
                    <!--  上传图片组件 -->
                    <p class="upphoto"><span>上传图片：</span><span class="upload"><upload></upload></span></p>
                    <input type="submit" value="提交申请">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.combox {
        width: 1200px;
        margin:0 auto;
    }


/* 面包屑 */
.bread {
    height: 35px;
    line-height:35px;
    font-size:16px;
    margin-top:30px;
    margin-bottom:20px;
}
.return {
    background:#fafafa;
    padding-left:30px;
    padding-right:30px;
    border:1px solid #fff;
}
.re-title {
    height: 60px;
    line-height:60px;
    font-size:16px;
}
.re-title span {
    font-size:20px;
    color:#d4282d;
}
/* 退货 */
.re-detail {
    border:1px solid #eee;
    background:#fff;
    font-size:14px;
    color:#555;
    padding-left:88px;
    padding-top:30px;
    margin-bottom:60px;
    padding-bottom:40px;
}

.detail-img {
    width: 100px;
    height:80px;
}
.re-detail span {
    display:inline-block;
    height: 37px;
    line-height:37px;
}
.re-goods {
    margin-top:20px;
}
.need {
    color:#d4282d;
    padding:0 10px;
    font-size:20px;
    text-align: center;
}
.re-detail input[type="radio"] {
    display:inline-block;
    width:30px;
}
.re-detail select,.re-detail input[type="text"] {
    width: 160px;
    height:22px;
    line-height:22px;
    outline: none;
    color: #999;
    font-size:12px;
    border:1px solid #ccc;
}
.re-detail input[type="text"] {
    margin-left:3px;
    padding-left:5px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #999;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #999;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #999;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #999;
}
textarea {
    width:480px;
    height:90px;
    padding:5px;
    margin-left:25px;
    vertical-align: top;
    margin-top:15px;
    resize: none;
}
.re-tex {
    margin-top:15px;
} 
.upphoto {
    margin-top:40px;
}
.upphoto .upload {
    height:120px;
    vertical-align: top;
    margin-left:10px;
} 
input[type="submit"] {
    width: 180px;
    height:45px;
    color:#fff;
    background-color: #d4282d;
    font-size:20px;
    border-radius: 5px;
    margin-top:40px;
    margin-left:100px;
    display:inline-block;
}
</style>

