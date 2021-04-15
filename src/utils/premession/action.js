export const getFilterList = function(filterList) {
  const screenList = []
  const screenValue = {}
  filterList.map(F => {
    screenValue[F.name] = undefined
    if (F.fieldType == 'text') {
      screenList.push({
        label: F.showName,
        placeholder: F.placeholder,
        key: F.name,
        type: 'text'
      })
    }
    if (F.fieldType == 'date') {
      screenList.push({
        label: F.showName,
        key: F.name,
        type: 'date'
      })
    }
    if (F.fieldType == 'time') {
      screenList.push({
        label: F.showName,
        key: F.name,
        type: 'dateRange'
      })
    }
    if (F.fieldType == 'select') {
      var option = []
      let attribute = F.attribute && JSON.parse(F.attribute)
      var options = F.options
      if (options && options.length > 0) {
        options.map(o => {
          option.push({
            label: o.label,
            value: o.value
          })
        })
      }
      screenList.push({
        label: F.showName,
        key: F.name,
        option: option,
        type: 'select',
        placeholder: F.placeholder,
        value: [],
        attribute: attribute
      })
      if (attribute.mode == 'multiple' && !F.value) {
        screenValue[F.name] = []
      } else if (attribute.mode == 'default' && !F.value) {
        screenValue[F.name] = ''
      }
    }
  })
  return { screenList, screenValue }
}
