<template>
	<span class="data-tab-view">
		<a-button :class="['tab-btn',{active:index == selectedIndex}]" :disabled="index == (tabs.length -1)"  :ref = "`tab-${index}`" v-for="(tab,index) in tabs" :key="tab.label" @click="tabChanged(index)">
			<div class="tab-value">{{tab.value}}</div>
			<div class="tab-label">{{tab.label}}</div>
		</a-button>
	</span>
</template>

<script>
	export default{
		name:"data-tabs",
		props:{
			tabs:{
				type:Array,
				default:[]
			},
			
			selected:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				selectedIndex:this.selected
			}
		},
		methods:{
			tabChanged(index){
				if(index != this.selectedIndex){
					this.selectedIndex = index
					this.$emit('tabChanged',index)
				}
			}
		}
	}
</script>

<style lang="less">
	.tab-btn{
		height: 60px;
		margin-right: 0;
		border-radius: 0;
	}
	
</style>
