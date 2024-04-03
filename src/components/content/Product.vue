<template>
  <div :class="'col-12 col-sm-12 col-lg-8 d-flex pt-4 overflow scrollbar-none ' + style + content_h">
    <div class="row h-30vh">
      <div class="col-12">
        <BtnCategory
          :display="display"
          :isDropdown="isDropdown"
          v-on:handleDropdown="handleDropdown"
          :style="style + btn_h"/>
        <DropdownCategoty :isDropdown="isDropdown" v-on:selectDropdown="selectDropdown"/>
      </div>
    </div>
    <div :class="'' + content_h" v-for="i in 2" :key="i">
      <Carousel :isSelect="isSelect" :display="display" :style="content_h" :card_h="card_h"/>
    </div>
  </div>
</template>

<script>
import BtnCategory from './product/button/Category.vue'
import DropdownCategoty from './product/dropdown/Category.vue'
import Carousel from './product/carousel/Main.vue'

export default {
  name: 'Content-Product',
  props: ['style', 'content_h', 'btn_h', 'card_h'],
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
