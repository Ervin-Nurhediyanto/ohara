<template>
  <div :class="'carousel-item' + item.style">
    <img :src="item.image" class="h-20vh w-auto" :alt="alt">
  </div>
</template>

<script>

export default {
  name: 'Content-Card-Carousel',
  props: ['item', 'alt'],
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>
