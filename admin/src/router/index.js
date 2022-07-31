import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminLogin from '../views/AdminLogin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    name: 'admin',
    component: AdminLogin
  },
]

const router = new VueRouter({
  routes
})

export default router
