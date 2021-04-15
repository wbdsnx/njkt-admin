//分类管理
const ClassifyIndex = () => import('@/views/classify/index')
const ClassifyLabels = () => import('@/views/classify/labels')
const ClassifyIssues = () => import('@/views/classify/issues')

export default [
	//分类管理
	{
		path: '/classify',
		meta: {
			title: "分类管理",
			breadcrumb: false
		},
		component: ClassifyIndex,
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
]