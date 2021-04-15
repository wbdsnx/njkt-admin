//活动管理
const ActivityOffline = () => import('@/views/activity/offline')

export default [
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
]