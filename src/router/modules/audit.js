//审核管理
const AuditLive = () => import('@/views/audit/live')
const AuditCourse = () => import('@/views/audit/course')
const AuditArticle = () => import('@/views/audit/article')
const AuditHelp = () => import('@/views/audit/help')

export default [
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
]