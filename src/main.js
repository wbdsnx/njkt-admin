import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';

Vue.prototype.$store = store

//全局样式
import '@/assets/css/index.less'
//全局组件
import '@/components/global'

Vue.config.productionTip = false;
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
