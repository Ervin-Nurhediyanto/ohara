<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <navbar
      :isInsert="isInsert"
      :isSchedule="isSchedule"
      :textBtn="textBtn"
      v-on:handleClick="handleAdd"
    />
    <table-tutor
      v-if="!isInsert && !isSchedule"
      :tutors="tutors"
      v-on:handleModule="handleModule"
      v-on:handleSchedule="handleSchedule"
      v-on:handleStatus="handleStatus"
    />
    <table-schedule
      v-if="isSchedule"
      :data="select"
      :schedules="schedules"
      v-on:handleClick="addSchedule"
      v-on:handleDay="handleDay"
      v-on:handleTime="handleTime"
    />
    <add-tutor v-if="isInsert"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Navbar from './Nav.vue'
import TableTutor from './table/Main.vue'
import TableSchedule from './schedule/Main.vue'
import AddTutor from './add/Main.vue'

export default {
  name: 'Main-Tutor-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'TUTOR ADMIN',
      search: '',
      isInsert: false,
      isSchedule: false,
      textBtn: ['Add', '+'],
      tutors: [],
      select: {},
      schedules: []
    }
  },
  components: {
    Navbar,
    TableTutor,
    TableSchedule,
    AddTutor
  },
  computed: {},
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions([
      'getRoles',
      'getUsers',
      'getSchedules',
      'insertSchedule',
      'updateSchedule'
    ]),
    getUser () {
      const data = { roleId: this.roles.tutor }
      this.getUsers(data)
        .then((res) => {
          this.tutors = res.data.data
        })
    },
    handleAdd () {
      if (!this.isSchedule) {
        this.isInsert = !this.isInsert
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
    handleSchedule (data) {
      this.isSchedule = !this.isSchedule
      this.textBtn = ['Back', '-']
      this.select = data
      this.handleDataSchedule()
    },
    handleDataSchedule () {
      this.getSchedules({ tutorId: this.select.id })
        .then((res) => {
          this.schedules = res.data.data
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
          time: data.time
        }
      }
      this.updateSchedule(payload)
        .then((res) => {
          alert('update sukses')
          this.$emit('update')
          this.handleDataSchedule()
        })
    },
    handleStatus (data) {
      this.tutors[data.index].status = data.status
    },
    addSchedule (data) {
      const payload = {
        studentId: '',
        tutorId: data.id,
        productId: '',
        productName: '',
        date: '',
        day: '',
        time: '',
        status: 'Available'
      }
      this.insertSchedule(payload)
        .then((res) => {
          this.handleDataSchedule()
        })
    }
  }
}
</script>
