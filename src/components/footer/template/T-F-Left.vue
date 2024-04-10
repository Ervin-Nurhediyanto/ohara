<template>
  <div class="d-flex col-12 col-lg-4 m-0 p-0 pt-2 justify-content-center bg-dark">
    <div class="d-flex row m-0 p-0 justify-content-center">
      <div class="w-50 p-0">
        <img :src="logo" class="w-100 c-pointer"/>
      </div>
      <div class="d-flex row m-0 p-0 justify-content-center align-items-center">
        Persiapkan Masa Depanmu
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../../assets/logo_ohara.png'

export default {
  name: 'Template-Footer-Left',
  data () {
    return {
      logo: logo
    }
  },
  components: {}
}

</script>
