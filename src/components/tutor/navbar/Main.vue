<template>
  <div class="col-2 text-white bg-primary">
    <PP :image="data.image"/><hr/>
    <div class="d-none d-sm-flex c-default">{{ data.username }}</div><hr class="d-none d-sm-flex"/>
    <div class="c-pointer">
      <dashboard/>
      <profile/>
      <module/>
      <presence/>
      <schedule/>
      <logout/>
    </div>
  </div>
</template>

<script>
import PP from './Photo-Profile.vue'
import Dashboard from './Dashboard.vue'
import Profile from './Profile.vue'
import Module from './Module.vue'
import Presence from './Presence.vue'
import Schedule from './Schedule.vue'
import Logout from './Logout'

export default {
  name: 'Main-Navbar-Tutor',
  props: ['data'],
  data () {
    return {}
  },
  components: {
    PP,
    Dashboard,
    Profile,
    Module,
    Presence,
    Schedule,
    Logout
  },
  computed: {},
  mounted () {},
  methods: {}
}

</script>
