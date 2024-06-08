<template>
  <div class="row h-100vh bg-grey overflow scrollbar-none">
    <div class="col-12 h-5vh d-flex justify-content-center align-items-center text-white bg-dark">
      <span><b>{{ title }}</b></span>
    </div>
    <div class="col-12 col-lg-3 h-30vh m-0 p-0" v-for="product in products" :key="product">
      <image-product
        :image="product.image"
        :data="product"
        v-on:handleClick="selectProduct"
      />
    </div>
    <div class="h-65vh"></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ImageProduct from '../../base/image/Img-Product.vue'

export default {
  name: 'Product-Main',
  data () {
    return {
      title: 'PILIH PRODUK',
      products: []
    }
  },
  components: {
    ImageProduct
  },
  mounted () {
    this.handleProduct()
  },
  methods: {
    ...mapActions(['getProducts']),
    handleProduct () {
      this.getProducts()
        .then((res) => {
          this.products = res.data.data
        })
    },
    selectProduct (data) {
      this.$router.replace({
        name: 'Packet',
        query: { packet: data._id }
      })
    }
  }
}
</script>

<style>
</style>
