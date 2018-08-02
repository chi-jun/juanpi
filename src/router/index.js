import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/HelloWord'
import Concat from '../components/pages/Concat/Concat'
import Cart from '../components/pages/Cart/Cart'
import Mine from '../components/pages/Mine/Mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/concat',
      name: 'Concat',
      component: Concat
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
