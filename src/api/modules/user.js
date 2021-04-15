import { POST, GET, ApiUrl } from '@/config/index'
// 账号列表
const userList = POST(`${ApiUrl}/gateway/api/backapp/system/users/action/listPage`)
// 获取单个账号信息
const userDetail = id => GET(`${ApiUrl}/gateway/api/backapp/system/users/${id}`)()
// 修改账号信息
const modifyUser = POST(`${ApiUrl}/gateway/api/backapp/system/users/action/modifyUser`)
const addUser = POST(`${ApiUrl}/gateway/api/backapp/system/users/`)
// 修改密码
const modifyPassword = POST(`${ApiUrl}/gateway/api/backapp/system/users/action/modifyPassword`)
// 禁用账户
const lockUser = userId => GET(`${ApiUrl}/gateway/api/backapp/system/users/action/${userId}/lock`)()
// 启用账户
const unLockUser = userId => GET(`${ApiUrl}/gateway/api/backapp/system/users/action/${userId}/unlock`)()
// 获取当前角色系统权限
const getSystems = id => GET(`${ApiUrl}/gateway/api/backapp/system/users/systems/${id}`)()
export default {
  userList: userList,
  userDetail: userDetail,
  modifyUser: modifyUser,
  modifyPassword: modifyPassword,
  addUser: addUser,
  unLockUser: unLockUser,
  lockUser: lockUser,
  getSystems: getSystems
}
