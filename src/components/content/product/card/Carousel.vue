<template>
  <div :class="'carousel-item' + item.style">
    <img :src="item.image" :class="'w-auto ' + style" :alt="alt">
  </div>
</template>

<script>

export default {
  name: 'Content-Card-Carousel',
  props: ['item', 'alt', 'style'],
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>
