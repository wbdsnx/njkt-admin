<template>
	<a-page-header v-if="goBack" :title="title"  @back="back" />
	<a-page-header v-else :title="title" :back-icon="false" @back="back" />
</template>

<script>
	export default {
		name: 'page-header',
		props: {
			goBack: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				title: this.$route.meta.title
			}
		},
		methods: {
			back() {
				this.$router.back()
			}
		}
	}
</script>

<style lang="less">
	.ant-page-header {
		padding: 16px 0;
	}
	
	.ant-page-header-heading-title {
		font-size: 20px !important;
	}
</style>
