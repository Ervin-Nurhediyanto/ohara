<template>
  <div @click.prevent="handleProfile" class="my-2">
    <font-awesome-icon :icon="['fas', 'school']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'school']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Class</span>
  </div>
</template>

<script>

export default {
  name: 'Class-Navbar-Student',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleProfile () {
      this.$router.replace({
        name: 'Class-Student'
      })
    }
  }
}

</script>
