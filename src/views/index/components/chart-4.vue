<template>
	<div class="content-box">
		<div class="head">
			<div class="head-icon"></div>
			<span class="label-title">直播数据统计</span>
		</div>
		<div class="time-filter">
			<span class="label">时间：</span>
			<a-date-picker style="width: 256px;" :show-time="{ }" placeholder="请选择时间" />
		</div>
		<div class="content-view">
			<div id="chart-4"></div>
		</div>

	</div>
</template>

<script>
	export default {
		name: 'chart-4',
		data() {
			return {
				myChart: undefined,
				option: {
					color: ['#20BF8E', '#FF6A00'],
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
						x:'center',
						y:'bottom',
						show: true,
						padding:[16,0,0,0],
						itemWidth:16,
						itemGap:32,
						icon:'rect',
						data: ['访问数', '新增粉丝']
					},
					toolbox: {
						feature: {
							// saveAsImage: {}
						}
					},
					grid: {
						left: '8px',
						right: '8px',
						top: '8px',
						bottom: '32px',
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
						data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月', ]
					}],
					yAxis: [{
						type: 'value',
						axisLine: {
							lineStyle: {
								color: 'rgba(0,0,0,0.45)',
								width: 1, //这里是为了突出显示加上的
							}
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(0,0,0,0.08)',
								width: 1, //这里是为了突出显示加上的
							}
						}
					}],
					series: [{
							name: "访问数",
							type: 'line',
							itemStyle: {
								color: '#FF6A00',
								lineStyle: {
									width: 2 //设置线条粗细
								}
							},
							stack: '',
							smooth: false,
							showSymbol: false,
							emphasis: {
								focus: 'series',
							},
							data: [125, 425, 313, 686, 425, 514, 923, 705, 609, 423, 555, 355]
						},
						{
							name: "新增粉丝",
							type: 'line',
							itemStyle: {
								color: '#20BF8E',
								lineStyle: {
									width: 2 //设置线条粗细
								}
							},
							stack: '',
							smooth: false,

							showSymbol: false,
							emphasis: {
								focus: 'series',
							},
							data: [0, 325, 55, 347, 565, 411, 355, 408, 653, 111, 639, 456]
						}
					]
				}
			}
		},
		mounted() {
			let chartDom = document.getElementById("chart-4")
			this.myChart = this.$charts.init(chartDom)
			this.myChart.setOption(this.option)
		
		}
	}
</script>

<style lang="less" scoped>
	.content-box {
		width: 580px;
		height: 454px;

		.head {
			display: flex;
			flex-direction: row;
			align-items: center;

			.head-icon {
				background: @themeColor;
				width: 4px;
				height: 14px;
				margin-right: 6px;
			}

			.label-title {
				font-weight: 500;
				color: #333333;
			}
		}

		.time-filter {
			text-align: right;
			margin-bottom: 32px;

			.label {
				color: #333333;
			}

		}

		.content-view {
			display: flex;
			justify-content: center;

			#chart-4 {
				width: 540px;
				height: 300px;
			}
		}

	}
</style>
