import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../views/AdminLogin.vue'
import UserSignUp from "@/views/UserSignUp";
import UserView from "@/views/UserView";
import UserLogin from "@/views/UserLogin";
import MyTest from "@/views/MyTest";
import ShowCami from "@/views/ShowCami";


Vue.use(VueRouter)

const routes = [
  {
    path: '/goods',
    name: 'goods',
    component: UserView
  },
  {
    path: '/order/list',
    name: 'orders',
    component: UserView,

  },
  {
    path: '/good/:id',
    name: 'good',
    component: UserView,
  },
  {
    path: '/order/info/:outTradeNo',
    name: 'order',
    component: UserView,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/signup',
    name: 'UserSignUp',
    component: UserSignUp
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin
  },
  {
    path: '/test',
    name: 'test',
    component: MyTest
  },
  {
    path: '/items/:outTradeNo',
    name: 'showCami',
    component: ShowCami
  },
  {
    path: '/backend/dashboard',
    name: 'dashboard',
    component: UserView
  },
  {
    path: '/backend/user',
    name: 'userManager',
    component: UserView
  },
  {
    path: '/backend/goods',
    name: 'goodsManager',
    component: UserView
  },
  {
    path: '/backend/cami',
    name: 'camiManager',
    component: UserView
  },
  {
    path: '/backend/order/all',
    name: 'orderManager',
    component: UserView
  },
  {
    path: '/backend/buy',
    name: 'payManager',
    component: UserView
  },
  {
    path: '/backend/category',
    name: 'categoryManager',
    component: UserView
  },
  {
    path: '/backend/notice',
    name: 'noticeManager',
    component: UserView
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  const token = localStorage.getItem('token')
  if (to.path === '/'){
    next('/goods')
  }
  if (!token && to.path === '/dashboard'){
    next('/admin')
  }else {
    next()
  }
})

export default router
