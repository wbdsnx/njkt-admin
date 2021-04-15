<template>
	<div class="content-box">
		<div class="half top">
			<div class="head">
				<div class="head-icon"></div>
				<span class="label-title">课程</span>
			</div>
			<div class="line-1">
				<div class="label">今日评论数</div>
				<a-progress :percent="37.5" :stroke-width="4" stroke-color="#20BF8E" style="width: 374px;"
					:show-info="false" />
				<span class="info">{{chartData.course.todayComments}}/1000</span>
			</div>
			<div class="line-2">
				<span class="label">今日评价数</span>
				<a-progress :percent="43.3" :stroke-width="4" stroke-color="#20BF8E" style="width: 374px;"
					:show-info="false" />
				<span class="info">{{chartData.course.todayEvaluates}}/1000</span>
			</div>
		</div>
		<div class="half bottom">
			<div class="head">
				<div class="head-icon"></div>
				<span class="label-title">文章</span>
			</div>
			<div class="line-1">
				<span class="label">今日评论数</span>
				<a-progress :percent="17.5" :stroke-width="4" stroke-color="#FF6A00" style="width: 374px;"
					:show-info="false" />
				<span class="info">{{chartData.article.todayComments}}/1000</span>
			</div>
			<div class="line-2">
				<span class="label">今日评价数</span>
				<a-progress :percent="24.5" :stroke-width="4" stroke-color="#FF6A00" style="width: 374px;"
					:show-info="false" />
				<span class="info">{{chartData.article.todayComments}}/1000</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chart-2',
		props: {
			chartData: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="less" scoped>
	.content-box {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 240px;
		padding-right: 0;
		width: 580px;

		.half {
			.head {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			&.top>.head>.head-icon {
				background: #20BF8E;
			}

			&.bottom>.head>.head-icon {
				background: @themeColor;
			}
			

			.head-icon {
				width: 4px;
				height: 14px;
				margin-right: 6px;
			}

			.label-title {
				font-weight: 500;
				color: #333333;
			}

			.line-1,
			.line-2 {
				margin-top: 9px;
				display: flex;
				flex-direction: row;
				align-items: center;

				.label {
					margin-right: 12px;
					color: rgba(51, 51, 51, 0.45);
				}
				
				.info {
					margin-left: 12px;
					color: rgba(51, 51, 51, 0.45);
				}
			}
		}
	}
</style>
