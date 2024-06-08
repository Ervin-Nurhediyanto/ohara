<template>
  <iframe
    allowfullscreen
    :src="video"
    class="video bs-3px rounded-4">
  </iframe>
</template>

<script>

export default {
  name: 'Iframe-Module',
  props: ['video'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style scoped>
.video {
  width: 300px;
  height: 200px;
}

@media screen and (min-width: 800px) {
  .video {
  width: 390px;
  height: 300px;
  }
}

</style>
