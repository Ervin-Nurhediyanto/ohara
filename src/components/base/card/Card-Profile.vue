<template>
  <div class="row h-25vh m-0 p-0">
    <div class="col-12 col-lg-2">
      <div class="row m-0 p-0 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <image-profile v-if="data.image" :image="data.image"/>
          <image-profile v-else :image="image"/>
        </div>
        <div class="col-12 d-flex mt-2 justify-content-center">
          <input-file v-on:fileChange="fileChange"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageProfile from '../image/Img-Profile.vue'
import InputFile from '../input/I-File.vue'
import Image from '../../../assets/icon/profile.jpg'

export default {
  name: 'Card-Profile',
  props: ['data'],
  data () {
    return {
      image: Image,
      form: {}
    }
  },
  components: {
    ImageProfile,
    InputFile
  },
  computed: {},
  mounted () {},
  methods: {
    fileChange (data) {
      this.$emit('fileChange', data)
    }
  }
}
</script>

<style scoped>
</style>
