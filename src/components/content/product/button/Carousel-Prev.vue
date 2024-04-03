<template>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselProduct"
    data-bs-slide="prev"
    @click.prevent="handlePrevCarousel">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
</template>

<script>

export default {
  name: 'Content-Product-Button-Carousel-Prev',
  props: [],
  data () {
    return {}
  },
  components: {},
  methods: {
    handlePrevCarousel () {
      this.$emit('handlePrevCarousel')
    }
  }
}
</script>
