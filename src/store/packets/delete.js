import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Delete = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    deletePacket (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(url + `/packets/${payload.id}`)
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

export default Delete
