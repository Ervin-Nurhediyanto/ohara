<template>
  <div class="row m-0 p-0 d-flex justify-content-center">
    <div class="col-12 col-lg-3 p-1 d-flex justify-content-center">
      <img v-if="!data.image" :src="PBlank" class="img rounded-4 bs-5px" alt="Photo Profile">
      <img v-else :src="data.image" class="img rounded-4 bs-5px" alt="Photo Profile">
    </div>
    <div class="col-12 col-lg-12 d-flex justify-content-center">
      <span class="ff-georgia">Name: {{ data.username }}</span>
    </div>
    <div class="col-12 col-lg-12 d-flex justify-content-center">
      <span class="ff-georgia">Phone: {{ data.phoneNumber }}</span>
    </div>
    <div class="col-12 col-lg-12 d-flex justify-content-center">
      <span class="ff-georgia">Address: {{ data.address }}</span>
    </div>
  </div>
</template>

<script>
import PBlank from '../../../../../assets/PP_Blank.png'

export default {
  name: 'Profile',
  props: ['data'],
  data () {
    return {
      days: [],
      PBlank: PBlank
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>

<style scoped>
</style>
