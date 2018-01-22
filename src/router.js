import Index from './components/index/index'
import Login from './components/login/login'
//  忘记密码
import Forget from './components/login/forget'
import Footlist from './components/nav/footlist'
import Food from './components/sort/food'
// 发表评论
import Sendcom from './components/comment/sendcom'
//  物流消息
import Logistics from './components/logistics/logistics'
//  结算
import Pay from './components/pay/pay'
//  客服服务
import Customer from './components/service/customer'
// 退货换货
import Return from './components/return/return'
// 退换售后
import Rechange from './components/return/rechange'
//  支付
import Payment from './components/pay/payment'
// 账户支付
import Account from './components/pay/account'
// 购物车
import Car from './components/car/car'
// 我的消息
import Mynews from './components/my/mynews'
// 商品详情
import Description from './components/description/description'

// 设置路由
export default 
function(router){
router.addRoutes([
    {path:'/',redirect:{name:'index'}},
    // 首页
    {name:'index',path:'/index',component:Index},
    // 底部 文字介绍
    {name:'footlist',path:'/footlist',component:Footlist},
    // 登录 注册
    {name:'login',path:'/login',component:Login},
    //  忘记密码
    {name:'forget',path:'/forget',component:Forget},
    // 食品分类 婴儿食品
    {name:'food',path:'/food',component:Food},
    // 发表评论
    {name:'sendcom',path:'/sendcom',component:Sendcom},
    // 物流消息
    {name:'logistics',path:'/logistics',component:Logistics},
    // 结算
    {name:'pay',path:'/pay',component:Pay},
    // 客服服务
    {name:'customer',path:'/customer',component:Customer},
    // 退货换货
    {name:'return',path:'/return',component:Return},
    // 退换售后
    {name:'rechange',path:'/rechange',component:Rechange},
    //  支付
    {name:'payment',path:'/payment',component:Payment},
    // 账户支付
    {name:'account',path:'/account',component:Account},
    // 购物车
    {name:'car',path:'/car',component:Car},
    // 我的消息
    {name:'mynews',path:'/mynews',component:Mynews},
    // 商品详情
    {name:'description',path:'/description',component:Description},
])
}
