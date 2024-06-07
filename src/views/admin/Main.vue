<template>
  <div class="row m-0 p-0 h-100vh overflow scrollbar-none bg-grey">
    <Navbar/>
    <router-view class="col-10" :roles="roles"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from '../../components/admin/navbar/Main.vue'

export default {
  name: 'Main-Admin',
  props: ['audio'],
  data () {
    return {
      roles: {}
    }
  },
  components: {
    Navbar
  },
  computed: {},
  mounted () {
    this.audio.pause()
    let roleTutor = ''
    let roleStudent = ''
    this.getRoles()
      .then((res) => {
        const data = res.data.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].name === 'TUTOR') {
            roleTutor = data[i]._id
          }
          if (data[i].name === 'STUDENT') {
            roleStudent = data[i]._id
          }
        }
        this.roles.tutor = roleTutor
        this.roles.student = roleStudent
      })
  },
  methods: {
    ...mapActions(['getRoles'])
  }
}

</script>
