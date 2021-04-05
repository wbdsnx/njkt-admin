import Vue from 'vue'
import VueRouter from 'vue-router'
//首页
const Index = () => import('@/views/index')
//404页面
const err404 = () => import('@/views/error404')

//直播间管理
import LiveRoom from '@/views/live/room/index'
const LiveUser = () => import('@/views/live/user')
const addOrEditLive = () => import('@/views/live/room/addOrEdit')
const LiveStatistics = () => import('@/views/live/room/statistics')
const LiveDetail = () => import('@/views/live/room/detail')


//内容管理
const ContentSystem = () => import('@/views/content/system')
const ContentEvaluateLabels = () => import('@/views/content/evaluate-labels')
const ContentNote = () => import('@/views/content/note')

//信息库
const InfoArticle = () => import('@/views/info/article')
const InfoCourse = () => import('@/views/info/course')

//审核管理
const AuditLive = () => import('@/views/audit/live')
const AuditCourse = () => import('@/views/audit/course')
const AuditArticle = () => import('@/views/audit/article')
const AuditHelp = () => import('@/views/audit/help')

//专家库管理
const ExpertLib = () => import('@/views/expert/lib')

//活动管理
const ActivityOffline = () => import('@/views/activity/offline')

//分类管理
const ClassifyLabels = () => import('@/views/classify/labels')
const ClassifyIssues = () => import('@/views/classify/issues')

//敏感词管理
const SensitiveLib = () => import('@/views/sensitive/lib')

//数据管理
const DataLib = () => import('@/views/data/lib')

Vue.use(VueRouter)
console.log(LiveRoom)
import store from '@/store'


const templateX = {
	template: '<router-view />'
}
const routes = [
	//首页
	{
		path: '/',
		component: Index,
		meta: {
			title: '首页',
			//面包屑是否可以点击
			breadcrumb: true
		}
	},
	//404页面
	{
		path: '/err404',
		component: err404,
	},

	//直播间管理
	{
		path: '/live',
		meta: {
			title: "直播课管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
				path: 'room',
				component: LiveRoom,
				meta: {
					title: '直播间管理',
					breadcrumb: true
				},
				children: [{
						path: 'detail',
						component: LiveDetail,
						meta: {
							title: '查看',
							breadcrumb: true
						},
					},
					{
						path: 'add',
						component: addOrEditLive,
						meta: {
							title: '添加直播间',
							breadcrumb: true
						},
					},
					{
						path: 'edit',
						component: addOrEditLive,
						meta: {
							title: '编辑直播间',
							breadcrumb: true
						},
					},
					{
						path: 'statistics',
						component: LiveStatistics,
						meta: {
							title: '直播间数据',
							breadcrumb: true
						},
					},
				]
			},
			{
				path: 'user',
				component: LiveUser,
				meta: {
					title: '直播用户管理',
					breadcrumb: true
				},
			},
		]
	},
	//内容管理
	{
		path: '/content',
		meta: {
			title: "内容管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
				path: 'system',
				component: ContentSystem,
				meta: {
					title: '系统内容',
					breadcrumb: true
				}
			},
			{
				path: 'evaluateLabels',
				component: ContentEvaluateLabels,
				meta: {
					title: '评价标签',
					breadcrumb: true,
				}
			},
			{
				path: 'note',
				component: ContentNote,
				meta: {
					title: '留言板',
					breadcrumb: true
				}
			},
		]
	},
	//信息库管理
	{
		path: '/info',
		meta: {
			title: "信息库管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
				path: 'article',
				component: InfoArticle,
				meta: {
					title: '文章管理',
					breadcrumb: true
				}
			},
			{
				path: 'course',
				component: InfoCourse,
				meta: {
					title: '课程管理',
					breadcrumb: true
				}
			}
		]
	},
	//审核管理
	{
		path: '/audit',
		meta: {
			title: "审核管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
				path: 'live',
				component: AuditLive,
				meta: {
					title: '直播审核',
					breadcrumb: true
				}
			},
			{
				path: 'course',
				component: AuditCourse,
				meta: {
					title: '课程审核',
					breadcrumb: true
				}
			},
			{
				path: 'article',
				component: AuditArticle,
				meta: {
					title: '文章审核',
					breadcrumb: true
				}
			},
			{
				path: 'help',
				component: AuditHelp,
				meta: {
					title: '求助审核',
					breadcrumb: true
				}
			}
		]
	},
	//专家库管理
	{
		path: "/expert/lib",
		component: ExpertLib,
		meta: {
			title: '专家库管理',
			breadcrumb: true
		}
	},

	//活动管理
	{
		path: '/activity',
		meta: {
			title: "活动管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
			path: 'offline',
			component: ActivityOffline,
			meta: {
				title: '线下活动管理',
				breadcrumb: true
			}
		}]
	},
	//分类管理
	{
		path: '/classify',
		meta: {
			title: "分类管理",
			breadcrumb: false
		},
		component: {
			render: (e) => e("router-view")
		},
		children: [{
				path: 'labels',
				component: ClassifyLabels,
				meta: {
					title: '标签管理',
					breadcrumb: true
				}
			},
			{
				path: 'issues',
				component: ClassifyIssues,
				meta: {
					title: '常见问题',
					breadcrumb: true
				}
			}
		]
	},
	//敏感词管理
	{
		path: "/sensitive/lib",
		component: SensitiveLib,
		meta: {
			title: '敏感词管理',
			breadcrumb: true
		}
	}, {
		path: "/data/lib",
		component: DataLib,
		meta: {
			title: '数据管理',
			breadcrumb: true
		}

	},

]

const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
})


router.beforeEach((to, from, next) => {
	console.log(to)
	if (to.matched.length != 0) {
		store.commit('setCurrentPath', to.path)
		window.document.title = to.meta.title || '农技课堂'
		next()
	} else {
		window.document.title = '农技课堂'
		next({
			path: '/err404'
		})
	}
})

console.log(router.history)

export default router
