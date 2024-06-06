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
      v-if="!isInsert && !isInvoice &&  !isSchedule"
      :student="student"
      v-on:handlePacket="handlePacket"
      v-on:handleSchedule="handleSchedule"
      v-on:handleInvoice="handleInvoice"
      v-on:handleStatus="handleStatus"
    />
    <table-invoice
      v-if="isInvoice"
      :data="select"
      :finances="finances"
      v-on:handleUpload="handleUpload"
      v-on:handleStatus="handleStatusInvoice"
    />
    <table-schedule
      v-if="isSchedule"
      :data="select"
      :schedules="schedules"
      :availableSchedules="availableSchedules"
      v-on:handleDay="handleDay"
      v-on:handleTime="handleTime"
    />
    <add-student v-if="isInsert"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './Nav.vue'
import TableStudent from './table/Main.vue'
import TableInvoice from './invoice/Main.vue'
import TableSchedule from './schedule/Main.vue'
import AddStudent from './add/Main.vue'

export default {
  name: 'Main-Student-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'STUDENT ADMIN',
      isInsert: false,
      isInvoice: false,
      isSchedule: false,
      textBtn: ['Add', '+'],
      student: [],
      select: {},
      finances: [],
      schedules: [],
      availableSchedules: []
    }
  },
  components: {
    Navbar,
    TableStudent,
    TableInvoice,
    TableSchedule,
    AddStudent
  },
  computed: {},
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions([
      'getUsers',
      'getFinances',
      'getSchedules',
      'findUser',
      'findProduct',
      'findPacket',
      'insertSchedule',
      'insertClass',
      'updateFinances',
      'updateSchedule',
      'deleteSchedule'
    ]),
    getUser () {
      const data = { roleId: this.roles.student }
      this.getUsers(data)
        .then((res) => {
          this.student = res.data.data
        })
    },
    handleAdd () {
      if (!this.isInvoice && !this.isSchedule) {
        this.isInsert = !this.isInsert
      }
      if (this.isInvoice) {
        this.isInvoice = !this.isInvoice
      }
      if (this.isSchedule) {
        this.isSchedule = !this.isSchedule
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
    handleSchedule (data) {
      this.isSchedule = !this.isSchedule
      this.textBtn = ['Back', '-']
      this.select = data
      this.handleDataSchedule()
      this.handleAvailabeSchedule()
    },
    handleDataSchedule () {
      this.getSchedules({ studentId: this.select.id })
        .then((res) => {
          this.schedules = res.data.data
        })
    },
    handleAvailabeSchedule () {
      this.getSchedules({ status: 'Available', time: '-' })
        .then((res) => {
          this.availableSchedules = res.data.data
        })
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
          alert('update sukses')
          this.$emit('update')
          this.handleFinance()
          if (data.status === 'Sukses') {
            for (let i = 0; i < 2; i++) {
              this.addSchecule(data)
            }
          }
        })
    },
    handleDay (data) {
      const payload = {
        id: data.data._id,
        data: {
          day: data.day
        }
      }
      this.updateSchedule(payload)
        .then((res) => {
          alert('update sukses')
          this.$emit('update')
          this.handleDataSchedule()
        })
    },
    handleTime (data) {
      const payload = {
        id: data.data._id,
        data: {
          tutorId: data.schedule.tutorId,
          time: data.time,
          status: 'Ongoing'
        }
      }
      this.updateSchedule(payload)
        .then(() => {
          alert('update sukses')
          this.$emit('update')
          this.handleDataSchedule()

          this.findPacket({ id: data.data.productId })
            .then((resPacket) => {
              const packet = resPacket.data.data[0]

              this.findProduct({ id: packet.productId })
                .then((resProduct) => {
                  const product = resProduct.data.data[0]

                  this.findUser({ id: data.schedule.tutorId })
                    .then((resTutor) => {
                      const tutor = resTutor.data.data[0]

                      this.findUser({ id: data.data.studentId })
                        .then((resStudent) => {
                          const student = resStudent.data.data[0]

                          // SESSION
                          let start = new Date().toISOString()
                          let end = new Date(new Date().setDate(new Date().getDate() + 30)).toISOString()

                          const dateStart = new Date(start)
                          const dayStart = dateStart.toLocaleString('default', { day: '2-digit' })
                          const monthStart = dateStart.toLocaleString('default', { month: 'short' })
                          const yearStart = dateStart.toLocaleString('default', { year: 'numeric' })
                          start = dayStart + ' ' + monthStart + ' ' + yearStart

                          const dateEnd = new Date(end)
                          const dayEnd = dateEnd.toLocaleString('default', { day: '2-digit' })
                          const monthEnd = dateEnd.toLocaleString('default', { month: 'short' })
                          const yearEnd = dateEnd.toLocaleString('default', { year: 'numeric' })
                          end = dayEnd + ' ' + monthEnd + ' ' + yearEnd

                          const dataClass = {
                            studentId: data.data.studentId,
                            tutorId: data.schedule.tutorId,
                            productId: packet.productId,
                            packetId: data.data.productId,
                            scheduleId: data.data._id,
                            product: product.name,
                            grade: packet.grade,
                            tutor: tutor.username,
                            student: student.username,
                            mapel: packet.mapel,
                            sesion: `${start} / ${end}`
                          }
                          this.insertClass(dataClass)
                          this.deleteSchedule({ id: data.schedule._id })
                        })
                    })
                })
            })
        })
    },
    addSchecule (data) {
      const payload = {
        studentId: data.data.userId,
        tutorId: '',
        productId: data.data.productId,
        productName: data.data.productName,
        date: '',
        day: '',
        time: '',
        status: 'Available'
      }
      this.insertSchedule(payload)
    },
    handleStatus (data) {
      this.student[data.index].status = data.status
    }
  }
}
</script>
