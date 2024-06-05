import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Insert = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    insertPacket (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(url + '/packets', payload)
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

export default Insert
