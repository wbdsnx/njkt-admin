import store from '@/store'
import Api from '@/api'
import { getFilterList } from './action'
export default async function getActions(onlyAction, id) {
  try {
    const meta = store.getters.meta
    const metaId = meta.id || id
    const res = await Api.fieldAndOperations(metaId)
    const filterList = res.fields
    const operationList = res.operation
    store.commit('setActions', operationList)
    if (!onlyAction) {
      return Object.assign({ currentAction: operationList }, getFilterList(filterList))
    } else {
      return { currentAction: operationList }
    }
  } catch (error) {
    console.log(error)
    if (typeof error == 'string') {
      // this.$message.error(error)
    } else {
      // this.$message.error('获取数据失败')
    }
  }
}
