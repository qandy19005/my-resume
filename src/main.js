import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vmodal from 'vue-js-modal'
import { i18n } from './plugins/lang'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)
Vue.use(vmodal)
Vue.config.productionTip = false
Vue.config.devtools = true
new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
