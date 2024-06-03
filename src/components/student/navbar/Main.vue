<template>
  <div class="col-2 text-white bg-info">
    <PP :image="data.image"/><hr/>
    <div class="d-none d-sm-flex c-default">{{ data.username }}</div><hr class="d-none d-sm-flex"/>
    <div class="c-pointer">
      <dashboard/>
      <profile/>
      <class/>
      <select-packet/>
      <schedule/>
      <finance/>
      <logout/>
    </div>
  </div>
</template>

<script>
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
  props: ['data'],
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
  computed: {},
  mounted () {},
  methods: {}
}

</script>
