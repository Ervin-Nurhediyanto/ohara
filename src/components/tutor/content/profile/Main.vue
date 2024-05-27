<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <FPP :Photo="data.photo"/>
      <div class="col-4 col-lg-1 h-65vh m-0 px-1 py-2">
        <!-- <label class="h-5vh my-1">Username</label>
        <label class="h-5vh my-1">Email</label>
        <label class="h-5vh my-1">No HP</label>
        <label class="h-5vh my-1">Alamat</label> -->
        <div class="h-5vh my-1">Username</div>
        <div class="h-5vh my-1">Email</div>
        <div class="h-5vh my-1">No HP</div>
        <div class="h-5vh my-1">Alamat</div>
      </div>
      <div class="col-8 col-lg-11 h-65vh m-0 px-0 py-2">
        <div class="h-5vh my-1">: <input type="text" :placeholder="username" v-model="data.username"></div>
        <div class="h-5vh my-1">: <input type="text" readonly :placeholder="data.email" v-model="data.email"></div>
        <div class="h-5vh my-1">: <input type="text" :placeholder="data.phone" v-model="data.phone"></div>
        <div class="h-5vh my-1">: <input type="text" :placeholder="data.address" v-model="data.address"></div>
        <div class="col-lg-2 d-flex justify-content-center my-1">
          <button @click.prevent="update">UPDATE</button>
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
  name: 'Main-Profile-Tutor',
  data () {
    return {
      title: 'PROFILE TUTOR',
      data: {
        username: '',
        email: 'cafein@gmail.com',
        phone: '',
        address: '',
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

<style>
/* input {
  width: 300px;
  padding: 10px 15px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 25px;
  transition: all 0.3s ease;
  outline: none;
}
input:focus {
  border-color: #6a5acd;
  box-shadow: 0 0 10px rgba(106, 90, 205, 0.5);
}

label {
  padding: 5px 15px;
} */
</style>
