<template>
  <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
    <div class="col-12 h-5vh d-flex justify-content-between align-items-center text-white bg-dark">
      <span><b>DETAIL PRODUK</b></span>
      <div class="px-3 c-pointer" @click.prevent="handleBack"><b>BACK</b></div>
    </div>
    <div class="col-12 col-lg-6 h-85vh p-1">
      <card :product="product"/>
    </div>
    <div class="col-12 col-lg-6 h-85vh p-1">
      <Info :product="product"/>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import Info from './Info.vue'

export default {
  name: 'Detail-Product',
  props: ['product'],
  data () {
    return {}
  },
  components: {
    Card,
    Info
  },
  computed: {},
  methods: {
    handleBack () {
      this.$emit('handleBack')
    }
  }
}
</script>

<style>
</style>
