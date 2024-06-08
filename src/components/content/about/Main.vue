<template>
  <div class="row h-140vh m-0 p-0 overflow scrollbar-none bg-grey">
    <div class="d-flex row m-0 p-0 justify-content-center">
      <div class="col-12 col-lg-7 about-us bg-about">
        <text-desc/>
        <text-visi/>
        <text-misi/>
      </div>
    </div>
  </div>
</template>

<script>
import TextDesc from './Description.vue'
import TextVisi from './Visi.vue'
import TextMisi from './Misi.vue'

export default {
  name: 'Content-About-Main',
  data () {
    return {}
  },
  components: {
    TextDesc,
    TextVisi,
    TextMisi
  }
}
</script>

<style scoped>
.about-us {
  padding-top: 10px;
}

@media (min-width: 1200px) {
  .about-us {
    padding-top: 100px;
  }
}
</style>
