<template>
	<div class="expert-data" >
		<page-header :go-back="false" />
		<div class="content-box filter">
			<filter-form :form="filterForm" :tools="tools" />
		</div>
		<div class="chart-content">
			<a @click="jumpToPage('/data/help')">
				<div class="chart">
					<div class="head">
						<div class="head-icon"></div>
						<span class="label-title">求助汇总</span>
					</div>
					<pie-chart id="help-pie-chart" :seriesData="helpSeriesData" />
				</div>
			</a>
			<a @click="jumpToPage('/data/help')">
				<div class="chart">
					<div class="head">
						<div class="head-icon"></div>
						<span class="label-title">直播汇总</span>
					</div>
					<pie-chart id="live-pie-chart" :seriesData="liveSeriesData" />
				</div>
			</a>
			<a @click="jumpToPage('/data/help')">
				<div class="chart">
					<div class="head">
						<div class="head-icon"></div>
						<span class="label-title">课程汇总</span>
					</div>
					<pie-chart id="course-pie-chart" :seriesData="courseSeriesData" />
				</div>
			</a>
			<a @click="jumpToPage('/data/help')">
				<div class="chart">
					<div class="head">
						<div class="head-icon"></div>
						<span class="label-title">文章汇总</span>
					</div>
					<pie-chart id="article-pie-chart" :seriesData="articleSeriesData" />
				</div>
			</a>
		</div>
	</div>

</template>

<script>
	import PieChart from './components/pie-chart'
	const filterForm = {
		date: {
			label: "日期",
			value: ['', ''],
			type: 'rangePicker',
			placeholder: ['起始日期', '结束日期']
		}
	}

	const tools = [{
		content: '查询',
		icon: require('@/assets/icons/search.png'),
		type: 'primary',
		onClick: function() {}
	}, {
		content: "导出",
		icon: require('@/assets/icons/export.png'),
		type: 'primary',
		onClick: function() {}
	}]



	const helpSeriesData = [{
			value: 12341,
			name: '点赞数'
		},
		{
			value: 5671,
			name: '求助总量'
		},
		{
			value: 9250,
			name: '专家数'
		},
	]
	const liveSeriesData = [{
			value: 12341,
			name: '直播总量'
		},
		{
			value: 5671,
			name: '观看数'
		},
		{
			value: 9250,
			name: '评论数'
		},
		{
			value: 11125,
			name: '收藏数'
		},
		{
			value: 4156,
			name: '评价数'
		},
	]
	const courseSeriesData = [{
			value: 12341,
			name: '课程总量'
		},
		{
			value: 5671,
			name: '转发数'
		},

		{
			value: 11125,
			name: '收藏数'
		},
		{
			value: 9250,
			name: '评论数'
		},
		{
			value: 4156,
			name: '评价数'
		},
	]

	const articleSeriesData = [{
			value: 12341,
			name: '文章总量'
		},
		{
			value: 5671,
			name: '转发数'
		},

		{
			value: 11125,
			name: '收藏数'
		},
		{
			value: 11125,
			name: '点赞数'
		},
		{
			value: 9250,
			name: '阅读量'
		},
		{
			value: 9250,
			name: '评论数'
		},
		{
			value: 4156,
			name: '评价数'
		},
	]

	export default {
		data() {
			return {
				filterForm,
				tools,
				helpSeriesData,
				liveSeriesData,
				courseSeriesData,
				articleSeriesData,
			
			}
		},
		components: {
			PieChart,
		
		},
		methods: {
			jumpToPage(url) {
				this.$router.push(url)
			}
		}
	}
</script>

<style lang="less" scoped>
	.filter {
		width: 1184px;
		padding-bottom: 0;
	}

	.chart-content {
		margin-top: 24px;
		width: 1184px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;

		.chart {
			padding-top: 16px;
			padding-left: 16px;
			width: 580px;
			box-shadow: 0 2px 5px 2px rgba(202, 221, 247, 0.8);
			height: 396px;
			margin-bottom: 16px;

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


		}
	}


</style>
