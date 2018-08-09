import Vue from 'vue'
import Apps from './App'
import routers from './router/index.js'
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  components: { App: Apps },
  template: '<App/>'
})
