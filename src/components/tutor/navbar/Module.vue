<template>
  <div @click.prevent="handleModule" class="my-2">
    <font-awesome-icon :icon="['fas', 'book']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'book']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Module</span>
  </div>
</template>

<script>

export default {
  name: 'Module-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleModule () {
      this.$router.replace({
        name: 'Module-Tutor'
      })
    }
  }
}

</script>
