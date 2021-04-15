//专家库管理
const ExpertLib = () => import('@/views/expert/lib')

export default [
	//专家库管理
	{
		path: "/expert/lib",
		component: ExpertLib,
		meta: {
			title: '专家库管理',
			breadcrumb: true
		}
	},
]