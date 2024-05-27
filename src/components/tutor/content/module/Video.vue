<template>
  <iframe
    allowfullscreen
    :src="video"
    class="video-module bs-3px rounded-4">
  </iframe>
</template>

<script>

export default {
  name: 'Video-Module-Tutor',
  props: ['video'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style>
.video-module {
  width: 300px;
  height: 200px;
}

@media screen and (min-width: 800px) {
  .video-module {
  width: 390px;
  height: 300px;
  }
}

</style>
