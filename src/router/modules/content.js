//内容管理
const ContentSystem = () => import('@/views/content/system')
const ContentEvaluateLabels = () => import('@/views/content/evaluate-labels')
const ContentNote = () => import('@/views/content/note')

export default [
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
]