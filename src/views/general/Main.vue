<template>
  <div class="row m-0 p-0 h-100vh">
    <Navbar v-on:handleMenuBar="handleMenuBar"/>
    <router-view class="shadow-sm"/>
    <Footer/>
    <div class="music-player">
      <!-- <audio
        ref="audio"
        :src="bgm"
        preload
        loop
        id="audio"
      ></audio> -->
      <!-- <div @click="toggleSound()" class="toggle-sound"></div> -->
    </div>
  </div>
</template>

<script>
import sound from '../../assets/bgm/bgm-home.mp3'
import Navbar from '../../components/navbar/Main.vue'
import Footer from '../../components/footer/Main.vue'

export default {
  name: 'Main-General',
  data () {
    return {
      sound: sound
    }
  },
  components: {
    Navbar,
    Footer
  },
  mounted () {
    const audio = new Audio(this.sound)
    audio.play()
    audio.loop = true
  },
  methods: {}
}

</script>
