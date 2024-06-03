<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      <div class="col-11 col-lg-3 m-0 p-0">
        <div v-if="!isInsert" class="row m-0 p-0">
          <div class="col-3 col-lg-2 m-0 p-0"><b>Search</b></div>
          <div class="col-2 col-lg-2 m-0 p-0"><input type="text" v-model="search"></div>
        </div>
      </div>
      <div class="col-1 col-lg-1 m-0 p-0 c-pointer">
        <span @click.prevent="handleAdd">
          <b class="d-none d-lg-inline">{{ textBtn[0] }} </b><b>{{ textBtn[1] }}</b>
        </span>
      </div>
    </div>
    <table-student v-if="!isInsert" :student="student" v-on:handleStatus="handleStatus"/>
    <div v-if="isInsert" class="d-flex h-80vh justify-content-center align-items-center">
      <add-student/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TableStudent from './table/Main.vue'
import AddStudent from './add/Main.vue'

export default {
  name: 'Main-Student-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'STUDENT ADMIN',
      search: '',
      isInsert: false,
      textBtn: ['Add', '+'],
      student: []
    }
  },
  components: {
    TableStudent,
    AddStudent
  },
  computed: {},
  mounted () {
    this.getUser()
  },
  methods: {
    ...mapActions(['getUsers']),
    getUser () {
      const data = { roleId: this.roles.student }
      this.getUsers(data)
        .then((res) => {
          this.student = res.data.data
        })
    },
    handleAdd () {
      this.isInsert = !this.isInsert
      if (this.isInsert) {
        this.textBtn = ['Back', '-']
      } else {
        this.textBtn = ['Add', '+']
      }
      this.getUser()
    },
    handleStatus (data) {
      this.student[data.index].status = data.status
    }
  }
}
</script>
