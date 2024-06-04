<template>
  <div class="row m-0 p-0">
    <div class="col-4 m-0 p-0">
      <img :src="product.image" alt="" class="img">
      <div class="d-flex justify-content-center">
        <btn-image v-on:handleChange="handleImage"/>
      </div>
    </div>
    <div class="col-8 m-0 p-0">
      <div>
        <span>Name :</span>
      </div>
      <div>Description :</div>
      <div>Mapel</div>
    </div>
  </div>
</template>

<script>
import BtnImage from './Button-Image.vue'
export default {
  name: 'Detail',
  props: ['product'],
  data () {
    return {}
  },
  components: {
    BtnImage
  },
  computed: {},
  mounted () {},
  methods: {
    handleImage (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>
</style>
