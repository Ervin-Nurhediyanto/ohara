import { createStore } from 'vuex'
import Users from './users'
import Roles from './roles'
import Products from './products'
import Packets from './packets'
import Finances from './finances'
import Schedules from './schedules'
import Classes from './classes'
import Presences from './presences'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Users,
    Roles,
    Products,
    Packets,
    Finances,
    Schedules,
    Classes,
    Presences
  }
})
