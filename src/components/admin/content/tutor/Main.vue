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
    <TableTutor v-if="!isInsert" :tutors="tutors"/>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import TableTutor from './table/Main.vue'

export default {
  name: 'Main-Tutor-Admin',
  data () {
    return {
      title: 'TUTOR ADMIN',
      search: '',
      isInsert: false,
      tutors: [
        {
          name: 'Tutor Baik',
          mapel: 'Matematika',
          status: 'enable'
        },
        {
          name: 'Tutor Ramah',
          mapel: 'Matematika',
          status: 'disable'
        }
      ]
    }
  },
  components: {
    TableTutor
  },
  computed: {
    ...mapGetters({
      username: 'username'
    })
  },
  methods: {
    ...mapActions(['login', 'findRole'])
  }
}
</script>
