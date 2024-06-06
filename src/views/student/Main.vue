<template>
  <div class="row m-0 p-0 h-100vh overflow scrollbar-none bg-grey">
    <Navbar :data="data"/>
    <router-view class="col-10"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Navbar from '../../components/student/navbar/Main.vue'

export default {
  name: 'Main-Student',
  data () {
    return {
      data: {}
    }
  },
  components: {
    Navbar
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  mounted () {
    this.findUser({ id: this.userId })
      .then((res) => {
        this.data = res.data.data[0]
      })
  },
  methods: {
    ...mapActions(['findUser'])
  }
}

</script>
