import { message } from 'ant-design-vue'
import axios from 'axios'
/**
 * @param {*} error 后端返回的错误信息
 * @param {string} msg  前端自定义错误信息
 */
function errorMsg(error, msg) {
  if (axios.isCancel(error)) {
    console.log('取消请求')
  } else {
    if (typeof error == 'string') {
      message.warning({ content: error })
    } else {
      message.warning({ content: msg || '请求失败,请稍后重试' })
    }
  }
}
export default errorMsg
