<template>
  <div class="col-2 text-white bg-primary">
    <PP/><hr/>
    <div class="d-none d-sm-flex justify-content-center c-default">{{ username }}</div><hr class="d-none d-sm-flex"/>
    <div class="c-pointer">
      <Dashboard/>
      <Tutor/>
      <Student/>
      <!-- <Profile/> -->
      <!-- <Module/> -->
      <!-- <Jadwal/> -->
      <Logout/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PP from './Photo-Profile.vue'
import Dashboard from './Dashboard.vue'
import Tutor from './Tutor.vue'
import Student from './Student.vue'
// import Profile from './Profile.vue'
// import Module from './Module.vue'
// import Jadwal from './Jadwal.vue'
import Logout from './Logout'

export default {
  name: 'Main-Navbar-Admin',
  data () {
    return {}
  },
  components: {
    PP,
    Dashboard,
    Tutor,
    Student,
    // Profile,
    // Module,
    // Jadwal,
    Logout
  },
  computed: {
    ...mapGetters({
      username: 'username'
    })
  },
  methods: {}
}

</script>
