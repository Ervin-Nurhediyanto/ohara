<template>
  <div class="col-12 col-lg-3 h-50vh p-3">
    <div class="d-flex h-40vh p-2 justify-content-center align-items-center c-pointer">
      <img
        :src="image"
        class="h-35vh w-auto border border-1 rounded-4 bs-5px"
        alt="Icon Profile"
        @click.prevent="hadleClick('Profile-Student')">
    </div>
    <div class="d-flex justify-content-center">
      <b>PROFILE</b>
    </div>
  </div>
</template>

<script>
import IcoProfile from '../../../../../assets/icon/profile.jpg'

export default {
  name: 'Card-Profile-Student',
  data () {
    return {
      image: IcoProfile
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
