<template>
	<div id="app">
		<a-config-provider :locale="locale">
			<Home />
		</a-config-provider>
	</div>
</template>
<script>
	import Home from './views/home'
	import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
	import store from './store'
	export default {
		data() {
			return {
				locale: zhCN,
				parentPages: [
					'/', 
					'/live/room',
					'/data'
					], //所有父页面在此添加
			}
		},
		components: {
			Home
		},
		watch: {
			'$route': function(to) {
				let isParentPage = this.parentPages.indexOf(to.path) !== -1
				store.commit('setIsParentPage', isParentPage)
			}
		},
	}
</script>
<style lang="less">
	#app {
		
	}
</style>
