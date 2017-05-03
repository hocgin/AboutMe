// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
// 引入js
import holderjs from 'holderjs'
// 引入 css/scss
import appScss from './assets/app.scss'
import animateCss from './assets/animate.css'
import fontAwesomeCss from './assets/font-awesome-4.7.0/css/font-awesome.css'
// 防 error
console.log(holderjs, appScss, fontAwesomeCss, animateCss)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
