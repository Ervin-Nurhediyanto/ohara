<template>
  <div @click.prevent="handleSchedule" class="my-2">
    <font-awesome-icon :icon="['fas', 'calendar']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'calendar']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Schedule</span>
  </div>
</template>

<script>

export default {
  name: 'Schedule-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleSchedule () {
      this.$router.replace({
        name: 'Schedule-Tutor'
      })
    }
  }
}

</script>
