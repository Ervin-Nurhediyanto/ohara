import axios from 'axios'
import router from '../../router/index'

let url = ''
if (process.env.VUE_APP_STATUS === 'production') {
  url = process.env.VUE_APP_PROD_URL
} else {
  url = process.env.VUE_APP_BASE_URL
}

const Users = {
  state: {
    user: localStorage.getItem('user') || null,
    username: localStorage.getItem('username') || null,
    users: [],
    token: localStorage.getItem('token') || null
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    user (state) {
      return state.user
    },
    username (state) {
      return state.username
    },
    users (state) {
      return state.users
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setUsername (state, payload) {
      state.username = payload
    },
    setUsers (state, payload) {
      state.users = payload
    }
  },
  actions: {
    interceptorsResponse (setex) {
      axios.interceptors.response.use(
        function (response) {
          return response
        },
        function (error) {
          console.log(error)
          if (error.response.status === 401) {
            localStorage.removeItem('token')
            setex.commit('setToken', null)
            // router.push('/login')
            console.log('login success')
          }
          return Promise.reject(error)
        }
      )
    },
    interceptorsRequest (setex) {
      console.log('interse')
      axios.interceptors.request.use(
        function (config) {
          config.headers.Authorization = `Bearer ${setex.state.token}`
          return config
        },
        function (error) {
          return Promise.reject(error)
        }
      )
    },
    login (setex, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(url + '/users/login', payload)
          .then(res => {
            const user = res.data.data
            setex.commit('setUser', user)
            localStorage.setItem('user', user)
            setex.commit('setUsername', user.username)
            localStorage.setItem('username', user.username)
            localStorage.setItem('token', user.token)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    logout () {
      return new Promise(resolve => {
        const items = { ...localStorage }
        Object.keys(items).map(item => {
          localStorage.removeItem(item)
        })
        resolve()
        router.push('/login')
      })
    }
  }
}

export default Users
