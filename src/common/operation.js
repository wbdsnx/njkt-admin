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
	confirm: undefined,
	type: 'danger',
	title: "下架",
	action: data => {
		console.log(data)
	}
}
//删除
const remove = {
	confirm: undefined,
	title: "删除",
	type: 'danger',
	action: index => {
		console.log(index)
	}
}

//拉黑
const block = {
	confirm: undefined,
	title: "拉黑",
	type: 'danger',
	action: index => {
		console.log(index)
	}
}

//踢出
const kickOut = {
	confirm: undefined,
	title: "踢出",
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
	remove,
	block,
	kickOut
}
