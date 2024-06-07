<template>
  <img
    :src="image"
    class="h-35vh w-auto border border-1 rounded-4 bs-5px"
    alt="Image"
    @click.prevent="hadleClick"
  >
</template>

<script>
export default {
  name: 'Image-Dashboard',
  props: ['image', 'name'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    hadleClick () {
      this.$router.replace({
        name: this.name
      })
    }
  }
}
</script>
