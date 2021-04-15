import { POST, ApiUrl, GET, PUT } from '@/config/index'
// 角色列表
const rolesList = POST(`${ApiUrl}/gateway/api/backapp/system/role/action/listPage`)
// 禁用角色
const roleLock = userId => GET(`${ApiUrl}/gateway/api/backapp/system/role/action/${userId}/lock`)()
// 启用角色
const roleunLock = userId => GET(`${ApiUrl}/gateway/api/backapp/system/role/action/${userId}/unlock`)()
const getFunctionTree = POST(`${ApiUrl}/gateway/api/backapp/system/role/action/getFunctionTree`)
const getRoleDetail = id => GET(`${ApiUrl}/gateway/api/backapp/system/role/${id}`)()
const addRole = POST(`${ApiUrl}/gateway/api/backapp/system/role/`)
const editRole = PUT(`${ApiUrl}/gateway/api/backapp/system/role/`)
export default {
  rolesList: rolesList,
  roleLock: roleLock,
  roleunLock: roleunLock,
  getFunctionTree: getFunctionTree,
  getRoleDetail: getRoleDetail,
  addRole: addRole,
  editRole: editRole
}
