<template>
  <div id="app">
    <!-- 商品分类导航 start -->
    <div class="navlist">
        <div class="list-box center">
                <el-menu
                :default-active="activeIndex2"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#d4282d"
                text-color="#fff"
                active-text-color="#fff">
               <el-submenu index="1" class="nav">
                    <template slot="title" class="nav1">
                        <!-- <img src="../../assets/images/navlist/nav1.png" alt=""> -->
                        所有分类</template>
                    <el-menu-item index="1-1">健康生活</el-menu-item>
                    <el-menu-item index="1-2">营养保健</el-menu-item>
                    <el-menu-item index="1-3">美妆护肤</el-menu-item>
                    <el-menu-item index="1-4">生活护理</el-menu-item>
                    <el-menu-item index="1-5">其他</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
            </el-menu>
        </div>
    </div>
  </div>
</template>

<script>
 export default {
        name: "navlist",
        components: {},
        data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
    }
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/* 商品系列导航 start */
.navlist {
    width: 100%;
    height: 60px;
    background-color: #d4282d;
}
.list-box {
    width: 1200px;
    height: 60px;
    margin:0 auto;
}
/* .nav img   {
    width:0.2rem;
    height:0.2rem;
} */

/* 商品系列导航 end */
</style>
