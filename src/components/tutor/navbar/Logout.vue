<template>
  <div @click.prevent="handleLogout">
    <font-awesome-icon :icon="['fas', 'person-running']" class="mx-1 w-25"/>
    <span class="d-none d-sm-inline">Logout</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Logout-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions(['logout']),
    handleLogout () {
      this.logout()
        .then(() => {
          this.$router.replace({
            name: 'Login'
          })
        })
    }
  }
}

</script>
