//数据管理
const DataIndex = () => import('@/views/data/index')
const DataExpert = () => import('@/views/data/expert')
const DataLive = () => import('@/views/data/live')
const DataArticle = () => import('@/views/data/article')
const DataCourse = () => import('@/views/data/course')
const DataHelp = () => import('@/views/data/help')



export default [
	{
		path: "/data",
		component: DataIndex,
		meta: {
			title: '数据管理',
			breadcrumb: true
		},
		children:[
			{
				path: "expert",
				component: DataExpert,
				meta: {
					title: '专家数据汇总',
					breadcrumb: true
				},
			},
			{
				path: "live",
				component: DataLive,
				meta: {
					title: '直播数据汇总',
					breadcrumb: true
				},
			},
			{
				path: "article",
				component: DataArticle,
				meta: {
					title: '文章数据汇总',
					breadcrumb: true
				},
			},
			{
				path: "course",
				component: DataCourse,
				meta: {
					title: '课程数据汇总',
					breadcrumb: true
				},
			},
			{
				path: "help",
				component: DataHelp,
				meta: {
					title: '求助数据汇总',
					breadcrumb: true
				},
			}
		]
	},
]