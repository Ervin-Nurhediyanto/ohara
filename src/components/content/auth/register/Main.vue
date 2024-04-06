<template>
  <div class="row h-90vh m-0 p-0 justify-content-center overflow scrollbar-none bg-grey">
    <div class="d-flex col-lg-4 justify-content-center align-items-center">
      <div class="d-flex col-12 h-60vh justify-content-center register">
        <FRegister/>
      </div>
    </div>
  </div>
</template>

<script>
import FRegister from '../../../base/form/F-Register.vue'

export default {
  name: 'Content-Register-Main',
  data () {
    return {}
  },
  components: {
    FRegister
  },
  methods: {
  }
}
</script>
