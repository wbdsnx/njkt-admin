import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isParentPage: false,
	},
	mutations: {
		setIsParentPage(state, isParentPage) {
			state.isParentPage = isParentPage
		}
	},
	getters: {
		isParentPage: state => state.isParentPage
	},
	actions: {},
	modules: {}
})
