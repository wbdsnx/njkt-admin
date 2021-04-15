import { ApiUrl, POST } from '@/config/index'
// 品类
const templateList = POST(`${ApiUrl}/gateway/api/backapp/system/notification/smsTemplates/actions/queryByPage`)
export default {
  templateList: templateList
}
