<template>
	<div class="content-box">
		<div class="head">
			<time-tabs label="分类" :time-tabs="timeTabs" />
		</div>
		<div class="content-view">
			<div class="left">
				<div class="top">
					<div class="data-label">累计用户数</div>
					<div class="data-value">{{chartData.totalUsers}}</div>
				</div>
				<div class="bottom">
					<div class="data-label">当日新增用户数</div>
					<div class="data-value">{{chartData.todayIncreUsers}}</div>
				</div>
			</div>
			<div id="chart-3"></div>
		</div>
	</div>
</template>

<script>
	const timeTabs = [
		"昨日",
		"今天",
		"最近七日",
		"本月"
	]
	export default {
		name: 'chart-3',
		props: {
			chartData: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				myChart: undefined,
				timeTabs,
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
					legend: {},
					toolbox: {
						feature: {
							// saveAsImage: {}
						}
					},
					grid: {
						left: '16px',
						right: '8px',
						top: '8px',
						bottom: '16px',
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
						data: ['0', '1', '2', '3', '4', '5', '6']
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
			let chartDom = document.getElementById("chart-3")
			this.myChart = this.$charts.init(chartDom)
			this.myChart.setOption(this.option)
		}
	}
</script>

<style lang="less" scoped>
	.content-box {
		height: 454px;

		.head {
			text-align: right;
		}

		.content-view {
			margin-top: 32px;
			display: flex;
			flex-direction: row;

			.left {
				.data-label {
					color: rgba(51, 51, 51, 0.45);
					line-height: 20px;
					margin-bottom: 4px;
				}

				.data-value {
					color: rgba(51, 51, 51, 1);
					font-weight: 500;
					font-size: 24px !important;
					margin-bottom: 52px;
				}
			}
		}

		#chart-3 {

			width: 436px;
			height: 330px;
		}
	}
</style>
