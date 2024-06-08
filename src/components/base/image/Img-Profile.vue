<template>
  <img
    :src="image"
    class="h-20vh w-auto border border-1 rounded-4"
    alt="Photo Profile"
  >
</template>

<script>
export default {
  name: 'Image-Profile',
  props: ['image'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
