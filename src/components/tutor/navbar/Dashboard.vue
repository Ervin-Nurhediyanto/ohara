<template>
  <div @click.prevent="handleDashboard">
    <font-awesome-icon :icon="['fas', 'house']" class="mx-1 w-25 "/>
    <span class="d-none d-sm-inline">Dashboard</span>
  </div>
</template>

<script>

export default {
  name: 'Dashboard-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleDashboard () {
      this.$router.replace({
        name: 'Dashboard-Tutor'
      })
    }
  }
}

</script>
