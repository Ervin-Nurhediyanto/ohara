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
    getSchedules (setex, payload) {
      let search = '?'
      if (payload.studentId) { search += `studentId=${payload.studentId}&&` }
      if (payload.tutorId) { search += `tutorId=${payload.tutorId}&&` }
      if (payload.status) { search += `status=${payload.status}&&` }
      if (payload.day) { search += `day=${payload.day}&&` }
      if (payload.time) { search += `time=${payload.time}&&` }

      return new Promise((resolve, reject) => {
        axios
          .get(url + `/schedules/${search}`, payload)
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
