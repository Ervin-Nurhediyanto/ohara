<template>
  <div class="row m-0 p-0 h-100vh overflow scrollbar-none bg-grey">
    <Navbar v-on:handleMenuBar="handleMenuBar"/>
    <router-view class="shadow-sm"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Main.vue'
import Footer from './components/footer/Main.vue'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Footer
  },
  methods: {
  }
}

</script>
