/* eslint-disable */
// 时间格式化
import timeFormat from '../function/timeFormat.js'

// 时间戳格式化,返回多久之前
import timeFrom from '../function/timeFrom.js'

// oss文件地址拼接
import ossPath from '../function/ossPath.js'

export default {
  timeFormat,
  timeFrom,
  ossImg: ossPath.ossImg,
  ossImgPad: ossPath.ossImgPad,
  ossComplete: ossPath.ossComplete
}
