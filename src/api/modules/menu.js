import { GET, ApiUrl } from '@/config/index'
// 登录
// 获取功能菜单
export const getFunctionsList = GET(`${ApiUrl}/gateway/api/backapp/system/users/actions/funcActions/1`)
export const fieldAndOperations = functionId =>
  GET(`${ApiUrl}/gateway/api/backapp/system/users/action/fieldAndOperations/${functionId}`)()
export default {
  getFunctionsList: getFunctionsList,
  fieldAndOperations: fieldAndOperations
}
