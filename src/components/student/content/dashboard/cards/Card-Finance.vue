<template>
  <div class="col-12 col-lg-3 h-50vh p-3">
    <div class="d-flex h-40vh p-2 justify-content-center align-items-center c-pointer">
      <img
        :src="image"
        class="h-35vh w-auto border border-1 rounded-4 bs-5px"
        alt="Icon Select Packet"
        @click.prevent="hadleClick('Finance-Student')">
    </div>
    <div class="d-flex justify-content-center">
      <b>FINANCE</b>
    </div>
  </div>
</template>

<script>
import IcoFinance from '../../../../../assets/icon/finance.jpg'

export default {
  name: 'Card-Finance-Student',
  data () {
    return {
      image: IcoFinance
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
