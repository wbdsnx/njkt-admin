<template>
	<div id="viewers-line-chart"></div>
</template>

<script>
	export default {
		name: 'views-line-chart',
		data() {
			return {
				myChart: undefined,
				option: {
					color: ['#20BF8E'],
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis',				
						axisPointer: {
							type: 'cross',
							label: {
								backgroundColor: '#20BF8E'
							}
						}
					},
					legend: {
						// data: ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5']
					},
					toolbox: {
						feature: {
							// saveAsImage: {}
						}
					},
					grid: {
						left: '8px',
						right: '8px',
						top:'8px',
						bottom:'16px',
						// height:'240px',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: false,
						axisLine: {
							lineStyle: {
								color: 'rgba(0,0,0,0.45)',
								width: 0, 
								shadowColor: ''
							}
						},
						data: ['20:00', '20:20', '20:40', '21:00', '21:20', '21:40', '22:00']
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: 'rgba(0,0,0,0.45)',
								width: 1, //这里是为了突出显示加上的
							}
						},
						splitLine:{
							lineStyle:{
								color: 'rgba(0,0,0,0.08)',
								width: 1, //这里是为了突出显示加上的
							}
						}
					}],
					series: [{
						// name: 'viewers',
						type: 'line',
						itemStyle: {
								color: '#20BF8E',
								lineStyle: {
									width: 2 //设置线条粗细
								}		
						},
						stack: '',
						smooth: true,

						showSymbol: false,
						areaStyle: {
							opacity: 0.8,
							color: new this.$charts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(32, 191, 142, 0.4)'
							}, {
								offset: 1,
								color: 'rgba(255, 255, 255, 0)'
							}])
						},
						emphasis: {
							focus: 'series',
						},
						data: [16, 33, 31, 46, 36, 23, 31]
					}]
				}
			}
		},
		mounted() {
			var chartDom = document.getElementById("viewers-line-chart")
			this.myChart = this.$charts.init(chartDom)
			this.myChart.setOption(this.option)
			console.log(this.myChart)
		}
	}
</script>

<style lang="less">
	#viewers-line-chart {
		width: 966px;
		height: 240px;
	}
</style>
