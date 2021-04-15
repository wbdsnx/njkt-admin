<template>
	<div class="radio-view">
		<a-radio-group name = "radioGroup" :default-value = "options[0].value">
			<a-radio v-for = "opt in options" :key="opt.label" :value = "opt.value">{{opt.label}}</a-radio>
		</a-radio-group>
		<div class="tips">
			{{tips}}
		</div>
	</div>
</template>

<script>
	export default{
		name:'radio',
		props:{
			options:{
				type:Array,
				default:[]
			},
			tips:{
				type:String,
				default:''
			}
		},
		data(){
			return {}
		}
	}
</script>

<style>
</style>
