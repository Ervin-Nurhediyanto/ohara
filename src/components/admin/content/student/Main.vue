<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      <div class="col-11 col-lg-3 m-0 p-0">
        <div class="row m-0 p-0">
          <div class="col-3 col-lg-2 m-0 p-0"><b>Search</b></div>
          <div class="col-2 col-lg-2 m-0 p-0"><input type="text" v-model="search"></div>
        </div>
      </div>
      <div class="col-1 col-lg-1 m-0 p-0 c-pointer"><b class="d-none d-lg-inline">Add </b><span><b>+</b></span></div>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <table class="h-5vh">
        <tr class="h-5vh text-white ts-dark bg-warning">
          <th class="h-5vh w-3 px-1 border border-2 border-dark">No.</th>
          <th class="h-5vh w-15 px-1 border border-2 border-dark text-center">Name</th>
          <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Packet</th>
          <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Schedule</th>
          <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Invoice</th>
          <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Status</th>
        </tr>
        <tr v-for="i in student.length" :key="i" class="ff-georgia">
          <td class="h-5vh w-3 px-1 border border-2 border-dark">{{ i }}</td>
          <td class="h-5vh w-15 px-1 border border-2 border-dark c-pointer">{{ student[i-1].name }}</td>
          <td class="h-5vh w-10 px-1 border border-2 border-dark">
            <div class="text-primary text-center c-pointer">check packet</div>
          </td>
          <td class="h-5vh w-10 px-1 border border-2 border-dark">
            <div class="text-primary text-center c-pointer">check schedule</div>
          </td>
          <td class="h-5vh w-10 m-0 p-0 border border-2 border-dark">
            <div class="d-flex m-0 p-0 py-1 justify-content-center">
              <div class="text-primary text-center c-pointer">check invoice</div>
            </div>
          </td>
          <td class="h-5vh w-10 px-1 border border-2 border-dark">
            <div class="d-flex m-0 p-0 py-1 justify-content-center">
              <btn-status :status="student[i-1].status"/>
            </div>
          </td>
        </tr>
      </table>
      <div class="h-80vh"></div>
    </div>
  </div>
</template>

<script>
import BtnStatus from './data/Status.vue'

export default {
  name: 'Main-Student-Admin',
  data () {
    return {
      title: 'STUDENT ADMIN',
      search: '',
      student: [
        {
          name: 'Anak Baik',
          status: 'enable'
        },
        {
          name: 'Anak Rajin',
          status: 'disable'
        }
      ]
    }
  },
  components: {
    BtnStatus
  },
  computed: {},
  methods: {}
}
</script>
