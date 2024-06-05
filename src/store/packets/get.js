import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Get = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getPackets (setex, payload) {
      let search = '?'
      if (payload.productId) { search += `productId=${payload.productId}&&` }
      if (payload.grade) { search += `grade=${payload.grade}&&` }
      return new Promise((resolve, reject) => {
        axios
          .get(url + `/packets/${search}`, payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default Get
