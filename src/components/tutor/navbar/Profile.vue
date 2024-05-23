<template>
  <div @click.prevent="handleProfile">
    <font-awesome-icon :icon="['fas', 'user']" class="mx-1 w-25"/>
    <span class="d-none d-sm-inline">Profile</span>
  </div>
</template>

<script>

export default {
  name: 'Profile-Navbar-Tutor',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleProfile () {
      this.$router.replace({
        name: 'Profile-Tutor'
      })
    }
  }
}

</script>
