<template>
  <div id="carouselProduct" class="carousel slide" data-bs-ride="carousel">
    <div v-for="item in carousel.items" :key="item" class="carousel-inner">
      <div :class="'carousel-item ' + item.style">
        <img :src="item.image" class="d-block w-100" alt="Paket Kelas 4">
      </div>
    </div>
    <BtnPrev v-on:handlePrevCarousel="handlePrevCarousel"/>
    <BtnNext v-on:handleNextCarousel="handleNextCarousel"/>
  </div>
</template>

<script>
import BtnNext from '../button/Carousel-Next.vue'
import BtnPrev from '../button/Carousel-Prev.vue'

import image01 from '../../../../assets/4th_grade_01.png'
import image02 from '../../../../assets/4th_grade_02.png'

export default {
  name: 'Content-Product-Carousel-8th',
  data () {
    return {
      carousel: {
        index: 0,
        items: [
          {
            style: 'active',
            image: image01
          },
          {
            style: '',
            image: image02
          }
        ]
      }
    }
  },
  components: {
    BtnNext,
    BtnPrev
  },
  methods: {
    handleNextCarousel () {
      if (this.carousel.index < this.carousel.items.length - 1) {
        this.carousel.index += 1
      } else {
        this.carousel.index = 0
      }
      this.carousel.items.map(item => { item.style = '' })
      this.carousel.items[this.carousel.index].style = 'active'
    },
    handlePrevCarousel () {
      if (this.carousel.index > 0) {
        this.carousel.index -= 1
      } else {
        this.carousel.index = this.carousel.items.length - 1
      }
      this.carousel.items.map(item => { item.style = '' })
      this.carousel.items[this.carousel.index].style = 'active'
    }
  }
}
</script>
