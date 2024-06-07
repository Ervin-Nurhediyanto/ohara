<template>
  <div class="row m-0 p-0 h-100vh">
    <Navbar v-on:handleMenuBar="handleMenuBar"/>
    <router-view class="shadow-sm"/>
    <Footer/>
  </div>
</template>

<script>
// import sound from '../../assets/bgm/bgm-home.mp3'
import Navbar from '../../components/navbar/Main.vue'
import Footer from '../../components/footer/Main.vue'

export default {
  name: 'Main-General',
  props: ['audio'],
  data () {
    return {
      // sound: sound
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    // const audio = new Audio(this.sound)
    // audio.play()
    // audio.loop = true
    this.audio.play()
  },
  methods: {}
}

</script>
