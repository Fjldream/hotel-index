import Vue from 'vue'
import VueRouter from 'vue-router'
import index from "../views/index/index";
import detail from "../views/detail/Detail"
import DetailH from "../views/detail/DetailH";
import list from "../views/list/list";
//router 是个插件 use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
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
      title:'民宿详情'
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
      title:'经典详情'
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
