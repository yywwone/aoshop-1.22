<template>
  <div class="foodbox">
      <!-- 顶部导航 -->
    <navheader></navheader>
    <!-- 商品系列导航 -->
    <navlist></navlist>
    <!-- 轮播 -->
    <carousel></carousel>

    <!-- 分类 -->
    <div class="listbox">
        <breadlist></breadlist>
        <sortchoise></sortchoise>
        <healfood></healfood>
        <div class="paging">
            <div class="pagemain">
                <div class="block">
                    <el-pagination
                        layout="prev, pager, next"
                        :total="1000">
                    </el-pagination>
                </div>
                <div class="block-right">
                    跳转至<input type="tel">页<button>跳转</button>
                </div>
            </div>
        </div>
    </div>

     <!-- 底部介绍 -->
    <footlist></footlist>
  </div>
</template>
<style scoped>
.listbox {
    width:100%;
    background-color: #f5f4f3;
    padding-top:50px;
}
.sortorder {
    width: 1200px;
    height:50px;
    margin:0 auto;
    background-color: #fff;
    margin-top:40px;
}
.sortorder span {
    display:inline-block;
    width:100px;
    height: 50px;
    line-height:50px;
    font-size:18px;
    text-align: center;
}
.sortorder input {
    border: 1px solid #ccc;
    width: 60px;
    height:30px;
    color:#999;
    font-size:18px;
    margin:auto 5px;
    margin-bottom:7px;
}
/* 分页 */
.paging {
    width: 100%;
    height:135px;
    padding-top:45px;
}
.pagemain {
    width: 1200px;
    margin:0 auto;
    text-align: center;
    padding-top:5px;
    overflow:hidden;
    height:40px;    
}
.block-right input {
    width: 40px;
    height:20px;
    margin: auto 10px;
    border:1px solid #ccc;
    background-color:#f5f4f3;
}
.block-right {
    float:right;
    margin-top: -35px;
    font-size:16px;
    color:#999;
}
.block-right button {
    font-size:16px;
    color:#999;
    border:1px solid #ccc;
    width:45px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    margin-left:20px;
    outline:none;
}
</style>
<script>
import navheader from '../nav/navheader'
import navlist from '../nav/navlist'
import carousel from '../index/homepage/carousel'
import footlist from '../nav/footlist'

// 分类
import breadlist from './sortlist/breadlist'
import sortchoise from './sortlist/sortchoise'

import healfood from '../index/homepage/healfood'
export default {
 name:'food',
 components: {
        navheader,
        navlist,
        carousel,
        footlist,
        // 分类
        breadlist,
        sortchoise,
        healfood
    },
}
</script>
