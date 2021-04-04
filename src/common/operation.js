//详情
const detail = {
	title: '查看',
	action: undefined
}

//数据
const statistics = {
	title: "数据",
	action: undefined
}

//编辑
const edit = {
	title: "编辑",
	action: undefined
}
//下架
const offShelf = {
	name: undefined,
	confirm: true,
	type: 'danger',
	title: "下架",
	action: data => {
		console.log(data)
	}
}
//删除
const remove = {
	name: undefined,
	confirm: true,
	title: "删除",
	type: 'danger',
	action: index => {
		console.log(index)
	}
}

module.exports = {
	detail,
	statistics,
	edit,
	offShelf,
	remove
}
