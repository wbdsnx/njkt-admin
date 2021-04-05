<template>
	<div id="live-room-add-or-edit">
		<page-header></page-header>
		<div class="content-box">
			<a-form-model ref="ruleForm" :model="form" :rule="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-form-model-item label="名称" prop="name"
				>
					<a-input style="width: 352px;" :model="form.name" placeholder="请输入直播间名称" />
				</a-form-model-item>
				<a-form-model-item label="分类" prop="classify">
					<classify-select width="352px" />
				</a-form-model-item>
				<a-form-model-item label="直播封面" prop="cover">
					<upload />
				</a-form-model-item>
			</a-form-model>

		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				labelCol: {
					span: 2
				},
				wrapperCol: {
					span: 6
				},
				form: {
					name: '',
					classify: '',
					cover: ''
				},

				rules: {}
			}
		}
	}
</script>

<style lang="less">
	// /deep/ .ant-form-item{
	// 	margin-bottom: 16px;
	// }
</style>
