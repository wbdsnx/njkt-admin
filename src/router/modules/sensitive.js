//敏感词管理
const SensitiveLib = () => import('@/views/sensitive/lib')

export default [
	//敏感词管理
	{
		path: "/sensitive/lib",
		component: SensitiveLib,
		meta: {
			title: '敏感词管理',
			breadcrumb: true
		}
	},
]