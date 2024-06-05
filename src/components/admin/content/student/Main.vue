<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <navbar
      :isInsert="isInsert"
      :isInvoice="isInvoice"
      :textBtn="textBtn"
      v-on:handleClick="handleAdd"
    />
    <table-student
      v-if="!isInsert && !isInvoice"
      :student="student"
      v-on:handlePacket="handlePacket"
      v-on:handleSchedule="handleSchedule"
      v-on:handleInvoice="handleInvoice"
      v-on:handleStatus="handleStatus"
    />
    <table-invoice
      :data="select"
      :finances="finances"
      v-on:handleUpload="handleUpload"
      v-on:handleStatus="handleStatusInvoice"
    />
    <add-student v-if="isInsert"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './Nav.vue'
import TableStudent from './table/Main.vue'
import TableInvoice from './invoice/Main.vue'
import AddStudent from './add/Main.vue'

export default {
  name: 'Main-Student-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'STUDENT ADMIN',
      isInsert: false,
      isInvoice: false,
      textBtn: ['Add', '+'],
      student: [],
      select: {},
      finances: []
    }
  },
  components: {
    Navbar,
    TableStudent,
    TableInvoice,
    AddStudent
  },
  computed: {},
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions(['getUsers', 'getFinances', 'updateFinances']),
    getUser () {
      const data = { roleId: this.roles.student }
      this.getUsers(data)
        .then((res) => {
          this.student = res.data.data
        })
    },
    handleAdd () {
      if (!this.isInvoice) {
        this.isInsert = !this.isInsert
      } else {
        this.isInvoice = !this.isInvoice
      }
      if (this.textBtn[0] === 'Back') {
        this.textBtn = ['Add', '+']
      } else {
        this.textBtn = ['Back', '-']
      }
      this.getUser()
    },
    handleInvoice (data) {
      this.isInvoice = !this.isInvoice
      this.textBtn = ['Back', '-']
      this.select = data
      this.handleFinance()
    },
    handleFinance () {
      this.getFinances({ userId: this.select.id })
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
    },
    handleStatusInvoice (data) {
      const formData = new FormData()
      formData.append('status', data.status)

      const payload = {
        id: data.data._id,
        data: formData
      }

      this.updateFinances(payload)
        .then((res) => {
          console.log(res.data)
          alert('update sukses')
          this.$emit('update')
          this.handleFinance()
        })
    },
    handleStatus (data) {
      this.student[data.index].status = data.status
    }
  }
}
</script>
