<template>
	<a-upload name="file" list-type="picture-card" class="file-upload" :show-upload-list="false"
		action="" :before-upload="beforeUpload" @change="handleChange">
		<img v-if="imageUrl" :src="imageUrl" alt="" />
		<div v-else>
			<a-icon :type="loading ? 'loading' : 'plus'"  :style="{width:'30px',height:'30px','font-size':'30px'}"/>
			<div class="ant-upload-text">
				上传
			</div>
		</div>
	</a-upload>
</template>

<script>
	function getBase64(img, callback) {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	}

	export default {
		name: 'upload',
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
		}
	}
</script>

<style lang="less">
	
	.file-upload>.ant-upload {
		margin-top: 14px;
		width: 110px;
		height: 110px;
		font-size: 30px;
		background: #FFF;
	}
	 
</style>
