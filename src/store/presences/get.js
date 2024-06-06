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
    getPresences (setex, payload) {
      const search = '?'
      // let search = '?'
      // if (payload.studentId) { search += `studentId=${payload.studentId}&&` }
      // if (payload.tutorId) { search += `tutorId=${payload.tutorId}&&` }
      // if (payload.product) { search += `product=${payload.product}&&` }
      return new Promise((resolve, reject) => {
        axios
          .get(url + `/presences/${search}`, payload)
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
