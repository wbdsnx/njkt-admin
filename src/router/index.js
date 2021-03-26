import Vue from 'vue'
import VueRouter from 'vue-router'
//首页
const Index = () => import('@/views/index')
//404页面
const err404 = () => import('@/views/error404')

//直播间管理
const LiveRoom = () => import('@/views/live/room')
const LiveUser = () => import('@/views/live/user')

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

const routes = [
	//首页
	{
		path: '/',
		component: Index,
		meta: {
			title: '首页'
		}
	},
	//404页面
	{
		path: '/error404',
		component: err404,
		meta: {
			title: '404'
		}
	},
	//直播间管理
	{
		path: '/live',
		children: [{
				path: '/room',
				component: LiveRoom,
				meta: {
					title: '直播间管理'
				}
			},
			{
				path: '/user',
				component: LiveUser,
				meta: {
					title: '直播用户管理'
				},
			}
		]
	},
	//内容管理
	{
		path: '/content',
		children: [{
				path: '/system',
				component: ContentSystem,
				meta: {
					title: '系统内容'
				}
			},
			{
				path: '/evaluateLabels',
				component: ContentEvaluateLabels,
				meta: {
					title: '评价标签'
				}
			},
			{
				path: '/note',
				component: ContentNote,
				meta: {
					title: '留言板'
				}
			},
		]
	},
	//信息库管理
	{
		path: '/info',
		children: [{
				path: '/article',
				component: InfoArticle,
				meta: {
					title: '文章管理'
				}
			},
			{
				path: '/course',
				component: InfoCourse,
				meta: {
					title: '课程管理'
				}
			}
		]

	},
	//审核管理
	{
		path: 'audit',
		children: [{
				path: '/live',
				component: AuditLive,
				meta: {
					title: '直播审核'
				}
			},
			{
				path: '/course',
				component: AuditCourse,
				meta: {
					title: '课程审核'
				}
			},
			{
				path: '/article',
				component: AuditArticle,
				meta: {
					title: '文章审核'
				}
			},
			{
				path: '/help',
				component: AuditHelp,
				meta: {
					title: '求助审核'
				}
			}
		]
	},
	//专家库管理
	{
		path: "/expert",
		children: [{
			path: '/lib',
			component: ExpertLib,
			meta: {
				title: '专家库管理'
			}
		}]
	},

	//活动管理
	{
		path: '/activity',
		children: [{
			path: '/offline',
			component: ActivityOffline,
			meta: {
				title: '线下活动管理'
			}
		}]
	},
	//分类管理
	{
		path: '/classify',
		children: [{
				path: '/labels',
				component: ClassifyLabels,
				meta: {
					title: '标签管理'
				}
			},
			{
				path: '/issues',
				component: ClassifyIssues,
				meta: {
					title: '常见问题'
				}
			}
		]
	},
	//敏感词管理
	{
		path: "/sensitive",
		children: [{
			path: '/lib',
			component: ExpertLib,
			meta: {
				title: '敏感词管理'
			}
		}]
	},
	{
		path: "/data",
		children: [{
			path: '/lib',
			component: DataLib,
			meta: {
				title: '数据管理'
			}
		}]
	},

]


const router = new VueRouter({
	routes,
	mode: 'history',
	base: process.env.BASE_URL,
})

export default router
