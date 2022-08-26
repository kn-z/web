import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../views/AdminLogin.vue'
import AdminView from '../views/AdminView.vue'

Vue.use(VueRouter)

const routes = [
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
  if (to.path === '/admin') return next()
  if (!token && to.path === '/dashboard'){
    next('/admin')
  }else {
    next()
  }
})

export default router
