<template>
  <div>
       <!-- 顶部导航 -->
      <navheader></navheader>
      <div class= "logistics-box">
        <div class= "logmain">
              <p class="wu-title">物流信息</p>
              <p class="Parcels">包裹状态：已发货</p>
            <div class="basicnew">
              <p>
                <span>运单号码：473879724294</span>
                <span>物流方式：国际物流</span>
                <span>客服电话：999999</span>
              </p>
              <p>发货地址：Unit 11 No 1 Abbot Gr , Abbotsford Victoria AU</p>
              <p>收货地址：<span>浙江省杭州市余杭区良睦路356号</span><span>王奇</span><span>182****7160</span></p>
            </div>
            <div class="wu-detail">
              <div class="detail-main">
                <p>物流详情</p>
                <ul>
                  <li><span>2017.12.22</span><span>周五</span><span>13:42</span>
                  <span>Shipment information received</span>
                  </li>
                  <li><span>2017.12.22</span><span>周五</span><span>18:52</span><span>Picked up by driver</span></li>
                  <li><span>2017.12.25</span><span>周一</span><span>18:52</span><span>Package arrived at warehouse</span></li>
                  <li><span>2017.12.28</span><span>周四</span><span>18:52</span><span>包裹已提交海关</span></li>
                  <li><span>2017.12.30</span><span>周六</span><span>18:52</span><span>正在海关</span></li>
                  <li><span>2017.12.31</span><span>周日</span><span>18:52</span><span>重庆市场四部 胡斌 已收件</span></li>
                  <li><span>2017.12.31</span><span>周日</span><span>18:52</span><span>快递已从重庆市发出</span></li>
                  <li><span>2018.1.2</span><span>周二</span><span>18:52</span><span>快递已达到杭州市</span></li>
                </ul>
              </div>
            </div>
        </div> 
      </div>
       <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>
<style scoped>
.logistics-box {
  width: 100%;
  margin-top:40px;
  margin-bottom: 60px;
}
.logmain {
  width: 1200px;
  margin:0 auto;
  color:#333;
}
.wu-title {
  font-size:18px;
}
.Parcels {
  height:50px;
  line-height:50px;
  padding-left:30px; 
  font-size: 16px;
  background-color: #fafafa;
  margin-top:20px;
}
.basicnew {
  margin: 15px auto;
}
.basicnew p {
  font-size:14px;
  height: 30px;
  line-height: 30px;
  padding-left:30px;
}
.basicnew span {
  display:inline-block;
  margin-right:30px;
}
.wu-detail {
  background-color: #fafafa;
  padding-top:55px;
  padding-bottom: 55px; 
}
.detail-main {
  background-color: #fff;
  box-shadow: 1px 1px 15px #ccc;
  padding-left:26px;
  padding-bottom: 40px;
  width:800px;
  margin:0 auto;
}
.detail-main ul {
  padding-left:20px;
  border-left:1px solid #ccc;
  margin-left:28px;
}
.detail-main p {
  font-size:16px;
  height:55px;
  line-height:55px;
  border-bottom:1px solid #ccc;
  color:#666;
}
.detail-main li {
  height: 35px;
  line-height:35px;
  color:#808080;
}
.detail-main li span {
  display:inline-block;
  margin-right:25px;
}
.detail-main li span:nth-child(1) {
  width:80px;
}
.detail-main li span:nth-child(2) {
  width:34px;
}
.detail-main li span:nth-child(3) {
  width:40px;
}
</style>
<script>


export default {
  name: 'logistics',
   data () {
             return {
                
             };
         },
         components: { 
            
                
         },
         methods: {
             
         },
}
</script>

