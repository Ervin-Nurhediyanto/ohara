<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <IcoPro/>
      <IcoMod/>
      <IcoJad/>
    </div>
  </div>
</template>

<script>
import IcoPro from './cards/Card-Profile.vue'
import IcoMod from './cards/Card-Module.vue'
import IcoJad from './cards/Card-Jadwal.vue'

export default {
  name: 'Main-Dashboard-Tutor',
  data () {
    return {
      title: 'DASHBOARD TUTOR'
    }
  },
  components: {
    IcoPro,
    IcoMod,
    IcoJad
  },
  computed: {},
  methods: {}
}
</script>
