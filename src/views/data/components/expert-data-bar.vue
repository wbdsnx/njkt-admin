<template>
	<div class="expert-data-bar">
		<div class="name-and-level">
			<span class="level">V{{expertData.level}}</span>
			<a class="name" @click="jumpToPage('/data/expert')">{{expertData.name}}</a>
		</div>
		<div class="follows">
			<span class="num">{{expertData.follows}}</span>
			<a-progress :percent="expertData.follows / expertData.foloowsBaseCount*100" :stroke-width="16" stroke-color="#6395F9" style="width: 226px;"
			strokeLinecap='square'
				:show-info="false" />
		</div>
		<div class="consults">
			<span class="num">{{expertData.consults}}</span>
			<a-progress :percent="expertData.consults / expertData.consultsBaseCount*100" :stroke-width="16" stroke-color="#677898" style="width: 226px;"
			strokeLinecap='square'
				:show-info="false" />
		</div>
		<div class="replys">
			<span class="num">{{expertData.replys}}</span>
			<a-progress :percent="expertData.replys / expertData.replysBaseCount*100" :stroke-width="16" stroke-color="#76CBF0" style="width: 226px;"
			strokeLinecap='square'
				:show-info="false" />
		</div>
		<div class="reply-rate">
			<span class="num">{{(expertData.replys/expertData.consults * 100).toFixed(2)}}%</span>
			<a-progress :percent="expertData.replys / expertData.replysBaseCount*100" :stroke-width="16" stroke-color="#F5BF22" style="width: 226px;"
			strokeLinecap='square'
				:show-info="false" />
		</div>
	</div>
</template>

<script>
	export default {
		name:'expert-data-bar',
		props:{
			expertData:{
				type:Object,
				default:() => {}
			}
		},
		data(){
			return {}
		},
		methods:{
			jumpToPage(url){
				this.$router.push(url)
			}
		}
	}
</script>

<style lang="less" scoped>
	.expert-data-bar{
		display: flex;
		flex-direction: row;
		align-items: flex-end;
		.name-and-level{
			width: 124px;
			margin-bottom: 24px;
			.level{
				color: #888888;
				margin-right: 2px;
			}
		}
		
		.follows,
		.consults,
		.replys,
		.reply-rate {
			display: flex;
			flex-direction: column;
			font-weight: 500;
			width: 264px;
			margin-bottom: 24px;
			color: #555555;
			
			.num{
				color: #C6C6C6;
			}
			
			/deep/.ant-progress-inner{
					border-radius: 0 !important;
			}
		}
	
	}
</style>
