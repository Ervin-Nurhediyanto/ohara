import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Find = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    findFinance (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(url + `/finances/${payload.id}`)
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

export default Find
