<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <ico-pro/>
      <ico-cla/>
      <ico-sch/>
      <ico-sel/>
      <ico-fin/>
      <!-- <div class="col-12 col-lg-9 h-50vh p-3"></div> -->
    </div>
  </div>
</template>

<script>
import IcoPro from './cards/Card-Profile.vue'
import IcoCla from './cards/Card-Class.vue'
import IcoSch from './cards/Card-Schedule.vue'
import IcoSel from './cards/Card-Select-Packet.vue'
import IcoFin from './cards/Card-Finance.vue'

export default {
  name: 'Main-Dashboard-Student',
  data () {
    return {
      title: 'DASHBOARD STUDENT'
    }
  },
  components: {
    IcoPro,
    IcoCla,
    IcoSch,
    IcoSel,
    IcoFin
  },
  computed: {},
  methods: {}
}
</script>
