<template>
	<div class="editor">
		<!-- 富文本编辑器 -->
		<Editor id="tinymce" v-model="articleContent" :init="editorInit" :key="tinymceFlag"></Editor>
	</div>
</template>
<script>
	import tinymce from 'tinymce/tinymce'
	import Editor from '@tinymce/tinymce-vue'
	import 'tinymce/themes/silver'
	import 'tinymce/plugins/textcolor'
	import 'tinymce/plugins/advlist'
	import 'tinymce/plugins/table'
	import 'tinymce/plugins/lists'
	import 'tinymce/plugins/paste'
	import 'tinymce/plugins/preview'
	import 'tinymce/plugins/fullscreen'
	import 'tinymce/plugins/save'
	import 'tinymce/plugins/image'
	import 'tinymce/icons/default/icons'

	export default {
		name: 'editor',
		components: {
			Editor
		},
		data() {
			return {
				tinymceFlag: 1,
				editorInit: {
					language_url: '/tinymce/zh_CN.js',
					language: 'zh_CN',
					skin_url: '/tinymce/skins/ui/oxide',
					height: 192,
					browser_spellcheck: true, // 拼写检查
					branding: false, // 去水印
					elementpath: false, // 禁用编辑器底部的状态栏
					statusbar: false, // 隐藏编辑器底部的状态栏
					paste_data_images: true, // 允许粘贴图像
					menubar: false, // 隐藏最上方menu
					plugins: 'save advlist table lists paste preview fullscreen image',
					toolbar: 'fontselect fontsizeselect forecolor backcolor bold italic underline strikethrough save image| alignleft aligncenter alignright alignjustify | quicklink h2 h3 blockquote table numlist bullist preview fullscreen',
					images_upload_handler: function(blobInfo, success, failure) {
						// var formData
						// var file = blobInfo.blob() // 转化为易于理解的file对象
						// formData = new FormData()
						// formData.append('file', file, file.name) // 此处与源文档不一样
						// appRequestFile('/upload/simple?moudle=cms', formData, 'post').then((res) => {
						//   success(res.data.data.filePath)
						// })
					},
					paste_preprocess: function(plugin, args) {
						console.log('---paster')
					}
				},
				articleContent: '123123',
			}
		},
		mounted() {
			var self = this
			tinymce.init({})
		},
		activated() {
			this.tinymceFlag++
		},
		watch:{
			articleContent(val){
				console.log(tinymce.activeEditor.getContent())
			}
		},
		methods: {
			submit() {
				this.$refs.detailFormAdd.validate((valid) => {
					if (valid) {
						appRequestFormData('/sys/cms/save', qs.stringify(this.detailFormAdd), 'post').then((
							res) => {
							this.$message(res.data.msg)
							this.$router.go(-1)
						})
					} else {
						this.$message({
							type: 'error',
							message: '请完整表单信息'
						})
						return false
					}
				})
			},
			cancel() {
				this.$confirm('确定要取消吗？', '确定取消', {
						type: 'warning'
					})
					.then(() => {
						this.$router.go(-1)
					})
			}
		},
	}
</script>

<style lang="less">
	.editor {
		margin-top: 8px;
	}
</style>
