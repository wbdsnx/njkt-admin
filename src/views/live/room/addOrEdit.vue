<template>
	<div id="live-room-add-or-edit">
		<page-header />
		<div class="content-box">
			<a-form-model ref="ruleForm" :model="form" :rules="rules" :label-col="labelCol" :wrapper-col="wrapperCol">
				<a-form-model-item ref="name" label="名称" prop="name">
					<a-input style="width: 352px;" v-model="form.name" placeholder="请输入直播间名称" />
				</a-form-model-item>
				<a-form-model-item label="分类" prop="classify">
					<classify-select width="352px" v-model="form.classify" />
				</a-form-model-item>
				<a-form-model-item label="直播封面" prop="cover">
					<upload />
				</a-form-model-item>
				<a-form-model-item label="开始时间" prop="startTime">
					<a-date-picker style="width: 352px;" v-model="form.startTime" 
					:show-time="{ }"
					placeholder="请选择开始时间" />
				</a-form-model-item>
				<a-form-model-item label="直播时长" prop="liveTimeLength">
					<a-select style="width: 352px;" placeholder="请选择直播时长"></a-select>
				</a-form-model-item>
				<a-form-model-item label="选择教授" prop="expert">
					<a-select style="width: 352px;" placeholder="请选择教授"></a-select>
				</a-form-model-item>
				<a-form-model-item label="添加课件" prop="expert">
					<upload type="file" content="添加课件" />
				</a-form-model-item>
				<a-form-model-item label="添加至课程" prop="addToCourse">
					<radio :options="radioOptions" tips="如果选择是，则默认直播添加至课程" />
				</a-form-model-item>
				<a-form-model-item label="简介" prop="briefInfo">
					<editor />
				</a-form-model-item>
			</a-form-model>
		</div>
		<div class="tools">
			<a-button class="btn-primary close-btn" @click="onReset">
				<img class="btn-icon" width="16px" height="16px" src="@/assets/icons/cancel.png" alt="" />
				关闭
			</a-button>
			<a-button type="primary" class="btn-primary" @click="onSubmit">
				<img class="btn-icon" width="16px" height="16px" src="@/assets/icons/save.png" alt="" />
				保存
			</a-button>
		</div>
	</div>
</template>

<script>
	const radioOptions = [{
			label: "是",
			value: 1
		},
		{
			label: "否",
			value: 0
		},
	]

	export default {
		data() {
			return {
				labelCol: {
					span: 2
				},
				wrapperCol: {
					span: 14
				},
				radioOptions,
				form: {
					name: '',
					classify: '',
					cover: '',
					startTime: '',
					liveTimeLength: '',
					expert: '',
					addToCourse: 1,
					briefInfo: '',
				},
				rules: {
					name: [{
							required: true,
							message: '请输入直播间名称',
							trigger: 'blur'
						},
						{
							min: 3,
							max: 20,
							message: '长度应该在 3 - 20 之间',
							trigger: 'blur'
						},
					]
				}
			}
		},
		methods: {
			onSubmit() {
				this.$refs.ruleForm.validate(valid => {
					return false;
				})
				this.$router.back()
			},
			onReset() {
				this.$refs.ruleForm.resetFields();
			}
		}
	}
</script>

<style lang="less">
	.content-box {
		padding-bottom: 24px;
	}

	.tools {
		text-align: center;
		margin: 16px auto;

		.close-btn {
			margin-right: 16px;
		}
	}
</style>
