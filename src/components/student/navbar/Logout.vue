<template>
  <div @click.prevent="handleLogout" class="my-2">
    <font-awesome-icon :icon="['fas', 'person-running']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'person-running']" class="d-inline d-sm-none mx-1 w-100"/>
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
