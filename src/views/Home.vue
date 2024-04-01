<template>
  <div class="row m-0 p-0 h-100vh">
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Main.vue'
import Content from '../components/content/Main.vue'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Navbar,
    Content
  }
}
</script>
