//首页
const Index = () => import('@/views/index')
const UserData = () => import('@/views/index/user-data')


//404页面
const err404 = () => import('@/views/error404')

export default [
	//首页
	{
		path: '/',
		component: Index,
		meta: {
			title: '首页',
			//面包屑是否可以点击
			breadcrumb: false
		},
		children: [{
			path: 'userData',
			component: UserData,
			meta: {
				title: '用户数据',
				breadcrumb: true
			}
		}]
	},
	//404页面
	{
		path: '/err404',
		component: err404,
	},
]
