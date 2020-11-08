import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal'
import { i18n } from './plugins/lang'

Vue.use(vmodal)
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
