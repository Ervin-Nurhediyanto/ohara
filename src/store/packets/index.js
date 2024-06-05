import get from './get'
import find from './find'
import insert from './insert'
import update from './update'

const Packets = {
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    get,
    find,
    insert,
    update
  }
}

export default Packets
