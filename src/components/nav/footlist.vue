<template>
    <div class="app">
        <div class="footword">
            <ul>
                <li>新手上路</li>
                <li>购物流程</li>
                <li>常见问题</li>
                <li>验货与签收</li>
                <li>订购方式</li>

            </ul>
            <ul class="float_li">
                <li>配送与支付</li>
                <li>货到付款区域</li>
                <li>配送支付智能查询</li>
                <li>支付方式说明</li>
            </ul>
            <ul class="float_li">
                <li>会员中心</li>
                <li>售后流程</li>
                <li>资金管理</li>
                <li>我的收藏</li>
                <li>我的订单</li>
            </ul>
            <ul class="float_li">
                <li>服务保证</li>
                <li>退款说明</li>
                <li>售后服务保证</li>
                <li>产品质量保证</li>
            </ul>
            <ul class="float_li">
                <li>联系我们</li>
                <li>网站故障报告</li>
                <li>选机咨询</li>
                <li>投诉与建议</li>
            </ul>
        </div>
    </div>
</template>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .app {
        height: 168px;
        background-color: #d4282d;
        color: #fff;
    }

    .footword {
        width: 1200px;
        height: 168px;
        margin: 0 auto;
        font-size: 14px;
    }

    .footword ul {
        width: 112px;
        float:left;
        box-sizing: border-box;
        margin-top:35px;

    }
    .footword li {
        list-style: none;
        height: 20px;
        line-height:20px;
    }
    .float_li {
        margin-left: 158px;
    }
    .footword li:first-child {
        margin-bottom: 20px;
    }
</style>

<script>
    export default {
        name: "footlist",
        components: {},
        data() {
            return {

            }
        }
    }
</script>


