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
      class: ''
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
    ...mapActions(['getClasses']),
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
          this.class = res.data.data[0]
        })
    },
    selectImage () {},
    handleSubmit () {}
  }
}
</script>

<style scoped>
@media screen and (min-width: 1200px) {}
</style>
