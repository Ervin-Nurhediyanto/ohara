<template>
  <div class="row m-0 p-0">
    <div v-for="i in products.length" :key="i" class="col-12 col-lg-3 h-30vh m-0 p-0">
      <img :src="products[i-1].image" alt="product image" class="img c-pointer" @click.prevent="handleClick(products[i-1])">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Product-Items',
  props: ['products'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleClick (data) {
      this.$emit('handleClick', data)
    }
  }
}
</script>
