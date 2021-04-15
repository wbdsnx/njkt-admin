import axios from 'axios'
import Cookies from 'js-cookie'
import md5 from 'js-md5'
import store from '../store'
var Axios = axios.create({
  timeout: 200000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    Authorization: `Bearer ${Cookies.get('accessTokenPlatform')}`
  }
})
Axios.interceptors.request.use(
  config => {
    // 设置取消请求的CancelToken
    config.cancelToken = new axios.CancelToken(cancel => {
      // 存入vuex数组
      store.commit('pushAxiosPromiseArr', cancel)
    })

    config.headers.Authorization = `Bearer ${Cookies.get('accessTokenPlatform')}`
    if (config.data && config.data.body) {
      const stringBody = JSON.stringify(config.data.body)
      Object.assign(config.data, {
        id: md5(stringBody),
        sign: md5(stringBody + new Date().getTime()),
        timestamp: new Date().getTime()
      })
    }
    return config
  },
  error => {
    return Promise.reject(error.data.error.message)
  }
)

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(
  res => {
    if (res.data && res.data.code == '-2') {
      Cookies.remove('accessTokenPlatform')
      window.location.href = `${process.env.BASE_URL}login?ReturnUrl=` + encodeURIComponent(window.location.href)
    } else if (res.data && res.data.code == 0) {
      if (res.data.body) {
        return res.data.body
      }
      return res.data
    } else if (res.status == 204) {
      return Promise.resolve('操作成功')
    } else {
      return Promise.reject(res.data.msg)
    }
  },
  error => {
    if (error.response.data && error.response.data.code == '-2') {
      Cookies.remove('accessTokenPlatform')
      window.location.href = `${process.env.BASE_URL}login?ReturnUrl=` + encodeURIComponent(window.location.href)
    } else if (error.response && error.response.data && error.response.data.msg) {
      return Promise.reject(error.response.data.msg)
    }
    return Promise.reject(error)
  }
)

// 对axios的实例重新封装成一个plugin ,方便 Vue.use(xxxx)
// export default {
//   install: function(Vue, Option) {
//     Object.defineProperty(Vue.prototype, "$http", { value: Axios });
//   }
// };
// get请求
export const GET = url => {
  return body =>
    Axios.get(url, {
      params: body
    })
}
// post请求
export const POST = (
  url,
  config = {
    showLoading: true
  }
) => {
  return body => Axios.post(url, body, config)
}

export const PUT = (
  url,
  config = {
    showLoading: true
  }
) => {
  return body => Axios.put(url, body, config)
}

export const DELETE = url => {
  return body =>
    Axios.delete(url, {
      params: body
    })
}

export default Axios
