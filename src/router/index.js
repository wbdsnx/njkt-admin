import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import modules from './modules'
const router = new VueRouter({
	routes: modules,
	mode: 'history',
	base: process.env.BASE_URL,
})


router.beforeEach((to, from, next) => {
	if (to.matched.length != 0) {
		next()
	} else {
		next({
			path: '/err404'
		})
	}
	window.document.title = to.meta.title || '农技课堂'
})

export default router
