function column(title, key, width, fixed, ellipsis) {
	return {
		title: title,
		dataIndex: key,
		key: key,
		width: width,
		ellipsis: ellipsis,
		fixed: fixed,
		scopedSlots: {
			customRender: key
		}
	}
}
export default column
