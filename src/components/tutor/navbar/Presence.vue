<template>
  <div @click.prevent="handlePresence" class="my-2">
    <font-awesome-icon :icon="['fas', 'table']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'table']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Presence</span>
  </div>
</template>

<script>

export default {
  name: 'Presence-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handlePresence () {
      this.$router.replace({
        name: 'Presence-Tutor'
      })
    }
  }
}

</script>
