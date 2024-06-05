import get from './get'
import find from './find'
import insert from './insert'
import update from './update'
import deleteItem from './delete'

const Schedules = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    get,
    find,
    insert,
    update,
    deleteItem
  }
}

export default Schedules
