<template>
	<div class="content-box">
		<div class="half left">
			<div class="line-1">
				<img width="42px" height="42px" src="@/assets/icons/users-icon.png" alt="" />
				<span class="num-label">用户数</span>
			</div>
			<div class="line-2">
				{{chartData.usersNum}}
			</div>
			<div class="line-3">
				<span class="label">本周新增用户</span>
				<span class="num">{{chartData.usersIncreByWeek}}</span>
				<a-progress style="width: 104px;" class="progress" stroke-color="#6395F9" :stroke-width="4"
					:percent="30" :show-info="false" />
			</div>
			<div class="line-4">
				<span class="label">本月新增用户</span>
				<span class="num">{{chartData.usersIncreByMonth}}</span>
				<a-progress style="width: 104px;" class="progress" stroke-color="#FFBE00" :stroke-width="4"
					:percent="25" :show-info="false" />
			</div>
		</div>
		<div class="half right">
			<div class="line-1">
				<img width="42px" height="42px" src="@/assets/icons/experts-icon.png" alt="" />
				<span class="num-label">专家数</span>
			</div>
			<div class="line-2">
				{{chartData.expertsNum}}
			</div>
			<div class="line-3">
				<span class="label">本周新增专家</span>
				<span class="num">{{chartData.usersIncreByWeek}}</span>
				<a-progress style="width: 104px;" class="progress" stroke-color="#6395F9" :stroke-width="4"
					:percent="65" :show-info="false" />
			</div>
			<div class="line-4">
				<span class="label">本月新增专家</span>
				<span class="num">{{chartData.usersIncreByMonth}}</span>
				<a-progress style="width: 104px;" class="progress" stroke-color="#FFBE00" :stroke-width="4"
					:percent="45" :show-info="false" />
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'chart-1',
		props: {
			chartData: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="less" scoped>
	.content-box {
		display: flex;
		flex-direction: row;
		padding-top: 40px;
		width: 580px;
		padding-right: 0;
		height: 240px;
		.half {
			width: 50%;

			.line-1 {
				align-items: center;
			}

			&.left>.line-2 {
				color: #FF6A00;
			}

			&.right>.line-2 {
				color: #20BF8E;
			}

			.line-2 {
				font-size: 24px !important;
				font-weight: bold;
				margin-top: 5px;
				// color: #FF6A00;
				line-height: 33px;
			}

			.line-3 {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-top: 19px;

				.label {

					color: rgba(51, 51, 51, 0.45);
					margin-right: 8px;
				}

				.num {
					font-size: 18px !important;
					width: 29px;
					color: #6395F9;
					margin-right: 8px;
				}
			}

			.line-4 {
				margin-top: 20px;
				display: flex;
				flex-direction: row;
				align-items: center;

				.label {

					color: rgba(51, 51, 51, 0.45);
					margin-right: 8px;
				}

				.num {
					width: 29px;
					font-size: 18px !important;
					color: #FFBE00;
					margin-right: 8px;
				}
			}

		}
	}
</style>
