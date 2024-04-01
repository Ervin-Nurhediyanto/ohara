<template>
  <div v-if="isSelect" class="row h-25vh mx-3 p-1">
    <Carousel4th v-if="display == 'Kelas 4'"/>
    <Carousel5th v-if="display == 'Kelas 5'"/>
  </div>
</template>

<script>
import Carousel4th from '../../product/carousel/Grade-4th.vue'
import Carousel5th from '../../product/carousel/Grade-5th.vue'

export default {
  name: 'Content-Product-Carousel-Main',
  props: ['isSelect', 'display'],
  data () {
    return {}
  },
  components: {
    Carousel4th,
    Carousel5th
  },
  methods: {}
}
</script>
