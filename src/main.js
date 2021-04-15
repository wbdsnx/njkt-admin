import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import * as charts from 'echarts'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.less';

import 'lib-flexible'

Vue.prototype.$charts = charts


import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
Vue.use(Viewer)


//全局样式
import '@/assets/css/index.less'
//全局组件
import '@/components/global'


import Api from '@/api'
import utils from '@/utils'

Vue.prototype.$axios = Api
Vue.prototype.$utils = utils

// 引入全局过滤器
import filter from '@/utils/filter'
Object.keys(filter).forEach(key => {
	Vue.filter(key, filter[key])
})

Vue.config.productionTip = false;
Vue.use(Antd)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
