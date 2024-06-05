import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Update = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    updateFinances (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(url + `/finances/${payload.id}`, payload.data)
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

export default Update
