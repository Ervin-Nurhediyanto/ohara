<template>
  <div class="col-12 col-lg-8 h-25vh d-flex pt-4 overflow scrollbar-none">
    <div class="row h-25vh">
      <div class="col-12">
        <BtnCategory :display="display" :isDropdown="isDropdown" v-on:handleDropdown="handleDropdown"/>
        <DropdownCategoty :isDropdown="isDropdown" v-on:selectDropdown="selectDropdown"/>
      </div>
    </div>
    <div class="h-25vh" v-for="i in 2" :key="i">
      <Carousel :isSelect="isSelect" :display="display"/>
    </div>
  </div>
</template>

<script>
import BtnCategory from './product/button/Category.vue'
import DropdownCategoty from './product/dropdown/Category.vue'
import Carousel from './product/carousel/Main.vue'

export default {
  name: 'Content-Product',
  data () {
    return {
      isDropdown: false,
      isSelect: false,
      display: 'Pilih Kategori',
      opstions: ['Kelas 4', 'Kelas 5', 'Kelas 6', 'Kelas 7', 'Kelas 8']
    }
  },
  components: {
    BtnCategory,
    DropdownCategoty,
    Carousel
  },
  methods: {
    handleDropdown (data) {
      this.isDropdown = data
    },
    selectDropdown (data) {
      this.isSelect = true
      this.display = data
      this.handleDropdown()
    }
  }
}
</script>
