<template>
  <div @click.prevent="handleDashboard" class="my-2">
    <font-awesome-icon :icon="['fas', 'users']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'users']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Student</span>
  </div>
</template>

<script>

export default {
  name: 'Student-Navbar-Admin',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleDashboard () {
      this.$router.replace({
        name: 'Student-Admin'
      })
    }
  }
}

</script>
