<template>
  <div class="row h-90vh m-0 p-0 justify-content-center bg-grey">
    <div class="d-flex col-lg-4 justify-content-center align-items-center">
      <div class="d-flex col-12 h-60vh justify-content-center login">
        <FLogin/>
      </div>
    </div>
  </div>
</template>

<script>
import FLogin from '../../../base/form/F-Login.vue'

export default {
  name: 'Content-Login-Main',
  data () {
    return {}
  },
  components: {
    FLogin
  },
  methods: {}
}
</script>
