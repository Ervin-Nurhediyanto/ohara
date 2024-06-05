<template>
  <div class="row m-0 p-0">
    <div class="col-12 col-lg-4 m-0 p-0">
      <img :src="product.image" alt="" class="img">
      <div class="d-flex justify-content-center">
        <btn-image v-on:handleChange="handleImage"/>
      </div>
    </div>
    <div class="col-12 col-lg-8 m-0 p-0">
      <!-- PRODUCT NAME -->
      <div class="row m-0 p-0 pt-3">
        <div class="col-12 col-lg-3"><b>Product Name</b>:</div>
        <div class="col-12 col-lg-9"><input-product :placeholder="product.name" v-on:handleChange="handleName"/></div>
      </div>
      <!-- MAPEL -->
      <div class="row m-0 p-0">
        <div class="col-12 col-lg-3"><b>Mata Pelajaran</b>:</div>
        <div class="col-12 col-lg-9"><select-option-product :value="product.mapel" v-on:handleChange="handleMapel"/></div>
      </div>
      <!-- DESCRIPTION -->
      <div class="row m-0 p-0">
        <div class="col-12 col-lg-3"><b>Description</b>:</div>
        <div class="col-12 col-lg-9"><textarea-product :placeholder="product.description" v-on:handleChange="handleDesc"/></div>
      </div>
      <div class="row m-0 p-0">
        <div class="col-12 col-lg-4 mt-3">
          <button-update :text="'update'" v-on:handleClick="handleUpdate"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonUpdate from './Button.vue'
import BtnImage from './Button-Image.vue'
import InputProduct from './Input-Product.vue'
import TextareaProduct from './Text-Area-Product.vue'
import SelectOptionProduct from './Select-Option-Product.vue'

export default {
  name: 'Detail',
  props: ['product'],
  data () {
    return {
      form: {}
    }
  },
  components: {
    ButtonUpdate,
    BtnImage,
    InputProduct,
    TextareaProduct,
    SelectOptionProduct
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['updateProduct']),
    handleUpdate () {
      const formData = new FormData()
      if (this.form.name) { formData.append('name', this.form.name) }
      if (this.form.description) { formData.append('description', this.form.description) }
      if (this.form.mapel) { formData.append('mapel', this.form.mapel) }
      if (this.form.image) { formData.append('image', this.form.image, this.form.image.name) }

      const data = {
        id: this.product._id,
        data: formData
      }

      this.updateProduct(data)
        .then((res) => {
          console.log(res)
          alert('update sukses')
          this.$emit('update', data.id)
        })
    },
    handleImage (data) {
      this.form.image = data
    },
    handleName (data) {
      this.form.name = data
    },
    handleMapel (data) {
      this.form.mapel = data
    },
    handleDesc (data) {
      this.form.description = data
    }
  }
}
</script>

<style scoped>
</style>
