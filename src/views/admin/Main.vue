<template>
  <div class="row m-0 p-0 h-100vh overflow scrollbar-none bg-grey">
    <Navbar/>
    <router-view class="col-10"/>
  </div>
</template>

<script>
import Navbar from '../../components/admin/navbar/Main.vue'

export default {
  name: 'Main-Admin',
  data () {
    return {}
  },
  components: {
    Navbar
  },
  computed: {},
  methods: {}
}

</script>
