<template>
  <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
    <table class="h-5vh">
      <tr class="h-5vh text-white ts-dark bg-warning">
        <th class="h-5vh w-3 px-1 border border-2 border-dark">No.</th>
        <th class="h-5vh w-15 px-1 border border-2 border-dark text-center">Name</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Mapel</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Modul</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Schedule</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Status</th>
      </tr>
      <tr v-for="i in tutors.length" :key="i" class="ff-georgia">
        <td class="h-5vh w-3 px-1 border border-2 border-dark">{{ i }}</td>
        <td class="h-5vh w-15 px-1 border border-2 border-dark c-pointer">{{ tutors[i-1].name }}</td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ tutors[i-1].mapel }}</td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark">
          <div class="text-primary text-center c-pointer"><u>check module</u></div>
        </td>
        <td class="h-5vh w-10 m-0 p-0 border border-2 border-dark">
          <div class="text-primary text-center c-pointer"><u>check schedule</u></div>
        </td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark">
          <div class="d-flex m-0 p-0 py-1 justify-content-center"><btn-status :status="tutors[i-1].status"/></div>
        </td>
      </tr>
    </table>
    <div class="h-80vh"></div>
  </div>
</template>

<script>
import BtnStatus from '../data/Status.vue'

export default {
  name: 'Table-Main-Tutor-Admin',
  props: ['tutors'],
  data () {
    return {}
  },
  components: {
    BtnStatus
  },
  computed: {},
  methods: {}
}
</script>
