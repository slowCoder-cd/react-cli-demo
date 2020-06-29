import axios from 'axios'

// /example/1593346710175
const service = axios.create({
  baseURL: 'http://rap2.taobao.org:38080/app/mock/259303',
  timeout: 2000
})

// 响应拦截
service.interceptors.response.use(responseDate => {
  if (responseDate.status === 200) {
    return responseDate.data
  }

  return responseDate
})

export default service