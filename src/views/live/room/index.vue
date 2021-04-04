<template>
	<div id = 'live-room'>
			<div class="page-title">
				直播间管理
			</div>
			<!-- 筛选框 -->
			<div class="content-box content-filter">
				<filter-form :form="filterForm" :tools="tools"></filter-form>
			</div>
			<!-- 表格 -->
			<div class="content-box content-table">
				<a-button type="primary" class="btn-primary add-btn" @click="addRoom()">
					<img class="btn-icon" src="@/assets/icons/add.png" alt="" />
					添加
				</a-button>
				<a-button class="btn-primary del-btn">
					<img class="btn-icon" src="@/assets/icons/delete.png" alt="" />
					删除
				</a-button>
				<cont-table class="cont-table" :total="total" :columns="columns" :dataSource="data"></cont-table>
			</div>
		
	</div>
	
</template>
<script>
	import column from '@/common/column.js'
	import {
		detail,
		statistics,
		edit,
		offShelf,
		remove
	} from '@/common/operation.js'
	const columns = [
		column("图片", 'img', 94),
		column("直播名称", 'liveName', 280),
		column("教授名称", 'expertName', 94),
		column("分类", 'classify', 180),
		column("时间", 'time', 174),
		column("状态", 'status', 94),
		column("操作", 'operation', 200),
	];
	const data = [{
			key: '1',
			img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg",
			liveName: '土豆种植法',
			expertName: '张雄',
			classify: ["湖羊", "繁殖期", "营养"],
			status: {
				selected: 0,
				uri: "123",
				options: ['未开播', '直播中']
			},
			time: '20201-04-23 09:20:00',
			operation: [statistics, detail, edit, offShelf, remove]
		},
		{
			key: '2',
			img: "https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3434365774,3342884301&fm=26&gp=0.jpg",
			liveName: '土豆种植法及种植技法教学第四讲',
			expertName: '张雄',
			classify: ["湖羊", "繁殖期", "营养"],
			status: {
				selected: 1,
				uri: "123",
				options: ['未开播', '直播中']
			},
			time: '20201-04-23 09:20:00',
			operation: [statistics, detail, edit, offShelf, remove]
		}
	];

	const filterForm = {
		name: {
			label: "直播名称",
			value: "",
			placeholder: "请输入直播名称",
			type: "input",
		},
		expertName: {
			label: "教授名称",
			value: "",
			placeholder: "请输入教授名称",
			type: "input",
		},
		class: {
			label: "直播分类",
				value: "",
				placeholder: "请选择直播分类",
				type: "select",
		},
		status: {
			label: "直播状态",
			selected: 0,
			options: [{
					name: "未开始",
					value: 0
				},
				{
					name: "直播中",
					value: 1
				},
			],
			placeholder: "请选择直播状态",
			type: "select",
		},
	}

	const tools = [{
		content: '查询',
		icon: require('@/assets/icons/search.png'),
		type: 'primary',
		onClick: function() {}
	}, {
		content: "重置",
		icon: require('@/assets/icons/reset.png'),
		type: '',
		onClick: function() {}
	}]

	export default {
		data() {
			return {
				total: 1000,
				filterForm,
				tools,
				columns,
				data,
			}
		},
		
		mounted() {
			offShelf.name = '直播'
			remove.name = '直播'
			edit.action = this.editRoom
			detail.action = this.roomDetail
			statistics.action = this.roomStatistics
		},

		methods: {
			addRoom: function() {
				this.$router.push({
					path: '/live/add'
				})
			},
			editRoom: function(data) {
				this.$router.push({
					path: '/live/edit',
					params: data
				})
			},
			roomStatistics: function(data) {
				console.log(data)
				this.$router.push({
					path: '/live/statistics',
					params: data
				})
			},
			roomDetail: function(data) {
				console.log('11111111')
				console.log(data)
				this.$router.push({
					path: '/live/room/detail',
					params: data
				})
				// this.$router.go(1)
			}
		}
	}
</script>

<style lang="less">
	.content-table {
		margin-top: 24px;
		padding: 16px 24px 24px 24px;

		.cont-table {
			margin-top: 16px;
		}

		.add-btn {
			margin-right: 16px;
		}
	}
</style>
