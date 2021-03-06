// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { InfiniteScroll } from 'mint-ui';

Vue.use(InfiniteScroll);

import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

// 全局通用样式
import './modules/config'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
