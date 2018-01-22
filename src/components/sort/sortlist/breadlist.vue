<template>
  <div>
      <div class="mark">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
  </div>
</template>
<style scoped>
.mark {
    width: 1200px;
    margin:0 auto;
    border-left:3px solid red;
    padding-left: 15px;
    font-size:16px;
    color:#999;
}
.el-breadcrumb__item .el-breadcrumb__inner a {
    color:#999;
}
</style>
<script>
export default {
  
}
</script>
