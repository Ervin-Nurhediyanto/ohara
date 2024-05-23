<template>
  <div @click.prevent="handleJadwal">
    <font-awesome-icon :icon="['fas', 'calendar']" class="mx-1 w-25"/>
    <span class="d-none d-sm-inline">Jadwal</span>
  </div>
</template>

<script>

export default {
  name: 'Jadwal-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleJadwal () {
      this.$router.replace({
        name: 'Jadwal-Tutor'
      })
    }
  }
}

</script>
