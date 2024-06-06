<template>
  <tr class="h-5vh">
    <th class="h-5vh px-1 border border-2 border-dark text-center">{{ index }}</th>
    <th class="h-5vh w-15 px-1 border border-2 border-dark text-center">{{ data.product }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.grade }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.tutor }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.mapel }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark fs-12px text-primary text-center">
      <span class="c-pointer">Klik Here</span>
    </th>
    <th class="h-5vh w-10 p-1 border border-2 border-dark">
      <div class="d-flex justify-content-center">
        <btn-presensi v-on:handlePresensi="handlePresensi"/>
      </div>
    </th>
    <th class="h-5vh w-11 px-1 border border-2 border-dark fs-12px text-center">31-05-2024 / 30-06-2024</th>
  </tr>
</template>

<script>
import BtnPresensi from '../presensi/Button.vue'

export default {
  name: 'Data-Class-Student',
  props: ['data', 'index'],
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
