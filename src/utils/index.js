// 深度克隆
import deepClone from './function/deepClone'

// 对象合并
import deepMerge from './function/deepMerge'

// 时间格式化
import timeFormat from './function/timeFormat'

// 时间戳格式化,返回多久之前
import timeFrom from './function/timeFrom'

// 规则检验
import test from './function/test'

// 防抖
import debounce from './function/debounce'

// 节流
import throttle from './function/throttle.js'

// oss文件路径拼接
import ossPath from './function/ossPath'

// 接口失败统一提示
import errorMsg from './function/errorMsg'

// 根据菜单ID 获取列表筛选条件和操作按钮
import getActions from './premession/getStore'

// 组件筛选条件的传值
import formatterSelectParam from './function/formatterSelectParam.js'

export default {
  deepClone,
  deepMerge,
  timeFormat,
  timeFrom,
  debounce,
  throttle,
  test,
  ossPath,
  errorMsg,
  getActions,
  formatterSelectParam
}
