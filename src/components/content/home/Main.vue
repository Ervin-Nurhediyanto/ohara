<template>
  <div class="row h-120vh m-0 p-0">
    <div class="row m-0 p-0">
      <div class="d-flex bimbel justify-content-center align-items-end">
        <!-- <span class="display-1 ff-fantasy ts-white text-dark">BIMBEL OHARA</span> -->
        <span class="fs-111px ff-fantasy ts-white text-dark">BIMBEL OHARA</span>
      </div>
      <div class="d-flex h-8vh justify-content-center">
        <!-- <span class="fs-1 ff-Impact ts-dark text-white">Persiapkan Masa Depanmu</span> -->
        <span class="fs-1 ff-georgia ts-dark text-white">Persiapkan Masa Depanmu</span>
      </div>
      <div class="d-flex row h-10vh m-0 p-0 justify-content-center">
        <div class="d-flex col-8 col-sm-8 col-lg-2 h-6vh m-lg-1 mt-lg-3 mx-1 rounded-4 justify-content-center align-items-center box-shadow-2px c-pointer bg-white"
        @click.prevent="handleRegister">
          <b class="fs-20px">Daftar Sekarang</b>
        </div>
      </div>
      <div class="space"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content-Home-Main',
  props: ['isMenuBar'],
  data () {
    return {}
  },
  components: {},
  methods: {
    handleMenuBar () {
      this.$emit('handleMenuBar')
    },
    handleRegister () {
      this.$router.replace({
        name: 'Register'
      })
    }
  }
}
</script>

<style>
.box-shadow-2px {
  box-shadow: 2px 2px 0px 0px;
}
.fs-10px {
  font-size: 10px
}
.bimbel {
  height: 50vh;
}
.space {
  height: 45vh;
}

@media (min-width: 1200px) {
  .bimbel {
    height: 50vh;
  }
  .space {
    height: 60vh;
  }
}
</style>
