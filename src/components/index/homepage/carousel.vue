<template>
    <div id="app">
        <div class="block">
        <el-carousel height="640px">
        <el-carousel-item v-for="(item,index) in items" :key="index">
            <img :src="item.src">
             <a href="#" class="carouselClick">详情点击</a>
        </el-carousel-item>
        </el-carousel>
       
    </div>
    </div>
</template>
<style scoped>
  /* 轮播 start*/
        .el-carousel__item img {
            width: 100%;
            height: 640px;
        }

        .el-carousel__item:nth-child(2n) {
            background-color: #99a9bf;
        }
        
        .el-carousel__item:nth-child(2n+1) {
            background-color: #d3dce6;
        }
        .block {
            position: relative;
        }
        .carouselClick {
            display:block;
            width: 183px;
            height: 55px;
            line-height:60px;
            background-color: #000;
            color:#fff;
            font-size:18px;
            text-align: center;
            position: absolute;
            right:450px;
            bottom:350px;
            z-index:10000;
        }
    /* 轮播 end*/
</style>

<script>
    export default {
        name: "carousel",
        components: {},
        data(){
            return{
               items:[
                    {src:'/static/index/lunbo1.jpg'},
                    {src:'/static/index/lunbo1.jpg'},
                    {src:'/static/index/lunbo1.jpg'},
                ]
            }
        }
    }
</script>