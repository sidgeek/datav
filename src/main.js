import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import Echarts from 'echarts'
import VueEcharts from 'vue-echarts'
import './plugins/vcharts.js'

Vue.config.productionTip = false
Vue.prototype.$echarts = Echarts
Vue.component('v-chart', VueEcharts) // 注册组件

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
