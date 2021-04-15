<template>
	<div class="time-tabs">
		<span class="time-tabs-label">{{label}}</span>
		<span v-for="(tab,index) in timeTabs" :key="tab">
			<a-button :class="[{active: index == 0},'time-tab-btn']" style="border: none; box-shadow: none;outline: none;">{{tab}}</a-button>
			<a-divider type = 'vertical' v-if = 'index != timeTabs.length - 1'/>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'time-tabs',
		props: {
			label: {
				type: String,
				default: '统计间隔时间： '
			},
			timeTabs:{
				type:Array,
				default:() => []
			}
		},
		data() {
			return {
				
			}
		}
	}
</script>

<style lang="less">
	.time-tabs-label{
		color: rgba(85, 85, 85, 0.45);
		margin-right: 8px;
	}
	.time-tab-btn:focus{
		outline: none;
	}
</style>
