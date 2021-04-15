<template>
	<div class="index-view" v-if="$store.getters.isParentPage">
		<page-header :go-back="false" />
		<div class="charts">
			<chart-1 :chartData="chart1Data" />
			<router-link to="/userData">
				<chart-2 :chartData="chart2Data" />
			</router-link>
			<chart-3 :chartData="chart3Data" />
			<chart-4 />
		</div>
	</div>
	<router-view v-else />
</template>

<script>
	import Chart1 from './components/chart-1'
	import Chart2 from './components/chart-2'
	import Chart3 from './components/chart-3'
	import Chart4 from './components/chart-4'

	export default {
		data() {
			return {

				chart1Data: {
					usersNum: '1,2121,121',
					expertsNum: '12,121',
					usersIncreByWeek: 123,
					usersIncreByMonth: 96,
					expertsIncreByWeek: 123,
					expertsIncreByMonth: 96
				},
				chart2Data: {
					course: {
						todayComments: 375,
						todayEvaluates: 433,
					},
					article: {
						todayComments: 175,
						todayEvaluates: 245,
					}
				},
				chart3Data: {
					totalUsers: '123',
					todayIncreUsers: "14,562"
				}
			}
		},
		components: {
			Chart1,
			Chart2,
			Chart3,
			Chart4
		},
	}
</script>

<style lang="less">
	.index-view {
		min-width: 1210px;
	}

	.charts {
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;

		.content-box {
			min-width: 580px;
			margin-right: 24px;
			margin-bottom: 24px;
		}
	}
</style>
