<template>
  <div class="row h-90vh m-0 p-0 overflow scrollbar-none bg-about">
    <div class="d-flex row m-0 p-0 justify-content-center">
      <text-desc/>
      <text-visi/>
      <text-misi/>
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
