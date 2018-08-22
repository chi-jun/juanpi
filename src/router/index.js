import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/pages/Home/Home'
import Classify from '../components/pages/Concat/Classify'
import Cart from '../components/pages/Cart/Cart'
import Mine from '../components/pages/Mine/Mine'
import specialty from '../components/pages/Home/specialty'
import single  from '../components/pages/Home/single'
import SearchBlonk from '../components/pages/Concat/search-blonk'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
   
    {
      path: '/home',
      // redirect: {name:'HelloWord'},
      component: Home,
      children: [
        {
          path:'',
          // name:'home',
          redirect: { name: 'specialty' }

        },
        {
          path: 'specialty',
          name: 'specialty',
          component:specialty
        },
        {
          path:'single',
          name: 'single',
          component: single
        }
      ]
    },
    {
      path: '/Classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/Cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/search',
      name: 'search',
      component: SearchBlonk
    }
  ]
})
