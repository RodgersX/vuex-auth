import Vue from 'vue'
import App from './App.vue'
import store from './store'

const token = localStorage.getItem('token')
if(token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
