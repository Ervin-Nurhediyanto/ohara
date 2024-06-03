<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <ico-tut/>
      <ico-stu/>
    </div>
  </div>
</template>

<script>
import IcoTut from './cards/Card-Tutor.vue'
import IcoStu from './cards/Card-Student.vue'

export default {
  name: 'Main-Dashboard-Admin',
  data () {
    return {
      title: 'DASHBOARD ADMIN'
    }
  },
  components: {
    IcoTut,
    IcoStu
  },
  computed: {},
  methods: {}
}
</script>
