<template>
  <div class="col-2 text-white bg-info">
    <PP/><hr/>
    <div class="d-none d-sm-flex c-default">{{ username }}</div><hr class="d-none d-sm-flex"/>
    <div class="c-pointer">
      <Dashboard/>
      <Profile/>
      <Class/>
      <select-packet/>
      <Schedule/>
      <Finance/>
      <Logout/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PP from './Photo-Profile.vue'
import Dashboard from './Dashboard.vue'
import Profile from './Profile.vue'
import Class from './Class.vue'
import SelectPacket from './Select-Packet.vue'
import Schedule from './Schedule.vue'
import Finance from './Finance.vue'
import Logout from './Logout'

export default {
  name: 'Main-Navbar-Student',
  data () {
    return {}
  },
  components: {
    PP,
    Dashboard,
    Profile,
    Class,
    SelectPacket,
    Schedule,
    Finance,
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
