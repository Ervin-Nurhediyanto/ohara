<template>
  <div v-if="isSelect" class="row mx-3 p-1">
    <Carousel4th v-if="display == 'Kelas 4'"/>
    <Carousel5th v-if="display == 'Kelas 5'"/>
    <Carousel6th v-if="display == 'Kelas 6'"/>
    <Carousel7th v-if="display == 'Kelas 7'"/>
    <Carousel8th v-if="display == 'Kelas 8'"/>
  </div>
</template>

<script>
import Carousel4th from '../../product/carousel/Grade-4th.vue'
import Carousel5th from '../../product/carousel/Grade-5th.vue'
import Carousel6th from '../../product/carousel/Grade-6th.vue'
import Carousel7th from '../../product/carousel/Grade-7th.vue'
import Carousel8th from '../../product/carousel/Grade-8th.vue'

export default {
  name: 'Content-Product-Carousel-Main',
  props: ['isSelect', 'display'],
  data () {
    return {}
  },
  components: {
    Carousel4th,
    Carousel5th,
    Carousel6th,
    Carousel7th,
    Carousel8th
  },
  methods: {}
}
</script>
