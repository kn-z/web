import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/umi.css'
// import '@/assets/test/assets/umi.css'
import '@/assets/css/components.chunk.css'
// import '@/assets/test/assets/components.chunk.css'
import '@/assets/theme/black.css'
// import '@/assets/test/assets/theme/black.css'


axios.defaults.baseURL = '/proxy'
Vue.prototype.$http = axios

Vue.config.productionTip = false


axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.common['Authorization'] = "Bearer " + token
    }
    return config
  })

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
