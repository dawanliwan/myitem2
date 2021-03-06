// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import MintUI from "mint-ui"
import "mint-ui/lib/style.css"
Vue.use(MintUI)
import "./lib/dist/css/mui.min.css"
import "./lib/dist/css/icons-extra.css"
// import "../lib/mui/css/icons-extra.css"


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
