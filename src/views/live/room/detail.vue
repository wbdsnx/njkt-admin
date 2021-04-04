<template>
	<classify-select />
</template>
<script>
	export default {
		data() {
			return {
				value: undefined,
			};
		},
		methods: {
			onChange(value) {
				console.log(value);
				this.value = value;
			},
			onSearch() {
				console.log(...arguments);
			},
			onSelect() {
				console.log(...arguments);
			},
		},
	};
</script>

<style lang="less">
</style>
