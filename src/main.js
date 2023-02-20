import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import '@/assets/css/umi.css'
import '@/assets/css/components.chunk.css'
import '@/assets/theme/black.css'


axios.defaults.baseURL = '/proxy'
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.prototype.$host = 'http://fk.kncloud.live'


axios.interceptors.request.use(
    config => {
        // console.log(config.headers.common['Authorization'])
        if (config.headers.common['Authorization']) {
            return config
        }
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
