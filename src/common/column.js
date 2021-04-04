
function column(title, key, width) {
	return {
		title: title,
		dataIndex: key,
		key: key,
		width: width,
		ellipsis: true,
		scopedSlots: {
			customRender: key
		}
	}
}
export default column

