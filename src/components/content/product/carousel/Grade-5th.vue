<template>
  <div>
    <TemplateCar
    :carousel="carousel"
    :alt="'Paket Kelas 5'"
    v-on:handleNextCarousel="handleNextCarousel"
    v-on:handlePrevCarousel="handlePrevCarousel"
    />
  </div>
</template>

<script>
import TemplateCar from './Template-Carousel.vue'

import image01 from '../../../../assets/5th_grade_01.png'

export default {
  name: 'Content-Product-Carousel-5th',
  data () {
    return {
      carousel: {
        index: 0,
        items: [
          {
            style: 'active',
            image: image01
          }
        ]
      }
    }
  },
  components: {
    TemplateCar
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
