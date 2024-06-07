<template>
  <div class="row m-0 p-0 h-100vh overflow scrollbar-none bg-grey">
    <Navbar/>
    <router-view class="col-10"/>
  </div>
</template>

<script>
import Navbar from '../../components/tutor/navbar/Main.vue'

export default {
  name: 'Main-Tutor',
  props: ['audio'],
  data () {
    return {}
  },
  components: {
    Navbar
  },
  computed: {},
  mounted () {
    this.audio.pause()
  },
  methods: {}
}

</script>
