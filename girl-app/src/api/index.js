import axios from 'axios';

const baseUrl = 'http://47.101.132.84:3000';

const requestGetData = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + url).then(res => {
      resolve(res)
    })
  })
}
const requestPostData = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + url, params).then(res => {
      resolve(res)
    })
  })
}

export default {
  requestGetData,
  requestPostData
}