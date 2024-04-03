<template>
  <div class="row m-0 p-0 h-100vh">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/Main.vue'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    Navbar
  }
}

</script>
