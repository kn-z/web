import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../views/AdminLogin.vue'
import AdminView from '../views/AdminView.vue'
import UserView from "@/views/UserView";
import UserLogin from "@/views/UserLogin";

Vue.use(VueRouter)

const routes = [
  {
    path: '/items',
    name: 'items',
    component: UserView
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin
  },
  {
    path: '/dashboard',
    name: 'AdminView',
    component: AdminView
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) =>{
  const token = sessionStorage.getItem('token')
  if (to.path === '/'){
    next('/items')
  }
  if (!token && to.path === '/dashboard'){
    next('/admin')
  }else {
    next()
  }
  if (!token && to.path === '/dashboard'){
    next('/admin')
  }else {
    next()
  }
})

export default router
