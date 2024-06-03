<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      <div class="col-lg-2"><b>PRODUCT OHARA</b></div>
      <div class="col-lg-2 d-flex justify-content-end c-pointer">Add</div>
    </div>
    <div>
      <div v-for="i in products.length" :key="i" class="col-12 col-lg-3 h-30vh m-0 p-0">
        <img :src="products[i-1].image" alt="product image" class="img c-pointer">
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Main-Product-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'PRODUCT ADMIN',
      products: []
    }
  },
  components: {},
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
    }
  }
}
</script>
