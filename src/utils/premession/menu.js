// 深拷贝
export const deepcopy = function(source) {
  if (!source) {
    return source
  }
  const sourceCopy = source instanceof Array ? [] : {}
  for (const item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item]
  }
  return sourceCopy
}
// 菜单数据组织
export const buildMenu = function(array, ckey) {
  const menuData = []
  const indexKeys = Array.isArray(array)
    ? array.map(e => {
      return e.id
    })
    : []
  ckey = ckey || 'parentId'
  array.forEach(function(e) {
    // 一级菜单
    if (!e[ckey] || e[ckey] === e.id) {
      delete e[ckey]
      menuData.push(deepcopy(e)) // 深拷贝
    } else if (Array.isArray(indexKeys)) {
      // 检测ckey有效性
      const parentIndex = indexKeys.findIndex(function(id) {
        return id == e[ckey]
      })
      if (parentIndex === -1) {
        menuData.push(e)
      }
    }
  })
  const findChildren = function(parentArr) {
    if (Array.isArray(parentArr) && parentArr.length) {
      parentArr.forEach(function(parentNode) {
        array.forEach(function(node) {
          if (parentNode.id === node[ckey]) {
            if (parentNode.children) {
              parentNode.children.push(node)
            } else {
              parentNode.children = [node]
            }
          }
        })
        if (parentNode.children) {
          findChildren(parentNode.children)
        }
      })
    }
  }
  findChildren(menuData)
  console.log(menuData)
  return menuData
}
export const getMenu = function(menuData) {
  const message = menuData
  const promissonList = []
  message.map(function(m) {
    const functions = m.functions
    functions.map(function(f) {
      promissonList.push({
        id: f.id,
        path: f.uri,
        name: f.name,
        module: m.name,
        meta: Object.assign(
          {},
          {
            id: f.id,
            name: f.name
          }
        )
      })
    })
  })
  return promissonList
}
