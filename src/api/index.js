import modules from './modules'
const Api = {}
modules.map(m => {
  Object.assign(Api, m)
})
export default Api
