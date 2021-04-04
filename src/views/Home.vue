<template>
	<div class="home-view">
		<a-layout>
			<a-layout-header style="background: #FFF;height: 48px; padding: 0 0; line-height: 0;">
				<div class="toggle-btn">
					<div class="btn-content">
						<span />
						<span />
						<span />
					</div>
				</div>
				<div class="app-title">
					农技课堂管理平台
				</div>
			</a-layout-header>
		</a-layout>
		<a-layout style="height: calc(100vh - 48px)">
			<a-layout-sider :width="collapsed?'60px':'208px'" v-model="collapsed" theme="light" :trigger="null" :style="{
				background: '#F5F5F5',
				width:collapsed?'60px':'208px',
				minWidth:collapsed?'60px':'208px',
				maxWidth:collapsed?'60px':'208px'
			}">
				<a-menu mode="inline" @click="menuClicked" :style="{
					width:collapsed?'60px':'208px'
				}">
					<template v-for="(menu,iindex) in menus">
						<a-menu-item v-if="menu.children.length == 0" title="" :key='menu.uri'>
							<span>
								<img class="nav-icon" :src="menu.icon" alt="">
							</span>
							<span v-if="!collapsed">{{menu.title}}</span>
						</a-menu-item>
						<a-sub-menu v-else mode="inline">
							<span slot="title">
								<img class="nav-icon" :src="menu.icon" alt="" />
								<span v-if="!collapsed">{{menu.title}}</span>
							</span>
							<a-menu-item v-for="(sub,ind) in menu.children" :key="sub.uri">{{sub.title}}</a-menu-item>
						</a-sub-menu>
					</template>
				</a-menu>
				<span class="slide-btn" @click="triggerCollapsed">
					<a-icon v-if="collapsed" type="right" />
					<a-icon v-else type="left" />
				</span>
			</a-layout-sider>
			<a-layout-content style="padding: 6px 24px;background: #FFF;">
				<a-breadcrumb>
					<a-breadcrumb-item v-for="(crumb,index) in breadcrumb" :key="crumb.uri">
						<template v-if="index == breadcrumb.length - 1 || !crumb.breadcrumb">
							{{crumb.title}}
						</template>
						<template v-else>
							<router-link :to="crumb.path">{{crumb.title}}</router-link>
						</template>
					</a-breadcrumb-item>
				</a-breadcrumb>
				<router-view />
			</a-layout-content>
		</a-layout>
	</div>
</template>

<script>
	import store from '@/store'
	export default {
		name: "Home",
		data() {
			return {
				collapsed: false,
				menus: [{
						title: "首页",
						icon: require("../assets/navicons/index.png"),
						uri: "/",
						children: []
					},
					{
						title: "直播课管理",
						icon: require("../assets/navicons/live.png"),
						children: [{
							title: "直播间管理",
							uri: "/live/room",
						}, {
							title: "直播用户管理",
							uri: "/live/user",
						}]
					},
					{
						title: "内容管理",
						icon: require("../assets/navicons/content.png"),
						children: [{
								title: "系统内容",
								uri: "/content/system",
							}, {
								title: "评价标签",
								uri: "/content/evaluateLabels",
							},
							{
								title: "留言板",
								uri: "/content/note",
							}
						]
					},
					{
						title: "信息库",
						icon: require("../assets/navicons/info.png"),
						children: [{
							title: "文章管理",
							uri: "/info/article",
						}, {
							title: "课程管理",
							uri: "/info/course",
						}]
					},
					{
						title: "审核管理",
						icon: require("../assets/navicons/audit.png"),
						children: [{
								title: "直播",
								uri: "/audit/live",
							},
							{
								title: "课程",
								uri: "/audit/course",
							},
							{
								title: "文章",
								uri: "/audit/article",
							},
							{
								title: "求助",
								uri: "/audit/help",
							},
						]
					},
					{
						title: "专家库管理",
						icon: require("../assets/navicons/expert.png"),
						uri: "/expert/lib",
						children: []
					},
					{
						title: "活动管理",
						icon: require("../assets/navicons/activity.png"),
						children: [{
							title: "线下活动管理",
							uri: "/activity/offline",
						}, ]
					},
					{
						title: "分类管理",
						icon: require("../assets/navicons/class.png"),
						children: [{
								title: "标签管理",
								uri: "/classify/labels",
							},
							{
								title: "常见问题",
								uri: "/classify/issues",
							},
						]
					},
					{
						title: "敏感词管理",
						icon: require("../assets/navicons/sensitive.png"),
						uri: "/sensitive/lib",
						children: []
					},
					{
						title: "数据管理",
						icon: require("../assets/navicons/data.png"),
						uri: "/data/lib",
						children: []
					},
				]
			};
		},
		computed: {
			breadcrumb: function() {
				const matched = this.$route.matched
				let crumbs = []
				for (let i = 0; i < matched.length; i++) {
					matched[i].meta.parent && crumbs.push({
						path: matched[i].meta.parent,
						title: matched[i].meta.parentTitle,
						breadcrumb: true
					})
					crumbs.push({
						path: matched[i].path,
						title: matched[i].meta.title,
						breadcrumb: matched[i].meta.breadcrumb
					})
				}
				return crumbs
			}
		},

		methods: {
			triggerCollapsed: function() {
				this.collapsed = !this.collapsed
			},
			menuClicked: function(data) {
				if (window.location.pathname == data.key) return
				this.$router.push({
					path: data.key
				})
			}
		}
	}
</script>

<style lang="less">
	.home-view {
		.toggle-btn {
			width: 60px;
			height: 48px;
			background-color: @themeColor;
			line-height: 48px;
			text-align: center;
			display: inline-block;
			cursor: pointer;

			.btn-content {
				width: 20px;
				display: inline-block;
			}

			span {
				height: 1px;
				background-color: #fff;
				display: block;
				margin-bottom: 6px;

				&:last-child {
					margin: 0;
				}
			}
		}

		.app-title {
			color: @themeColor;
			display: inline-block;
			font-size: 18px;
			line-height: 48px;
			height: 100%;
			font-weight: 500;
			margin-left: 15px;
		}

		.nav-icon {
			height: 16px;
			width: 16px;
			margin-right: 16px;
		}

		.slide-btn {
			position: absolute;
			top: calc(50% - 32px);
			// left: 60px;
			right: -18px;
			z-index: 9;
			padding: 0;
			border-width: 9px 0 9px 20px;
			border-color: transparent transparent transparent #ebebeb;
			background: none;
			width: 0;
			height: 64px;
			line-height: 46px;
			color: #c1c1c1;
			border-style: solid;
			cursor: pointer;

			i {
				position: relative;
				left: -15px;
				width: 12px;
			}
		}
	}
</style>
