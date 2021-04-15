//直播间管理
const LiveIndex = () => import('@/views/live/index')
const LiveRoom = () => import('@/views/live/room/index')

const LiveUser = () => import('@/views/live/user')
const addOrEditLive = () => import('@/views/live/room/addOrEdit')
const LiveStatistics = () => import('@/views/live/room/statistics')
const LiveDetail = () => import('@/views/live/room/detail')


export default [
	//直播间管理
	{
		path: '/live',
		meta: {
			title: "直播课管理",
			breadcrumb: false
		},
		component: LiveIndex,
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
	}
]