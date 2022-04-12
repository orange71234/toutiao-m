import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全局引入样式
import "./style/index.less"
// 全局引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// 使用 rem 单位进行适配
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
