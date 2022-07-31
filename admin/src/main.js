import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/umi.css'
import '@/assets/css/components.chunk.css'
import '@/assets/theme/black.css'


axios.defaults.baseURL = 'http://hkt.knyun.xyz:3000/api/v1'
Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
