import appConfig from '@/config/apiConfig'
import test from './test'
const { ossUrl } = appConfig[process.env.VUE_APP_ENV ? process.env.VUE_APP_ENV : 'dev']
/**
 * 带oss fill 参数  //https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1646.6cdc4ecd3OcN7r
 */
function ossImg(value, width, height) {
  if (!value) return ''
  // 如果是绝对路径 直接返回
  if (test.url(value)) return value
  // 设置默认宽高
  if (width == undefined) width = 100
  if (height == undefined) height = width
  return `${ossUrl}${value}?x-oss-process=image/resize,m_fill,w_${width},h_${height}`
}

/**
 * 带oss pad 参数  //https://help.aliyun.com/document_detail/44688.html?spm=a2c4g.11186623.6.1646.6cdc4ecd3OcN7r
 */
function ossImgPad(value, width, height) {
  if (!value) return ''
  if (test.url(value)) return value
  if (width == undefined) width = 100
  if (height == undefined) height = width
  return `${ossUrl}${value}?x-oss-process=image/resize,m_pad,w_${width},h_${height}`
}

/**
 * 不带oss参数
 */
function ossComplete(value) {
  if (!value) return ''
  if (test.url(value)) return value
  return `${ossUrl}${value}`
}

export default {
  ossImg,
  ossImgPad,
  ossComplete
}
