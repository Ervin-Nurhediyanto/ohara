<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <form-photo :data="data" v-on:handleUpdate="handleUpdate"/>
      <div class="row h-65vh m-0 p-0 pt-3">
        <form-input :label="'username'" :object="'username'" :data="data.username" v-on:handleChange="handleChange"/>
        <form-input :label="'email'" :object="'email'" :data="data.email" v-on:handleChange="handleChange"/>
        <form-input :label="'phone'" :object="'phoneNumber'" :data="data.phoneNumber" v-on:handleChange="handleChange"/>
        <form-input :label="'address'" :object="'address'" :data="data.address" v-on:handleChange="handleChange"/>
        <div class="row h-45vh d-flex m-0 p-0 px-lg-2 btn-update">
          <div class="col-lg-2">
            <btn-update :text="'UPDATE'" v-on:handleClick="update"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PP from '../../../../assets/icon/profile.jpg'
import FormPhoto from './form/Form-Photo.vue'
import FormInput from './form/Form-Input.vue'
import BtnUpdate from '../../../base/button/Button-Submit.vue'

export default {
  name: 'Main-Profile-Tutor',
  data () {
    return {
      title: 'PROFILE STUDENT',
      data: {
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        image: this.image
      },
      photo: PP
    }
  },
  components: {
    FormPhoto,
    FormInput,
    BtnUpdate
  },
  computed: {
    ...mapGetters({
      userId: 'userId',
      username: 'username',
      email: 'email',
      phoneNumber: 'phoneNumber',
      address: 'address',
      image: 'image'
    })
  },
  mounted () {
    this.user()
  },
  methods: {
    ...mapActions(['findUser', 'updateUser']),
    user () {
      this.findUser({ id: this.userId })
        .then((res) => {
          this.data = res.data.data[0]
        })
    },
    update () {
      const formData = new FormData()
      formData.append('username', this.data.username)
      formData.append('email', this.data.email)
      formData.append('phoneNumber', this.data.phoneNumber)
      formData.append('address', this.data.address)

      const data = {
        id: this.userId,
        data: formData
      }
      this.updateUser(data)
        .then((res) => {
          alert('update sukses')
          this.user()
        })
    },
    handleUpdate () {
      this.user()
    },
    handleChange (data) {
      this.data[data.object] = data.data
    }
  }
}
</script>

<style scoped>
.btn-update {
  justify-content: center;
}

@media screen and (min-width: 1200px) {
  .btn-update {
    justify-content: start;
  }
}
</style>
