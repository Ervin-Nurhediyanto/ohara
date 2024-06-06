<template>
  <div class="mt-3 d-flex justify-content-center">
    <img
      v-if="image"
      :src="image"
      class="image-pp rounded-4"
      alt="Photo Profile"
    >
    <img
      v-else
      :src="PBlank"
      class="image-pp rounded-4"
      alt="Photo Profile"
    >
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PBlank from '../../../assets/PP_Blank.png'

export default {
  name: 'PP-Navbar-Tutor',
  data () {
    return {
      PBlank: PBlank
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      image: 'image'
    })
  },
  methods: {}
}

</script>
