<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <div v-if="isPresensi" class="h-5vh d-flex align-items-center bg-dark text-white">
        <b class="c-pointer" @click.prevent="handleBack">BACK</b>
      </div>
      <table v-if="!isPresensi" class="h-5vh">
        <header-main/>
        <data-main v-for="i in classes.length" :key="i" :index="i" :data="classes[i-1]" v-on:handlePresensi="handlePresensi"/>
      </table>
      <table v-else class="h-5vh">
        <header-presensi />
        <data-presensi v-for="i in dataPresensi.length" :key="i" :no="i" :data="dataPresensi[i-1]"/>
      </table>
      <div class="h-80vh"></div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeaderMain from './header/Main.vue'
import HeaderPresensi from './header/Presensi.vue'
import DataMain from './data/Main.vue'
import DataPresensi from './data/Presensi.vue'

export default {
  name: 'Main-Class-Student',
  data () {
    return {
      title: 'CLASS STUDENT',
      isPresensi: false,
      classes: [],
      // dataPresensi: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      dataPresensi: []
    }
  },
  components: {
    HeaderMain,
    HeaderPresensi,
    DataMain,
    DataPresensi
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  mounted () {
    this.handleClass()
  },
  methods: {
    ...mapActions(['getClasses', 'getPresences']),
    handleClass () {
      const data = { studentId: this.userId }
      this.getClasses(data)
        .then((res) => {
          this.classes = res.data.data
        })
    },
    handlePresensi (data) {
      this.isPresensi = !this.isPresensi
      this.getPresences({ classId: data.id })
        .then((res) => {
          this.dataPresensi = res.data.data
        })
    },
    handleBack () {
      this.isPresensi = !this.isPresensi
    }
  }
}
</script>
