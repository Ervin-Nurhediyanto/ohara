<template>
  <div class="col-2">
    <div class="w-50 p-0">
      <img :src="logo" class="w-100 c-pointer"/>
    </div>
  </div>
</template>

<script>
import logo from '../../assets/logo_ohara.png'

export default {
  name: 'Navbar-Logo',
  data () {
    return {
      logo: logo
    }
  }
}
</script>
