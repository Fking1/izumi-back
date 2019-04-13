import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import "./assets/icons/iconfont";// 阿里iconfont图表库
import IconSvg from "./components/common/IconSvg.vue"; // svg组件
Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.component("icon-svg", IconSvg);

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
