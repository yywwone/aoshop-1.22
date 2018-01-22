<template>
  <div>
      <div class="sortorder">
            <span>综合</span>
            <span>销量</span>
            <span>新品</span>
            <span>价格</span>
            <input type="text" value="$">-<input type="text" value="$">
        </div>
  </div>
</template>
<style scoped>
.sortorder {
    width: 1200px;
    height:50px;
    margin:0 auto;
    background-color: #fff;
    margin-top:40px;
    margin-bottom:40px;
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
</style>
<script>
export default {
  
}
</script>


