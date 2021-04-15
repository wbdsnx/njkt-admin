<template>
	<div class="index-user-data">
		<page-header />
		<div class="content-box">
			<div class="head-view">
				<div class="expert-num">
					<div class="num">{{userData.expertNum}}</div>
					<div class="label">专家数</div>
				</div>
				<div class="help-num">
					<div class="num">{{userData.helpNum}}</div>
					<div class="label">求助数</div>
				</div>
				<div class="expert-num">
					<div class="num">{{userData.liveNum}}</div>
					<div class="label">直播数</div>
				</div>
			</div>
			<div class="filter">
				<span>日期：</span>
				<a-date-picker  />
				<a-date-picker />
			</div>
			<div id="user-data-chart"></div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				myChart: undefined,
				userData: {
					expertNum: '1,124',
					helpNum: '124',
					liveNum: '60'
				},
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
						x: 'center',
						y: 'bottom',
						show: true,
						padding: [16, 0, 0, 0],
						itemWidth: 16,
						itemGap: 48,
						icon: 'rect',
						data: ["专家数", "求助数", "直播数"]
					},
					toolbox: {
						feature: {
							// saveAsImage: {}
						}
					},
					grid: {
						left: '0',
						right: '0',
						top: '32px',
						bottom: '32px',
						// height:'240px',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						boundaryGap: true,
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
								width: 0, //这里是为了突出显示加上的
							}
						}
					}],
					series: [{
							name: '专家数',
							type: 'bar',
							itemStyle: {
								color: '#20BF8E',
								lineStyle: {
									width: 2 //设置线条粗细
								}
							},
							stack: '',
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
							data: [125, 425, 313, 686, 425, 514, 923, 705, 609, 423, 555, 355]
						},
						{
							name: '求助数',
							type: 'bar',
							itemStyle: {
								color: '#76CBF0',
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
							data: [112, 325, 55, 347, 565, 411, 355, 408, 653, 111, 639, 456]
						},
						{
							name: '直播数',
							type: 'bar',
							itemStyle: {
								color: '#FFBE00',
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
							data: [156, 325, 55, 347, 565, 411, 355, 408, 653, 111, 639, 456]
						}
					]
				}
			}
		},
		mounted() {
			let chartDom = document.getElementById("user-data-chart")
			this.myChart = this.$charts.init(chartDom)
			this.myChart.setOption(this.option)
		}
	}
</script>

<style lang="less">
	.index-user-data {
		.content-box {
			width: 1184px;
			padding-bottom: 32px;
			.head-view {
				display: flex;
				flex-direction: row;
				.expert-num,
				.help-num,
				.live-num {
					width: 138px;
					height: 78px;
					background-repeat: no-repeat;
					background-size: 100% 100%;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					margin-right: 48px;
					color: #20BF8E;

					.num {
						font-size: 18px !important;
						font-weight: 500;
					}

					.label {}
				}

				.expert-num {
					background-image: url(../../assets/img/bg/expert.png);
				}

				.help-num {
					background-image: url(../../assets/img/bg/help.png);
				}

				.live-num {
					background-image: url(../../assets/img/bg/live.png);
				}
			}

			.filter {
				margin-top: 42px;
				text-align: right;
			}

			#user-data-chart {
				width: 1136px;
				height: 325px;
			}
		}
	}
</style>
