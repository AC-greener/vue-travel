// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Apps from './App'
import routers from './router/index.js'
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'

Vue.config.productionTip = false

fastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: routers,
  components: { App: Apps },
  template: '<App/>'
})
