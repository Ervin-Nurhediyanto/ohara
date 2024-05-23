<template>
  <div class="row h-100vh bg-grey overflow scrollbar-none">
    <div class="col-12 h-5vh d-flex justify-content-center align-items-center text-white bg-dark"><span><b>PILIH PRODUK</b></span></div>
    <!-- <div class="col-12 h-5vh text-center text-white bg-dark"><span><b>PILIH PRODUK</b></span></div> -->
    <div class="col-12 col-lg-3 h-30vh m-0 p-0" v-for="img in images" :key="img">
      <!-- <img :src="images[0]" class="img" alt="">
      <img :src="images[1]" class="img" alt=""> -->
      <img :src="img" class="img c-pointer" alt="">
    </div>
    <div class="h-65vh"></div>
  </div>
</template>

<script>
import Product01 from '../../../assets/card/Private_Offline.png'
import Product02 from '../../../assets/card/Private_Online.png'
import Product03 from '../../../assets/card/Kelas_Offline.png'
import Product04 from '../../../assets/card/Voucher_Tugas.png'

export default {
  name: 'Product-Main',
  data () {
    return {
      images: [
        Product01,
        Product02,
        Product03,
        Product04
      ]
    }
  },
  components: {},
  methods: {}
}
</script>

<style>
/* .bg-home {
  background-image: url(../../../assets/bg/bg-01.png);
  background-size: cover;
  background-repeat: no-repeat;
} */
/* .box-shadow-2px {
  box-shadow: 2px 2px 0px 0px;
}
.fs-10px {
  font-size: 10px
} */

/* @media (max-width: 1200px) {
  .bg-home {
    background-size: cover;
  }
} */
</style>
