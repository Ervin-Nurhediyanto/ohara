import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Products = {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    getProducts (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(url + '/products', payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    findRole (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(url + `/products/${payload.id}`)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    insertProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(url + '/products', payload)
          .then(res => {
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    updateProduct (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(url + `/products/${payload.id}`, payload.data)
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

export default Products
