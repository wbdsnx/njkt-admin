//信息库
const InfoArticle = () => import('@/views/info/article')
const InfoCourse = () => import('@/views/info/course')

export default [
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
]