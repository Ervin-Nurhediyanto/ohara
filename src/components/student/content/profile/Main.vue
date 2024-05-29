<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <FPP :Photo="data.photo"/>
      <div class="row h-65vh m-0 p-0 pt-3">
        <!-- USERNAME -->
        <div class="row h-5vh m-0 my-2 p-0">
          <div class="col-4 col-lg-1 d-flex align-items-center">Username</div>
          <div class="col-8 col-lg-3 d-flex align-items-center">
            <input type="text" :placeholder="username" v-model="data.username" class="input-data">
          </div>
        </div>
        <!-- EMAIL -->
        <div class="row h-5vh m-0 my-2 p-0">
          <div class="col-4 col-lg-1 d-flex align-items-center">Email</div>
          <div class="col-8 col-lg-3 d-flex align-items-center">
            <input type="email" :placeholder="email" v-model="data.email" readonly class="input-data">
          </div>
        </div>
        <!-- PHONE -->
        <div class="row h-5vh m-0 my-2 p-0">
          <div class="col-4 col-lg-1 d-flex align-items-center">Phone</div>
          <div class="col-8 col-lg-3 d-flex align-items-center">
            <input type="text" :placeholder="phone" v-model="data.phone" class="input-data">
          </div>
        </div>
        <!-- ADDRESS -->
        <div class="row h-5vh m-0 my-2 p-0">
          <div class="col-4 col-lg-1 d-flex align-items-center">Address</div>
          <div class="col-8 col-lg-3 d-flex align-items-center">
            <input type="text" :placeholder="address" v-model="data.address" class="input-data">
          </div>
        </div>
        <!-- BUTTON UPDATE -->
        <div class="row h-45vh btn-content d-flex py-3">
          <button @click.prevent="update" class="col-4 col-lg-1 mx-2 btn-update">UPDATE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PP from '../../../../assets/icon/profile.jpg'
import FPP from './form/Form-Photo.vue'

export default {
  name: 'Main-Profile-Student',
  data () {
    return {
      title: 'PROFILE STUDENT',
      data: {
        username: '',
        email: 'oioioi@gmail.com',
        phone: '08xxxxx',
        address: 'Jalan jalan',
        photo: PP
      }
    }
  },
  components: {
    FPP
  },
  computed: {
    ...mapGetters({
      username: 'username'
    })
  },
  methods: {
    update () {
      console.log(this.data)
    }
  }
}
</script>

<style scoped>
.input-data {
  width: 180px;
  padding: 2px;
  padding-left: 5px;
}

.btn-update {
  height: 40px;
  background-color: blue;
  color: white;
  font-weight: 500;
  border-radius: 10px;
  border-color: transparent;
  box-shadow: 2px 2px black;
}

.btn-content {
  justify-content: center;
}

@media screen and (min-width: 800px) {
  .input-data {
    width: 300px;
    padding: 2px;
    padding-left: 5px;
  }

  .btn-content {
    justify-content: start;
  }
}
</style>
