<template>
	<div v-if="type == 'picture'">
		<div class="file-upload-div">
			<a-upload name="file"
			 action=""
			 list-type="picture-card" class="file-upload" :show-upload-list="false" action=""
				:before-upload="beforeUpload" @change="handleChange">
				<img v-if="imageUrl" :src="imageUrl" alt="" />
				<div v-else>
					<a-icon :type="loading ? 'loading' : 'plus'"
						:style="{width:'30px',height:'30px','font-size':'30px'}" />
					<div class="ant-upload-text">
						{{loading?'上传中':'上传'}}
					</div>
				</div>
			</a-upload>
			<div class='tips'>
				附件格式：支持JPG,PNG，文件小于5M <br />建议尺寸：此处上传的图片可能会用于消费者扫描查看商品溯源信息的H5页面，
				<br />建议上传的图片尺寸为750*370像素，尺寸不匹配时，图片将被压缩或拉伸铺满画面。
			</div>
		</div>
	</div>
	<div v-else-if="type == 'file'">
		<a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" :transform-file="transformFile">
			<a-button>
				<a-icon type="upload" /> {{content}}
			</a-button>
		</a-upload>
		<div class="tips">支持扩展名：.rar .zip .doc .docx .pdf .jpg...</div>
	</div>
</template>

<script>
	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	export default {
		name: 'upload',
		props: {
			type: {
				type: String,
				default: "picture"
			},
			content:{
				type:String,
				default: ''
			}
		},
		data() {
			return {
				loading: false,
				imageUrl: '',
			}
		},
		methods: {
			handleChange(info) {
				if (info.file.status === 'uploading') {
					this.loading = true;
					return;
				}
				if (info.file.status === 'done') {
					// Get this url from response in real world.
					getBase64(info.file.originFileObj, imageUrl => {
						this.imageUrl = imageUrl;
						this.loading = false;
					});
				}
			},
			beforeUpload(file) {
				const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
				if (!isJpgOrPng) {
					this.$message.error('You can only upload JPG file!');
				}
				const isLt2M = file.size / 1024 / 1024 < 2;
				if (!isLt2M) {
					this.$message.error('Image must smaller than 2MB!');
				}
				return isJpgOrPng && isLt2M;
			},

			transformFile(file) {
				return new Promise(resolve => {
					const reader = new FileReader();
					reader.readAsDataURL(file);
					reader.onload = () => {
						const canvas = document.createElement('canvas');
						const img = document.createElement('img');
						img.src = reader.result;
						img.onload = () => {
							const ctx = canvas.getContext('2d');
							ctx.drawImage(img, 0, 0);
							ctx.fillStyle = 'red';
							ctx.textBaseline = 'middle';
							ctx.fillText('Ant Design', 20, 20);
							canvas.toBlob(resolve);
						};
					};
				});
			},
		}
	}
</script>

<style lang="less">
	.file-upload>.ant-upload {
		margin-top: 14px;
		margin-bottom: 0;
		width: 110px;
		height: 110px;
		font-size: 30px;
		background: #FFF;
	}

</style>
