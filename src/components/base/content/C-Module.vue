<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <div class="row d-flex h-5vh align-items-center bg-dark text-white">
        <b class="col-3 col-lg-1">SEARCH</b>
        <input type="text" v-model="search" class="col-4 search-data">
      </div>
      <div class="h-85vh py-2 overflow scrollbar-none">
        <video-module
          v-for="video in videos"
          :key="video" :video="video.link"
          class="mx-2"/>
      </div>
    </div>
  </div>
</template>

<script>
import VideoModule from '../iframe/Frame-Module.vue'

export default {
  name: 'Main-Module-Tutor',
  props: ['title', 'videos'],
  data () {
    return {}
  },
  components: {
    VideoModule
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
.search-data {
  width: 200px;
  padding: 2px;
  padding-left: 5px;
}

@media screen and (min-width: 800px) {
  .search-data {
    width: 300px;
  }
}
</style>
