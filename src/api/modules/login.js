import { GET, POST, ApiUrl } from '@/config/index'
// 登录
// 获取功能菜单
const getValidate = GET(`${ApiUrl}/gateway/api/backapp/system/validate/`)
const login = POST(`${ApiUrl}/gateway/api/backapp/system/users/action/login`)
const loginOut = GET(`${ApiUrl}/gateway/api/backapp/system/users/action/logout`)
export default {
  getValidate: getValidate,
  login: login,
  loginOut: loginOut
}
