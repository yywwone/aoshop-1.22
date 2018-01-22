// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//  引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
Vue.use(ElementUI)

// 引入 vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

//  引入 iview ui
import iView from 'iview';
import 'iview/dist/styles/iview.css';  
Vue.use(iView);

// 引入公共css样式
import Css from './assets/css/reset.css'
import Router from './router'

//  引入头部 尾部
import navheader from './components/nav/navheader'
import navlist from './components/nav/navlist'
import footlist from './components/nav/footlist'
import navlogo from './components/nav/navlogo.vue'

// 上传图片
import uploader from './components/upload/uploader'
Vue.component(navheader.name,navheader);
Vue.component(footlist.name,footlist);
Vue.component(navlogo.name,navlogo);
Vue.component(navlist.name,navlist);

Vue.component(uploader.name,uploader);
Vue.config.productionTip = false

//路由分配
import VueRouter from 'vue-router'
//注册路由
Vue.use(VueRouter)
//创建路由对象
 var router=new VueRouter()
 Router(router)

new Vue({
  el: '#app',
  render: h => h(App),
  router
  })