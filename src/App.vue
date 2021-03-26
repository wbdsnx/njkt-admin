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

	export default {
		data() {
			return {
				locale: zhCN
			}
		},
		components: {
			Home
		}
	}
</script>
<style lang="less">
	#app {}
</style>
