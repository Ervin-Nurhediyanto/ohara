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
    getFinances (setex, payload) {
      let search = '?'
      if (payload.userId) { search += `userId=${payload.userId}&&` }
      if (payload.productId) { search += `productId=${payload.productId}&&` }
      return new Promise((resolve, reject) => {
        axios
          .get(url + `/finances/${search}`, payload)
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
