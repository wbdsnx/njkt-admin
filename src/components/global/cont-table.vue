<template>
	<div class="cont-table">
		<a-table size="middle" :columns="columns" 
		:scroll = "{
			x:'148px'
		}"
		:data-source="dataSource"
			:pagination="showPagination?pagination:false" :row-selection="rowSelection">
			 <viewer slot='img' slot-scope="img" :images="[img]">
				 <img :src="img" width="42px" height="42px" />
			 </viewer>
			<span slot='classify' slot-scope="tags">
				<a-tag v-for="tag in tags" :key="tag">{{tag}}</a-tag>
			</span>
			<span slot='status' slot-scope='status'>
				<a v-if="status.selected == 1" :href="status.uri">{{status.options[1]}}</a>
				<span v-else>{{status.options[0]}}</span>
			</span>
			<span class="operation-template" style="height: 14px;" slot="operation" slot-scope='operation,record,index'>
				<span class="operation-a" v-for="(opera,ind) in operation">
					<a v-if="!opera.confirm" @click="opera.action(index)">{{opera.title}}</a>
					<a v-else @click="confirm(opera,index)">{{opera.title}}</a>
					<a-divider type="vertical" v-if="ind != operation.length - 1"></a-divider>
				</span>
			</span>
		</a-table>
	</div>
</template>

<script>
	export default {
		name: "cont-table",
		props: {
			total: {
				type: Number,
				default: 0
			},
			columns: {
				type: Array,
				default: []
			},
			dataSource: {
				type: Array,
				default: []
			},
			total: {
				type: Number,
				default: 0
			},
			showPagination: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				pagination: {
					current: 1,
					pageSize: 10,
					total: this.total,
					showSizeChanger: true,
					showQuickJumper: true,
					pageSizeOptions: ['10', '20', '30', '50'], // 这里注意只能是字符串，不能是数字
					showTotal: total => `共有 ${total} 条`,
					onChange: page => {
						console.log(12)
						this.pagination.current = page
					},
					onShowSizeChange: (current, pageSize) => {
						this.pagination.pageSize = pageSize
						this.pagination.current = 1
						this.userList()
					}
				},
				rowSelection: {
					onChange: (selectedRowKeys, selectedRows) => {},
					onSelect: (record, selected, selectedRows) => {},
					onSelectAll: (selected, selectedRows, changeRows) => {},
				}
			}
		},
		computed: {

		},
		methods: {
			confirm: function(opera, index) {
				console.log(opera)
				this.$confirm({
					destroyOnClose: true,
					centered: true,
					title: opera.confirm,
					okText: '确认',
					okType: opera.type,
					cancelText: '取消',
					onOk() {
						opera.action(index)
					},
					onCancel() {
						console.log('Cancel');
					},
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.cont-table {}
</style>
