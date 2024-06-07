<template>
  <div class="col-12 col-lg-3 h-50vh p-3">
    <div class="d-flex h-40vh p-2 justify-content-center align-items-center c-pointer">
      <img
        :src="image"
        class="h-35vh w-auto border border-1 rounded-4 bs-5px"
        alt="Icon Jadwal"
        @click.prevent="hadleClick('Jadwal-Tutor')">
    </div>
    <div class="d-flex justify-content-center">
      <b>JADWAL</b>
    </div>
  </div>
</template>

<script>
import Ico from '../../../../../assets/icon/jadwal.jpg'

export default {
  name: 'Card-Jadwal-Tutor',
  data () {
    return {
      image: Ico
    }
  },
  components: {},
  computed: {},
  methods: {
    hadleClick (to) {
      this.$router.replace({
        name: to
      })
    }
  }
}
</script>
