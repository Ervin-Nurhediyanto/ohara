<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      <div class="col-lg-2"><b>PRODUCT OHARA</b></div>
      <div class="col-lg-2 d-flex justify-content-end c-pointer" @click.prevent="addProduct">Add</div>
    </div>
    <product v-if="isProduct && !isInsert" :products="products" v-on:handleClick="detailProduct"/>
    <add-product v-if="isProduct && isInsert" :products="products"/>
    <div v-if="isPacket && !isInsert">
      <detail-product :product="product"/>
      PACKET PACKET
      {{ product }}
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Product from './product/Items.vue'
import AddProduct from './product/Add.vue'
import DetailProduct from './product/Detail.vue'

export default {
  name: 'Main-Product-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'PRODUCT ADMIN',
      isProduct: true,
      isPacket: false,
      isInsert: false,
      products: [],
      product: {}
    }
  },
  components: {
    Product,
    AddProduct,
    DetailProduct
  },
  computed: {},
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
    addProduct () {
      this.isInsert = !this.isInsert
    },
    detailProduct (data) {
      this.isProduct = !this.isProduct
      this.isPacket = !this.isPacket
      this.product = data
    }
  }
}
</script>
