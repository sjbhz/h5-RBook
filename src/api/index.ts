// 接口基准地址
let BASEURL = 'http://localhost:3005/'

// 为每个接口拼接版本参数避免产生缓存
const date = new Date().getTime()

const homeInit = (params = {}) => {
  return window.axios.get(`${BASEURL}init.do?t=${date}`, { params })
}
export default { homeInit }
