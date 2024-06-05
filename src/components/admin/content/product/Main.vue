<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div v-if="!isInsertPacket && !isEditPacket" class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      <div class="col-7 col-lg-2"><b>PRODUCT OHARA</b></div>
      <div class="col-1 col-lg-2 d-flex justify-content-end c-pointer" @click.prevent="addProduct">{{ btnProduct }}</div>
    </div>
    <product v-if="isProduct && !isInsert" :products="products" v-on:handleClick="detailProduct"/>
    <add-product v-if="isProduct && isInsert" v-on:update="handleProduct"/>
    <div v-if="isPacket && !isInsert">
      <detail-product v-if="!isInsertPacket && !isEditPacket" :product="product" v-on:update="setProduct"/>
      <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
        <div class="col-7 col-lg-2"><b>PACKET {{ product.name }}</b></div>
        <div class="col-1 col-lg-2 d-flex justify-content-end c-pointer" @click.prevent="addPacket">{{ btnPacket }}</div>
      </div>
      <packet v-if="!isInsertPacket && !isEditPacket" :packets="packets" v-on:handleClick="detailPacket"/>
      <add-packet v-if="isPacket && isInsertPacket && !isEditPacket" :productId="product._id" v-on:update="handlePacket"/>
      <div v-if="isPacket && isEditPacket">
        <!-- <detail-packet v-if="isEditPacket" :packet="packet" v-on:update="setPacket"/> -->
        <detail-packet :packet="packet" v-on:update="setPacket"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Product from './product/Items.vue'
import Packet from './packet/Items.vue'
import AddProduct from './product/Add.vue'
import AddPacket from './packet/add/Main.vue'
import DetailProduct from './product/Detail.vue'
import DetailPacket from './packet/detail/Main.vue'

export default {
  name: 'Main-Product-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'PRODUCT ADMIN',
      isProduct: true,
      isPacket: false,
      isInsert: false,
      isInsertPacket: false,
      isEditPacket: false,
      products: [],
      product: {},
      packets: [],
      packet: {},
      btnProduct: 'Add',
      btnPacket: 'Add'
    }
  },
  components: {
    Product,
    Packet,
    AddProduct,
    AddPacket,
    DetailProduct,
    DetailPacket
  },
  computed: {},
  mounted () {
    this.handleProduct()
  },
  methods: {
    ...mapActions(['getProducts', 'findProduct', 'getPackets', 'findPacket']),
    handleProduct () {
      this.getProducts()
        .then((res) => {
          this.products = res.data.data
        })
    },
    handlePacket () {
      this.getPackets({ productId: this.product._id })
        .then((res) => {
          this.packets = res.data.data
        })
    },
    addProduct () {
      if (this.btnProduct === 'Back') {
        this.btnProduct = 'Add'
        this.isInsert = false
        this.isProduct = true
        this.isPacket = false
      } else {
        this.btnProduct = 'Back'
        this.isInsert = true
      }
    },
    addPacket () {
      if (this.btnPacket === 'Back') {
        this.btnPacket = 'Add'
        this.isInsertPacket = false
        this.isEditPacket = false
      } else {
        this.btnPacket = 'Back'
        this.isInsertPacket = true
      }
    },
    detailProduct (data) {
      this.isProduct = !this.isProduct
      this.isPacket = !this.isPacket
      this.product = data
      this.btnProduct = 'Back'

      this.handlePacket()
    },
    detailPacket (data) {
      this.isEditPacket = true
      this.packet = data
      this.btnPacket = 'Back'
      console.log(this.packet)
    },
    setProduct (id) {
      this.findProduct({ id: id })
        .then((res) => {
          this.product = res.data.data[0]
        })
      this.handleProduct()
    },
    setPacket (id) {
      this.findPacket({ id: id })
        .then((res) => {
          this.product = res.data.data[0]
        })
      this.handlePacket()
    }
  }
}
</script>
