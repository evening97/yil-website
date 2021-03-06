import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../node_modules/remixicon/fonts/remixicon.css'
import './assets/output.css'
//轮播图

import './api'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css' 
Vue.use(VueAwesomeSwiper, /* { default options with global component } */)
// id
import { nanoid } from "nanoid"
Vue.use(nanoid)
Vue.config.productionTip = false
//引入数据接口
import './mock/mosckServer'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
