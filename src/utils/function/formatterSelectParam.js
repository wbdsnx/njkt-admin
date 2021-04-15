export default function formatterSelectParam(screenList, screenValue) {
  var param = {}
  for (var i = 0; i < screenList.length; i++) {
    if (screenList[i].type == 'text') {
      // 输入框
      screenValue[screenList[i].key] && (param[screenList[i].key] = `*${screenValue[screenList[i].key]}*`)
    } else if (screenList[i].type == 'select') {
      // 下拉
      if (typeof screenValue[screenList[i].key] == 'string' || typeof screenValue[screenList[i].key] == 'number') {
        // 下拉单选
        screenValue[screenList[i].key] != '' &&
              (param[screenList[i].key] = screenValue[screenList[i].key])
      } else if (Array.isArray(screenValue[screenList[i].key]) && screenValue[screenList[i].key].length) {
        // 下拉多选
        param[screenList[i].key] = screenValue[screenList[i].key].join(',')
      }
    } else if (screenList[i].type == 'date') {
      // 单个日期
      param[screenList[i].key] = screenValue[screenList[i].key]
    } else if (screenList[i].type == 'dateRange') {
      // 日期范围
      var obj_2 = {
        start:
              screenValue[screenList[i].key] && screenValue[screenList[i].key].length > 1
                ? screenValue[screenList[i].key][0]
                : '',
        end:
              screenValue[screenList[i].key] && screenValue[screenList[i].key].length > 1
                ? screenValue[screenList[i].key][1]
                : ''
      }
      if (obj_2.start != '' && obj_2.end != '') {
        param[screenList[i].key] = obj_2.start + '~' + obj_2.end
      }
    }
  }
  return param
}
