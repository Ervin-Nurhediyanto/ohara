<template>
  <div id="carouselProduct" class="carousel slide" data-bs-ride="carousel">
    <div v-for="item in carousel.items" :key="item" class="carousel-inner">
      <CardCar :item="item" :alt="alt"/>
    </div>
    <BtnPrev v-on:handlePrevCarousel="handlePrevCarousel"/>
    <BtnNext v-on:handleNextCarousel="handleNextCarousel"/>
  </div>
</template>

<script>
import BtnNext from '../button/Carousel-Next.vue'
import BtnPrev from '../button/Carousel-Prev.vue'
import CardCar from '../card/Carousel.vue'

export default {
  name: 'Content-Template-Carousel',
  props: ['carousel', 'alt'],
  data () {
    return {}
  },
  components: {
    BtnNext,
    BtnPrev,
    CardCar
  },
  methods: {
    handleNextCarousel () {
      this.$emit('handleNextCarousel')
    },
    handlePrevCarousel () {
      this.$emit('handlePrevCarousel')
    }
  }
}
</script>
