import Vue from 'vue'
import Apps from './App'
import routers from './router/index.js'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决移动端点击事件
fastClick.attach(document.body)

Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  // 引用store里面的数据
  store: store,
  components: { App: Apps },
  template: '<App/>'
})
