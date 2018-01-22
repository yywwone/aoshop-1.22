<template>
  <div class="logo-box">
      <!-- 导航 -->
        <div class="navlogo">
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
        </div>
  </div>
</template>

<script>
export default {
  name:"navlogo",
  components: {},
}
</script>

<style scoped>
/* 导航 */
    .re {
        width:100%;
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
    }

</style>


