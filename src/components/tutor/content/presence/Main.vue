<template>
  <div class="m-0 p-0">
    <div class="d-flex m-0 p-0 h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 justify-content-center overflow scrollbar-none">
      <div class="col-12 h-5vh m-0 p-0 text-center">
        <dropdown :items="classes" :select="product" :text="'Kelas'" v-on:handleClick="selectProduct"/>
      </div>
      <div class="col-12 h-5vh m-0 p-0 text-center">
        <dropdown :items="classes" :select="student" :text="'Student'" v-on:handleClick="selectStudent"/>
      </div>
      <div class="col-12 h-5vh m-0 p-0 text-center">
        <dropdown :items="classes" :select="status" :text="'Presence'" v-on:handleClick="selectStatus"/>
      </div>
      <div class="col-12 h-15vh m-0 p-0">
        <input-image v-on:handleChange="selectImage"/>
      </div>
      <div class="col-12 h-5vh m-0 p-0 text-center">
        <button-submit v-on:handleClick="handleSubmit"/>
      </div>
      <div class="col-12 h-60vh"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Dropdown from './Dropdown.vue'
import InputImage from './Input-Image.vue'
import ButtonSubmit from './Button.vue'

export default {
  name: 'Main-Presence-Tutor',
  data () {
    return {
      title: 'PRESENCE TUTOR',
      classes: [],
      product: '',
      student: '',
      status: '',
      form: {}
    }
  },
  components: {
    Dropdown,
    InputImage,
    ButtonSubmit
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
    ...mapActions(['getClasses', 'insertPresence', 'updatePresence']),
    handleClass () {
      this.getClasses({ tutorId: this.userId })
        .then((res) => {
          this.classes = res.data.data
        })
    },
    selectProduct (data) {
      this.product = data.option
      this.getClasses({ product: data.option })
        .then((res) => {
          this.classes = res.data.data
        })
    },
    selectStudent (data) {
      this.student = data.option
      this.getClasses({ product: this.product, student: data.option })
        .then((res) => {
          this.form.classId = res.data.data[0]._id
        })
    },
    selectStatus (data) {
      this.form.status = data.option
      this.status = data.option
    },
    selectImage (data) {
      this.form.image = data
    },
    getDayName (dayIndex) {
      const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
      return days[dayIndex]
    },
    formatDate (date) {
      const day = String(date.getDate()).padStart(2, '0')
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const year = date.getFullYear()
      return `${day}-${month}-${year}`
    },
    formatTime (date) {
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${hours}:${minutes}`
    },
    handleSubmit () {
      const now = new Date()
      const data = {
        classId: this.form.classId,
        day: this.getDayName(now.getDay()),
        date: this.formatDate(now),
        time: this.formatTime(now),
        status: this.form.status,
        image: ''
      }
      this.insertPresence(data)
        .then((res) => {
          const formData = new FormData()
          formData.append('image', this.form.image, this.form.image.name)

          const data = {
            id: res.data.data._id,
            data: formData
          }

          this.updatePresence(data)
            .then((res) => {
              alert('Presence Success')
            })
        })
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 1200px) {}
</style>
