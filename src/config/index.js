import { GET, POST, PUT, DELETE } from '@/server'
import appConfig from '@/config/apiConfig'
const { ApiUrl, ossUrl } = appConfig[process.env.VUE_APP_ENV ? process.env.VUE_APP_ENV : 'dev']

const ossImagePath = {
  commodity: 'commodity/images' // 商品图片
}

export { GET, POST, PUT, DELETE, ApiUrl, ossUrl, ossImagePath }
