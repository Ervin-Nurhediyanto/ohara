<template>
  <tr class="h-5vh">
    <th class="h-5vh px-1 border border-2 border-dark">1</th>
    <th class="h-5vh w-15 px-1 border border-2 border-dark">Private Online</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">Kelas 4</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">Tutor Baik</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">Matematika</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark fs-12px text-primary">Klik Here</th>
    <th class="h-5vh w-10 p-1 border border-2 border-dark">
      <div class="d-flex justify-content-center">
        <btn-presensi v-on:handlePresensi="handlePresensi"/>
      </div>
    </th>
    <th class="h-5vh w-11 px-1 border border-2 border-dark">31-05-2024 / 30-06-2024</th>
  </tr>
</template>

<script>
import BtnPresensi from '../presensi/Button.vue'

export default {
  name: 'Data-Class-Student',
  data () {
    return {}
  },
  components: {
    BtnPresensi
  },
  computed: {},
  methods: {
    handlePresensi () {
      this.$emit('handlePresensi')
    }
  }
}
</script>
