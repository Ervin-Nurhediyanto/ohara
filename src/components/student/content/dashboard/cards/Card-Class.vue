<template>
  <div class="col-12 col-lg-3 h-50vh p-3">
    <div class="d-flex h-40vh p-2 justify-content-center align-items-center c-pointer">
      <img
        :src="image"
        class="h-35vh w-auto border border-1 rounded-4 bs-5px"
        alt="Icon Class"
        @click.prevent="hadleClick('Class-Student')">
    </div>
    <div class="d-flex justify-content-center">
      <b>CLASS</b>
    </div>
  </div>
</template>

<script>
import IcoClass from '../../../../../assets/icon/class.jpg'

export default {
  name: 'Card-Class-Student',
  data () {
    return {
      image: IcoClass
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
