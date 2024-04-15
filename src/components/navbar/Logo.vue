<template>
  <div class="col-6 col-sm-2 col-md-3 col-lg-2 m-0">
    <div class="w-50 p-0">
      <img :src="logo" @click.prevent="handleMenu" class="w-100 c-pointer"/>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo_ohara_01.png'

export default {
  name: 'Navbar-Logo',
  data () {
    return {
      logo: logo
    }
  },
  methods: {
    handleMenu () {
      this.$emit('handleMenu', 'Home')
    }
  }
}
</script>
