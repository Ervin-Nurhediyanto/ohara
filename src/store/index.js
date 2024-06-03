import { createStore } from 'vuex'
import Users from './users'
import Roles from './roles'
import Products from './products'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Users,
    Roles,
    Products
  }
})
