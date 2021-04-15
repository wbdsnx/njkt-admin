<template>
	<div :id="id" style="width: 548px; height: 324px;"></div>
</template>

<script>
	export default {
		name: 'pie-chart',
		props: {
			id: {
				required: true,
				type: String,
				default: ''
			},
			seriesData: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				option: {
					color: ['#20BF8E', '#6395F9', '#677898', '#E86B5B', '#F5BF22', '#CCD1DC', '#76CBF0'],
					tooltip: {
						trigger: 'item',
					},
					legend: {
						orient: 'vertical',
						left: 'left',
						itemWidth: 8,
						icon: 'circle',
						textStyle:{
							color:'#A8A8A8',
							fontSize:12
						},
						padding: [8, 0],
					},
					series: [{
						type: 'pie',
						radius: '75%',
						data: this.seriesData,
						label:{
							color:'#A8A8A8',
							fontSize:12
						},
						emphasis:{
							label:{
								color:'#000',
								fontSize:14
							}
						}		
					}],
				
				}
			}
		},

		mounted() {
			let chartDom = document.getElementById(this.id)
			this.myChart = this.$charts.init(chartDom)
			this.myChart.setOption(this.option)
		}
	}
</script>

<style>
</style>
