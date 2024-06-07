<template>
  <div class="row m-0 p-0">
    <router-view :audio="audio"/>
  </div>
</template>

<script>
import sound from './assets/bgm/bgm-home.mp3'

export default {
  name: 'App',
  data () {
    return {
      sound: sound,
      audio: ''
    }
  },
  components: {},
  computed: {},
  mounted () {
    this.audio = new Audio(this.sound)
    this.audio.loop = true
    // const audio = new Audio(this.sound)
    // audio.play()
    // audio.loop = true
  },
  methods: {}
}

</script>
