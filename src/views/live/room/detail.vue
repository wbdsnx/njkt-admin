<template>
	<div>
		<page-header />

		<div class="content-box head-view">
			<div class="left-view">
				<div class="label-value">
					<div class="label">直播名称</div>
					<div class="value">{{live.name}}</div>
				</div>
				<div class="label-value">
					<div class="label">教授</div>
					<div class="value">{{live.expert}}</div>
				</div>
			</div>
			<div class="right-view">
				<span class="live-status" v-if="live.living">
					<a>
						直播中...
					</a>
				</span>
				<data-tabs :selected="2" :tabs="live.tabs" @tabChanged="tabChanged" />
			</div>
		</div>
		<div class="content-box content-view">
			<div class="content-view-head">
				<div class="head-icon"></div>
				<span class="head-title">查看在线人数</span>
			</div>
			<div class="chart-head">
				<time-tabs :timeTabs="timeTabs" />
			</div>
			<div class="content-middle-view">
				<div class="left">
					<div class="top">
						<div class="data-label">累计用户数</div>
						<div class="data-value">{{live.totalViewers}}</div>
					</div>
					<div class="bottom">
						<div class="data-label">当日新增用户数</div>
						<div class="data-value">{{live.todayIncreaseViewers}}</div>
					</div>
				</div>
				<div class="right">
					<viewers-line-chart />
				</div>
			</div>
		</div>
		<div class="content-box fotter-view">
			<div class="content-view-head">
				<div class="head-icon"></div>
				<span class="head-title">用户列表</span>
			</div>
			<div class="content-middle-view">
				<filter-form :form="filterForm" style="margin-top: 16px;" />
				<cont-table class="cont-table" :total="live.liveUserTootal" :columns="columns" :dataSource="userData">
				</cont-table>
			</div>
		</div>
	</div>
</template>

<script>
	import ViewersLineChart from './components/viewers-line-chart'
	import column from '@/common/column.js'
	import {
		block,
		kickOut
	} from '@/common/operation.js'

	const columns = [
		column("头像", 'img', 94),
		column("昵称", 'nickname', 176),
		column("首次进入时间", 'time', 210),
		column("累计时长", 'duration', 210),
		column("操作", 'operation', 268),
	];


	const userData = [{
			key: '1',
			nickname: '小黄鸭',
			img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg",
			time: '20201-04-23 09:20:00',
			duration: '05:50:08',
			operation: [block, kickOut]
		},
		{
			key: '2',
			nickname: '大白鹅',
			img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg",
			time: '20201-04-23 09:20:00',
			duration: '01:03:40',
			operation: [block, kickOut]
		}
	]

	const filterForm = {
		name: {
			label: "昵称",
			value: "",
			placeholder: "请输入昵称",
			type: "input",
		},
		date: {
			label: "首次进入时间",
			value: "",
			placeholder: "请选择",
			type: "datePicker",
		},
	}

	const timeTabs = [
		'5分钟',
		'10分钟',
		'20分钟',
		'30分钟'
	]

	export default {
		data() {
			return {
				filterForm,
				columns,
				userData,
				timeTabs,
				live: {
					name: "土豆种植法",
					expert: "张雄",
					living: true,
					liveUserTootal: 1000,
					todayIncreaseViewers: '14,562',
					totalViewers: '123',
					tabs: [{
							label: "观看人数",
							value: "56,789"
						},
						{
							label: "评价数",
							value: "156,487",
						},
						// {
						// 	label: "评论数",
						// 	value: "56,789",
						// },
						{
							label: "收藏人数",
							value: "89"
						}
					],
				}
			};
		},
		mounted() {
			block.confirm = '确定要禁言此用户吗'
			kickOut.confirm = '确定要踢出此用户吗？'
		},
		components: {
			ViewersLineChart
		},
		methods: {
			tabChanged(index) {}
		}
	};
</script>

<style lang="less">
	.content-box {
		padding-top: 16px;
		padding-bottom: 16px;
		margin-bottom: 24px;
	}

	.head-view {
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.left-view {
			.label-value {
				display: flex;
				flex-direction: row;

				.label {
					width: 56px;
					margin-right: 40px;
					color: #555555;
					line-height: 20px;
				}

				.value {
					font-weight: 500;
					color: #000;
					line-height: 20px;
				}
			}

			.label-value:last-child {
				margin-top: 8px;
			}

		}

		.right-view {
			display: flex;
			flex-direction: row;

			.live-status {
				// text-align: center;
				padding-top: 20px;
				margin-right: 32px;
				// height: 100px;
			}
		}

	}

	.content-view {

		.chart-head {
			text-align: right;
		}

		.content-middle-view {
			margin-top: 16px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

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

			.right {}

		}

	}

	.content-view,
	.fotter-view {
		.content-view-head {
			display: flex;
			align-items: center;

			.head-icon {
				width: 4px;
				height: 14px;
				margin-right: 4px;
				background: @themeColor;
			}

			.head-title {
				color: rgba(17, 17, 17, 1);
				font-weight: 500;
				line-height: 21px;
			}
		}

	}
</style>
