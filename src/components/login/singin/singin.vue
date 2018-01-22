<template>
  <div>
      <form action="">
          <p>手机号</p>
          <input type="tel" class="same samelength">
          <p>密码</p>
          <input type="password" class="same samelength">
          <p>验证码</p>
          <input type="num" class="same changelength"><span class="yanzheng">获取验证码</span></br>
          <input type="checkbox"><span class="check">自动登录</span>
          <input type="checkbox"><span class="check">记住密码</span><a href="javascript:;" class="forget">忘记密码？</a></br>
          <input type="submit" class="same samelength submit" @click="send" value="登录">
      </form>
  </div>
</template>
<style>
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
.check {
    font-size:12px;
    color:#999;
    vertical-align: top;
    margin-left:5px;
    margin-right:5px;
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
}
</style>
<script>
export default {
    data () {
             return {
                
             };
         },
  methods:{
    send:function(){
        console.log(11);
    }
  },
}
</script>


