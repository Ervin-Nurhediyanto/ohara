<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <div class="col-12 col-lg-9 m-0 p-0">
        <div class="row m-0 p-2 py-2">
          <div v-for="i in data.length" :key="i" class="col-12 col-lg-3 h-40vh m-0 p-1 border border-1 rounded-4 bs-5px bg-grey">
            <span class="d-flex justify-content-center text-white ts-dark"><b>{{ data[i-1].title }}</b></span>
            <div
              v-for="j in data[i-1].packets.length"
              :key="j"
              class="row m-0 mt-1 p-0 c-pointer"
              @click.prevent="handleClick(data[i-1].packets[j-1])"
            >
              <div class="col-12 m-0 p-0 px-1"><b>{{ data[i-1].packets[j-1].productName }}</b></div>
              <div class="col-12 d-flex m-0 p-0 px-1 justify-content-end">{{ data[i-1].packets[j-1].time }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 py-2 border border-3 rounded-4">
        <div class="d-flex justify-content-center mb-3 text-white ts-dark"><b>INFORMASI</b></div>
        <div><b>Tutor: {{ select.tutor }}</b></div>
        <div><b>Hari: {{ select.day }}</b></div>
        <div><b>Waktu: {{ select.time }}</b></div>
        <div><b>Product: {{ select.product }}</b></div>
        <div><b>Paket: {{ select.productName }}</b></div>
        <div><b>Mapel: {{ select.mapel }}</b></div>
        <div><b>Kelas: {{ select.grade }}</b></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Main-Schedule-Student',
  data () {
    return {
      title: 'SCHEDULE STUDENT',
      select: {
        tutor: '',
        day: '',
        time: '',
        product: '',
        packet: '',
        mapel: '',
        grade: ''
      },
      data: [
        { title: 'SENIN', packets: [] },
        { title: 'SELASA', packets: [] },
        { title: 'RABU', packets: [] },
        { title: 'KAMIS', packets: [] },
        { title: 'JUMAT', packets: [] },
        { title: 'SABTU', packets: [] },
        { title: 'MINGGU', packets: [] }
      ]
    }
  },
  components: {},
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  mounted () {
    this.handleGetSchedule()
  },
  methods: {
    ...mapActions([
      'getUser',
      'getSchedules',
      'findProduct',
      'findPacket'
    ]),
    handleGetSchedule () {
      this.getSchedules({ studentId: this.userId, status: 'Ongoing' })
        .then((res) => {
          const data = res.data.data
          data.map((item) => {
            this.checkSchedule(item)
          })
        })
    },
    checkSchedule (data) {
      this.data.map((item) => {
        if (item.title === data.day.toUpperCase()) {
          item.packets.push(data)
        }
      })
    },
    handleClick (data) {
      this.select = data
      this.getUser({ id: data.tutorId })
        .then((res) => {
          this.select.tutor = res.data.data[0].username
        })
      this.findPacket({ id: data.productId })
        .then((res) => {
          this.select.mapel = res.data.data[0].mapel
          this.select.grade = res.data.data[0].grade
          this.findProduct({ id: res.data.data[0].productId })
            .then((result) => {
              this.select.product = result.data.data[0].name
            })
        })
    }
  }
}
</script>
