//es6 自动采用严格模式
'use strict';
import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index/index";
import detail from "../views/detail/Detail"
import DetailH from "../views/detail/DetailH";
import list from "../views/list/list";
import store from "../store";
//router 是个插件 use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: index,
    meta:{
      title:'首页'
    }
  },
  {
    path: '/province',
    name: 'province',
    component: ()=>import('@/views/province/province'),
    meta:{
      title:'城市选择'
    }
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: ()=>import('@/views/calendar/Calendar')
  },
  {
    path: '/DetailH',
    name: 'DetailH',
    component:DetailH,
    meta:{
      title:'民宿详情',auth:true
    }
  },
  {
    path: '/list',
    name: 'List',
    component: list,
    meta:{
      title:'民宿列表'
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //路由的懒加载 组件的懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
  path:'/home',
    name:'Home',
    component: ()=>import('../views/Home')
  },
  { path:'/detail',
    name:'Detail',
    component:detail,
    meta:{
      title:'景点详情',auth:true
    }
  },
  { path:'/reg',
    name:'Reg',
    component:()=>import('../views/login/Reg'),
    meta:{
      title:'注册'
    }
  },
  { path:'/login',
    name:'Login',
    component:()=>import('../views/login/Login'),
    meta:{
      title:'登录'
    }
  },
  {
    path: '/center',
    name:"Center",
    component:()=>import('../views/center/Center'),
    meta: {
      title: '个人中心',
      auth: true
    }
  }

]

const router = new VueRouter({
  routes
})
//1.全局的前置守卫 本页的
//2.路由独享的守卫 写在路由路径那块
//3.组件内守卫路由  组件内直接定义以下路由导航守卫：beforeRouteEnter (to, from, next)
router.beforeEach((to, from, next) => {
  //这里的this 不会指向vue的实例 严格模式下 this 指向未定义
  from;
  let{title,auth} = to.meta;
  document.title = title || '一家民宿';
  if (auth){
    let token = store.state.token;
    if(token){
      next();
    }else{
      next({name:'Login',query:{redirect:to.name}});
    }
  }else{
    next();
  }

})
export default router
