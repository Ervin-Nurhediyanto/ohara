<template>
  <div class="row h-100vh m-0 p-0">
    <div class="row m-0 p-0">
      <div class="d-flex h-50vh justify-content-center align-items-end">
        <span class="display-1 ff-fantasy ts-white">BIMBEL OHARA</span>
      </div>
      <div class="d-flex h-5vh justify-content-center">
        <span class="fs-4 ff-Impact ts-white">Persiapkan Masa Depanmu</span>
      </div>
      <div class="d-flex row h-10vh m-0 p-0 justify-content-center">
        <!-- <div class="d-flex col-4 col-sm-4 col-lg-2 h-5vh m-lg-1 mt-lg-3 mx-1 rounded-4 justify-content-center align-items-center box-shadow-2px c-pointer bg-white">
          <b class="fs-10px">Hubungi Kami</b>
        </div> -->
        <div class="d-flex col-4 col-sm-4 col-lg-2 h-5vh m-lg-1 mt-lg-3 mx-1 rounded-4 justify-content-center align-items-center box-shadow-2px c-pointer bg-white"
        @click.prevent="handleRegister">
          <b class="fs-10px">Daftar Sekarang</b>
        </div>
      </div>
      <div class="h-35vh"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content-Home-Main',
  props: ['isMenuBar'],
  data () {
    return {
    }
  },
  components: {
  },
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
/* .bg-home {
  background-image: url(../../../assets/bg/bg-01.png);
  background-size: cover;
  background-repeat: no-repeat;
} */
.box-shadow-2px {
  box-shadow: 2px 2px 0px 0px;
}
.fs-10px {
  font-size: 10px
}

/* @media (max-width: 1200px) {
  .bg-home {
    background-size: cover;
  }
} */
</style>
