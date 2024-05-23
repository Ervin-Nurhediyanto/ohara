<template>
  <div class="col-2 bg-info text-white">
    <PP/><hr/>
    <div class="c-default">{{ username }}</div><hr/>
    <div class="c-pointer">
      <Dashboard/>
      <Profile/>
      <Jadwal/>
      <Logout/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PP from './Photo-Profile.vue'
import Dashboard from './Dashboard.vue'
import Profile from './Profile.vue'
import Jadwal from './Jadwal.vue'
import Logout from './Logout'

export default {
  name: 'Main-Navbar-Tutor',
  data () {
    return {}
  },
  components: {
    PP,
    Dashboard,
    Profile,
    Jadwal,
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
