<template>
	<div class="data-index-view" v-if="$store.getters.isParentPage">
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
			<div class="content-box expert">
				<div class="head">
					<div class="head-icon"></div>
					<span class="label-title">专家汇总</span>
				</div>
				<div class="expert-chart-head">
					<div class="name-and-level">专家名及等级</div>
					<div class="follows">粉丝数</div>
					<div class="consults">咨询量</div>
					<div class="replys">回复量</div>
					<div class="reply-rate">回复率</div>
				</div>
				<div class="expert-chart-body" style="height: 464px; overflow-y: scroll;">
					<expert-date-bar v-for="(expert, index) in expertsData" :expertData="expert" :key="expert.name" />
				</div>
			</div>
		</div>
	</div>
	<router-view v-else />
</template>

<script>
	import PieChart from './components/pie-chart'
	import ExpertDateBar from './components/expert-data-bar'
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

	const expertsData = [{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '工藤新一',
			follows: 555,
			consults: 752,
			replys: 131,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '张雄',
			follows: 758,
			consults: 256,
			replys: 111,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '工藤新一',
			follows: 222,
			consults: 443,
			replys: 258,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '张雄',
			follows: 437,
			consults: 852,
			replys: 258,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '工藤新一',
			follows: 555,
			consults: 741,
			replys: 465,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '张雄',
			follows: 782,
			consults: 651,
			replys: 452,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '工藤新一',
			follows: 412,
			consults: 681,
			replys: 423,
		},
		{
			foloowsBaseCount: 1000,
			consultsBaseCount: 1000,
			replysBaseCount: 1000,
			level: 1,
			name: '张雄',
			follows: 752,
			consults: 538,
			replys: 428,
		}
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
				expertsData,
			}
		},
		components: {
			PieChart,
			ExpertDateBar
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

	.expert {
		padding-bottom: 24px;
		padding-right: 0;
		height: 566px;

		margin-bottom: 24px;

		.head {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-bottom: 16px;

			.head-icon {
				background: @themeColor;
				width: 4px;
				height: 14px;
				margin-right: 6px;
			}

			.label-title {

				font-weight: 500;
				color: #000;
			}
		}

		.expert-chart-head {
			display: flex;
			flex-direction: row;


			.name-and-level {
				font-weight: 500;
				width: 124px;
				color: #555555;
				margin-bottom: 8px;
			}

			.follows,
			.consults,
			.replys,
			.reply-rate {
				font-weight: 500;
				margin-bottom: 8px;
				width: 262px;
				color: #555555;
			}
		}
	}
</style>
