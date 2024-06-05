<template>
  <div>
    <span class="px-1 text-white ts-dark"><b>INVOICE : {{ data.name }}</b></span>
    <table class="h-5vh w-100 m-0 p-0">
      <tr class="m-0 p-0 text-white ts-dark bg-warning">
        <th class="px-1 border border-1 border-dark">No.</th>
        <th class="px-1 border border-1 border-dark text-center">Packet Name</th>
        <th class="px-1 border border-1 border-dark text-center">Price</th>
        <th class="px-1 border border-1 border-dark text-center">Date Reg</th>
        <th class="px-1 border border-1 border-dark text-center">Date Pay</th>
        <th class="px-1 border border-1 border-dark text-center">Payment</th>
        <th class="px-1 border border-1 border-dark text-center">Status</th>
      </tr>
      <!-- DATA -->
      <tr v-for="i in finances.length" :key="i">
        <th class="px-1 border border-1 border-dark">{{ i }}</th>
        <th class="px-1 border border-1 border-dark text-center">{{ finances[i-1].productName }}</th>
        <th class="px-1 border border-1 border-dark text-center">{{ finances[i-1].price }}</th>
        <th class="px-1 border border-1 border-dark text-center">{{ finances[i-1].createdAt }}</th>
        <th class="px-1 border border-1 border-dark text-center">{{ finances[i-1].datePay }}</th>
        <th v-if="finances[i-1].image" class="px-1 border border-1 border-dark text-center">
          <img :src="finances[i-1].image" alt="" class="img w-25 c-pointer" @click.prevent="openImage(finances[i-1].image)">
        </th>
        <th v-else class="px-1 border border-1 border-dark text-center">
          <button-upload :id="finances[i-1]._id" v-on:handleChange="handleUpload"/>
        </th>
        <th class="px-1 border border-1 border-dark text-center">
          <button-status :status="finances[i-1].status" :data="finances[i-1]" v-on:handleChange="handleStatus"/>
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import ButtonUpload from './Button-Upload.vue'
import ButtonStatus from './Button-Status.vue'

export default {
  name: 'Main-Invoice',
  props: ['data', 'finances'],
  data () {
    return {}
  },
  components: {
    ButtonUpload,
    ButtonStatus
  },
  computed: {},
  mounted () {},
  methods: {
    openImage (url) {
      window.open(url, '_blank').focus()
    },
    handleUpload (data) {
      this.$emit('handleUpload', data)
    },
    handleStatus (data) {
      this.$emit('handleStatus', data)
    }
  }
}
</script>

<style scoped>
</style>
