<template>
  <img
    :src="image"
    class="img c-pointer"
    alt="image"
    @click.prevent="handleClick"
  >
</template>

<script>
export default {
  name: 'Image-Product',
  props: ['data', 'image'],
  data () {
    return {}
  },
  components: {},
  methods: {
    handleClick () {
      this.$emit('handleClick', this.data)
    }
  }
}
</script>

<style>
</style>
