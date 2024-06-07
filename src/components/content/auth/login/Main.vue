<template>
  <div class="row h-90vh m-0 p-0 justify-content-center">
    <div class="d-flex col-lg-4 justify-content-center align-items-center ">
      <div class="d-flex col-12 h-60vh m-0 p-0 justify-content-center">
        <img :src="image" alt="image" class="bg-image">
        <FLogin class="form-login"/>
      </div>
    </div>
  </div>
</template>

<script>
import image from '../../../../assets/bg/bg-05.png'
import FLogin from '../../../base/form/F-Login.vue'

export default {
  name: 'Content-Login-Main',
  data () {
    return {
      image: image
    }
  },
  components: {
    FLogin
  },
  methods: {}
}
</script>

<style scoped>
.form-login {
  padding-top: 130px;
  /* padding-left: -100px; */
}
.bg-image {
  position: absolute;
  height: 480px;
  margin-left: -75px;
}

@media (min-width: 1200px) {
  .form-login {
    padding-top: 135px;
    padding-left: 75px;
  }
  .bg-image {
    height: 490px;
    margin-left: 0;
  }
}
</style>
