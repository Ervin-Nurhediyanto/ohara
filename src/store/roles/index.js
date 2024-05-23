import axios from 'axios'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Roles = {
  state: {
    roleId: localStorage.getItem('roleId') || null,
    role: localStorage.getItem('role') || null
  },
  getters: {
    roleId (state) {
      return state.roleId
    },
    role (state) {
      return state.role
    }
  },
  mutations: {
    setRoleId (state, payload) {
      state.roleId = payload
    },
    setRole (state, payload) {
      state.role = payload
    }
  },
  actions: {
    getRoles (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .get(url + '/roles', payload)
          .then(res => {
            const roles = res.data.data
            setex.commit('setRoleId', roles)
            localStorage.setItem('roles', roles)
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
          .get(url + `/roles/${payload}`)
          .then(res => {
            const role = res.data.data
            setex.commit('setRole', role)
            localStorage.setItem('role', role[0].name)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
}

export default Roles
