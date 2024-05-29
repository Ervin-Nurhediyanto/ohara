<template>
  <div class="row h-100vh bg-grey overflow scrollbar-none">
    <div class="col-12 h-5vh d-flex justify-content-center align-items-center text-white bg-dark">
      <span><b>PILIH PRODUK</b></span>
    </div>
    <div class="col-12 col-lg-3 h-30vh m-0 p-0" v-for="i in images.length" :key="i">
      <img :src="images[i-1]" class="img c-pointer" alt="" @click.prevent="handleSelectProduct(packets[i-1])">
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
      ],
      packets: [
        'Private-Offline',
        'Private-Online',
        'Kelas-Offline',
        'Voucher-Tugas'
      ]
    }
  },
  components: {},
  methods: {
    handleSelectProduct (packet) {
      this.$router.replace({
        name: 'Product-Selected',
        query: { packet: packet }
      })
    }
  }
}
</script>

<style>
</style>
