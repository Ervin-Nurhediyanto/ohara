<template>
  <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
    <table class="h-5vh">
      <tr class="h-5vh text-white ts-dark bg-warning">
        <th class="h-5vh w-3 px-1 border border-2 border-dark">No.</th>
        <th class="h-5vh w-15 px-1 border border-2 border-dark text-center">Name</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Packet</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Schedule</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Invoice</th>
        <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Status</th>
      </tr>
      <tr v-for="i in student.length" :key="i" class="ff-georgia">
        <td class="h-5vh w-3 px-1 border border-2 border-dark">{{ i }}</td>
        <td class="h-5vh w-15 px-1 border border-2 border-dark c-pointer">{{ student[i-1].username }}</td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark">
          <div class="text-primary text-center c-pointer">check packet</div>
        </td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark">
          <div class="text-primary text-center c-pointer">check schedule</div>
        </td>
        <td class="h-5vh w-10 m-0 p-0 border border-2 border-dark">
          <div class="d-flex m-0 p-0 py-1 justify-content-center">
            <div class="text-primary text-center c-pointer" @click.prevent="handleInvoice(student[i-1])">check invoice</div>
          </div>
        </td>
        <td class="h-5vh w-10 px-1 border border-2 border-dark">
          <div class="d-flex m-0 p-0 py-1 justify-content-center">
            <btn-status :index="i-1" :status="student[i-1].status" :data="student[i-1]" v-on:handleStatus="handleStatus"/>
          </div>
        </td>
      </tr>
    </table>
    <div class="h-80vh"></div>
  </div>
</template>

<script>
import BtnStatus from '../data/Status.vue'

export default {
  name: 'Table-Student-Admin',
  props: ['student'],
  data () {
    return {}
  },
  components: {
    BtnStatus
  },
  computed: {},
  mounted () {},
  methods: {
    handleInvoice (data) {
      this.$emit('handleInvoice', { name: data.username, id: data._id })
    },
    handleStatus (data) {
      this.$emit('handleStatus', data)
    }
  }
}
</script>

<style scoped>
</style>
