<template>
  <div class="kefu">
     <div class="service">
         <div class="ser-main">
             <div class="ser-header">澳新客服</div>
             <div class="ser-what">
                 <p>您有什么需要咨询的呢？</p>
                 <ul>
                     <li>订单什么时候发货</li>
                     <li>物流停滞不更新</li>
                     <li>购买物品少件</li>
                     <li>返修退换货咨询</li>
                     <li>退货后验货退款要多久</li>
                     <li>意见与建议反馈</li>
                 </ul>
             </div>
             <div class="send">
               <div class="top">
                   <img src="../../assets/images/smail.png" alt="">
                   <img src="../../assets/images/photo.png" alt="">
               </div>
               <textarea name="" id="">请输入您的问题...</textarea>
               <button>发送</button>
             </div>
         </div>
     </div>
      
  </div>
</template>
<style scoped>
.kefu {
    width:100%;
} 
.service {
    width: 100%;
    background-color: #ebebeb;
    padding-top:1px;
    padding-bottom:100px;
}
.ser-main {
    width: 1000px;
    background-color: #fff;
    margin:100px auto;
    box-shadow: 2px 2px 12px #ccc;
}
.ser-header {
    color:#fff;
    font-size: 24px;   
    background-color: #d4282d;
    height: 60px;
    line-height: 60px;
    padding-left:70px;
    background-image: url('../../assets/images/ear.png');
    background-repeat: no-repeat;
    background-position:15px 15px;
    box-shadow: 0px 3px 2px #f7d7d7;
}
.ser-what {
    margin-top:30px;
    margin-left:30px;
    width: 245px;
    background: #fdf4f4;
    padding:20px;
    border-radius: 10px;
}
.ser-what p {
    height: 45px;
    line-height:45px;
    border-bottom:1px solid #808080;
    font-size:16px;
}
.ser-what li {
    list-style: url('../../assets/images/dio.png');
    margin-left:20px;
    height: 30px;
    line-height:30px;
    color:#70add6 ;
    font-size:14px;
}
.send {
    width:100%;
    border-top:2px solid #e6e6e6;
    margin-top: 200px;
}
.top {
    height:50px;
    background:#fcfcfc;
}
.top img {
    width: 32px;
    height: 32px;
    display:inline-block;
    margin-left:20px;
    margin-top:10px;
}
.send textarea {
    width:100%;
    height:150px;
    resize: none;
    outline: none;
    color:#999;
    padding:20px;
    font-size:16px;
    border:none;
}
.send button {
    width:120px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background:#d4282d;
    color:#fff;
    border-radius: 5px;
    font-size:24px;
    margin-left:86%;
    margin-bottom:20px;
    outline:none;
}
</style> 
<script>
export default {
  
}
</script>


