import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/main.scss'
import PerfectScrollbar from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
import Notifications from 'vue-notification'
import 'swiper/swiper-bundle.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false
Vue.use(Notifications)




Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.use(PerfectScrollbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
