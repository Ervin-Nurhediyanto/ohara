<template>
  <div class="row h-90vh m-0 p-0 justify-content-center">
    <div class="d-flex col-lg-4 justify-content-center align-items-center bg-form-auth">
      <div class="d-flex col-12 h-60vh p-5 justify-content-center login">
        <FLogin :audio="audio"/>
      </div>
    </div>
  </div>
</template>

<script>
import FLogin from '../../../base/form/F-Login.vue'

export default {
  name: 'Content-Login-Main',
  props: ['audio'],
  data () {
    return {}
  },
  components: {
    FLogin
  },
  methods: {}
}
</script>

<style scoped>
</style>
