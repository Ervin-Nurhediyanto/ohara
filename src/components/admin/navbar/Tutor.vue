<template>
  <div @click.prevent="handleDashboard" class="my-2">
    <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'chalkboard-teacher']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Tutor</span>
  </div>
</template>

<script>

export default {
  name: 'Tutor-Navbar-Admin',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleDashboard () {
      this.$router.replace({
        name: 'Tutor-Admin'
      })
    }
  }
}

</script>
