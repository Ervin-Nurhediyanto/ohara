<template>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselProduct"
    data-bs-slide="next"
    @click.prevent="handleNextCarousel">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</template>

<script>

export default {
  name: 'Content-Product-Button-Carousel-Next',
  props: [],
  data () {
    return {}
  },
  components: {},
  methods: {
    handleNextCarousel () {
      this.$emit('handleNextCarousel')
    }
  }
}
</script>
