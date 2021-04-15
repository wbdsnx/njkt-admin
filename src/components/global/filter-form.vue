<template>
	<div class="filter-form">
		<span v-for="(item,key,index) in filterForm" class="filter-item">
			<span class="filter-item-label">{{item.label}}:</span>
			<span v-if="item.type == 'input'">
				<a-input v-model="item.value" :placeholder="item.placeholder"></a-input>
			</span>
			<span v-else-if="item.type == 'select'">
				<a-select v-model="item.selected" :placeholder="item.placeholder" :mode="item.multiple?'multiple':''">
					<a-select-option v-for="opt in item.options" :key="opt.name" :value="opt.value">{{opt.name}}
					</a-select-option>
				</a-select>
			</span>
			<span v-else-if="item.type == 'classify'">
				<classify-select />
			</span>
			<span v-else-if="item.type == 'datePicker'">
				<a-date-picker style="width: 256px;" v-model="item.value" :show-time="{ }"
					:placeholder="item.placeholder" />
			</span>
			<span v-else-if="item.type == 'rangePicker'">
				<a-range-picker style="width: 360px;" v-model="item.value" :placeholder="item.placeholder" />
			</span>
		</span>
		<span class="tools-btn">
			<a-button v-for="(btn,index) in tools" :type="btn.type" :key="index" :style="{
				'margin-left': index != 0?'16px':'',
				height:'40px'
			}">
				<img class="btn-icon" :src="btn.icon" width="16px" height="16px" alt="" />
				{{btn.content}}
			</a-button>
		</span>
	</div>
</template>
<script>
	export default {
		name: "filter-form",
		props: {
			form: {
				type: Object,
				default: {}
			},

			tools: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				filterForm: this.form
			}
		}
	}
</script>

<style lang="less" scoped>
	.filter-form {
		display: flex;
		// justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
		.filter-item {
			margin-bottom: 24px;
			margin-right: 88px;

			.filter-item-label {
				margin-right: 8px;
			}
		}

		/deep/ .ant-input:not(.ant-calendar-picker-input),
		.ant-select {
			width: 256px;
		}

		.tools-btn {
			margin-bottom: 24px;
			margin-right: 88px;
		}
	}
</style>
