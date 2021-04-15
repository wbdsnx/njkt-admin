import { GET, ApiUrl, POST, DELETE, PUT } from '@/config/index'
// 品类
const categoryData = GET(`${ApiUrl}/gateway/api/backapp/system/category/action/queryTree`)
const dictData = POST(`${ApiUrl}/gateway/api/backapp/system/dict/action/queryList`)
const deleteDict = id => DELETE(`${ApiUrl}/gateway/api/backapp/system/dict/${id}`)()
const addDict = POST(`${ApiUrl}/gateway/api/backapp/system/dict/`)
const editDict = PUT(`${ApiUrl}/gateway/api/backapp/system/dict/`)
const getDictChildren = id => GET(`${ApiUrl}/gateway/api/backapp/system/dict/action/getByParentId/${id}`)()
export default {
  categoryData: categoryData,
  dictData: dictData,
  deleteDict: deleteDict,
  addDict: addDict,
  editDict: editDict,
  getDictChildren: getDictChildren
}
