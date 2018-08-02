import Vue from 'vue'

import 'swiper/dist/css/swiper.min.css'

//全局样式
import '../stylesheets/main.scss'

//rem
import computedRem from './rem'
computedRem()

//axions
import axions from 'axios'
Vue.prototype.$http = axions

//公共组件
import './Ui-components'

Vue.config.productionTip = false
