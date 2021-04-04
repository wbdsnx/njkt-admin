<template>
	<!-- 表格分页器 -->
	<div class="table-pagin">
		<a-pagination :current="current" :pageSize="pageSize" :total="total"  
		:show-total="(total, range) => `共有 ${total} 条`"
		show-size-changer 
		show-quick-jumper >
			:pageSizeOptions="pageSizeOptions"
		</a-pagination>
	</div>
</template>
<script>
	export default {
		name: "table-pagin",
		props: {
			current: {
				type: Number,
				default: 0,
			},

			pageSize: {
				type: Number,
				default: 10,
			},
			pageSizeOptions: {
				type: Array,
				default: function() {
					return ['10', '20', '30']
				}
			},
			total: {
				type: Number,
				default: 0,
			}
		},
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style>
</style>
