import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './lib'
import 'es6-promise/auto'
Vue.config.productionTip = false

new Vue({
  store,
  router,
  el: '#app',
  template: '<App/>',
  components: {App}
})
