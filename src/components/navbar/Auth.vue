<template>
  <div class="col-6 col-sm-3 col-md-3 col-lg-2 m-0 d-flex align-items-center justify-content-end">
    <div class="d-none d-sm-inline col-10 col-sm-6 col-lg-4 bg-orange p-1 mt-lg-0 rounded-4 text-center text-white shadow-sm c-pointer"
    @click.prevent="handleLogin">
      <b>Login</b>
    </div>
    <MenuBar class="d-flex d-sm-none" v-on:handleClick="handleMenuBar"/>
    <!-- <font-awesome-icon :icon="['fab', 'instagram']" /> -->
  </div>
</template>

<script>
import MenuBar from '../base/icon/I-Menu-Bar.vue'

export default {
  name: 'Navbar-Auth',
  data () {
    return {}
  },
  components: {
    MenuBar
  },
  methods: {
    handleMenuBar () {
      this.$emit('handleMenuBar')
    },
    handleLogin () {
      this.$emit('handleLogin')
    }
  }
}
</script>
