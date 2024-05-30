<template>
  <div @click.prevent="handleFinance" class="my-2">
    <font-awesome-icon :icon="['fas', 'money-check-dollar']" class="d-none d-lg-inline mx-1 w-25"/>
    <font-awesome-icon :icon="['fas', 'money-check-dollar']" class="d-inline d-sm-none mx-1 w-100"/>
    <span class="d-none d-sm-inline">Finance</span>
  </div>
</template>

<script>

export default {
  name: 'Finance-Navbar-Student',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleFinance () {
      this.$router.replace({
        name: 'Finance-Student'
      })
    }
  }
}

</script>
