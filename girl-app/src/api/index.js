import axios from 'axios';

const baseUrl = '';

const requestGetData = (url) => {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + url).then(res => {
      resolve(res)
    })
  })
}
const requestPostData = (url) => {
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