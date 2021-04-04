import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		currentPath:'/'
	},
	mutations: {
		setCurrentPath(state,currentPath){
			state.currentPath = currentPath
		}
	},
	getters: {
		currentPath:state => state.currentPath
	},
	actions: {},
	modules: {}
})
