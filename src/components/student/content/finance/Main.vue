<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <div v-if="isSelect" class="h-5vh d-flex align-items-center bg-dark text-white">
        <b class="c-pointer" @click.prevent="handleBack">BACK</b>
      </div>
      <table class="h-5vh m-0 p-0">
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
          <th v-if="finances[i-1].image" class="px-1 border border-1 border-dark text-center">uploaded</th>
          <th v-else class="px-1 border border-1 border-dark text-center">
            <button-upload :id="finances[i-1]._id" v-on:handleChange="handleUpload"/>
          </th>
          <th class="px-1 border border-1 border-dark text-center">{{ finances[i-1].status }}</th>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ButtonUpload from './Button-Upload.vue'

export default {
  name: 'Main-Finance-Student',
  data () {
    return {
      title: 'FINANCE STUDENT',
      finances: [],
      isSelect: false
    }
  },
  components: {
    ButtonUpload
  },
  computed: {
    ...mapGetters({
      userId: 'userId'
    })
  },
  mounted () {
    this.handleFinance()
  },
  methods: {
    ...mapActions(['getFinances', 'updateFinances']),
    handleFinance () {
      this.getFinances({ userId: this.userId })
        .then((res) => {
          this.finances = res.data.data
          this.handleDate()
        })
    },
    handleDate () {
      this.finances.map((item) => {
        const value = item.createdAt
        const date = new Date(value)
        const day = date.toLocaleString('default', { day: '2-digit' })
        const month = date.toLocaleString('default', { month: 'short' })
        const year = date.toLocaleString('default', { year: 'numeric' })
        item.createdAt = day + ' ' + month + ' ' + year
      })
    },
    handleUpload (data) {
      const date = new Date()
      const day = date.toLocaleString('default', { day: '2-digit' })
      const month = date.toLocaleString('default', { month: 'short' })
      const year = date.toLocaleString('default', { year: 'numeric' })
      const datePay = day + ' ' + month + ' ' + year

      const formData = new FormData()
      formData.append('image', data.data, data.data.name)
      formData.append('status', 'Menunggu Konfirmasi')
      formData.append('datePay', datePay)

      const payload = {
        id: data.id,
        data: formData
      }

      this.updateFinances(payload)
        .then((res) => {
          console.log(res.data)
          alert('update sukses')
          this.$emit('update')
          this.handleFinance()
        })
    }
  }
}
</script>
