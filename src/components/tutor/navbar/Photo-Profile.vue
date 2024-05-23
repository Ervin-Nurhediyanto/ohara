<template>
  <div class="mt-3 d-flex justify-content-center">
    <img :src="PBlank" class="image-pp rounded-4" alt="Photo Profile">
  </div>
</template>

<script>
import PBlank from '../../../assets/PP_Blank.png'

export default {
  name: 'PP-Navbar-Tutor',
  data () {
    return {
      PBlank: PBlank
    }
  },
  components: {},
  computed: {},
  methods: {}
}

</script>
