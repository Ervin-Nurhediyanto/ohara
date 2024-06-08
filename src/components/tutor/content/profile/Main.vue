<template>
  <Content
    :title="title"
    :data="data"
    :inputs="inputs"
    v-on:fileChange="fileChange"
    v-on:handleClick="update"
    v-on:handleChange="handleChange"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Content from '../../../base/content/C-Profile.vue'

export default {
  name: 'Main-Profile-Tutor',
  data () {
    return {
      title: 'PROFILE TUTOR',
      data: {
        username: this.username,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
        image: this.image
      },
      inputs: [
        {
          title: 'Username',
          id: 'username',
          type: 'text',
          name: 'username'
        },
        {
          title: 'Email',
          id: 'email',
          type: 'email',
          name: 'email'
        },
        {
          title: 'Phone Number',
          id: 'phoneNumber',
          type: 'text',
          name: 'phoneNumber'
        },
        {
          title: 'Address',
          id: 'address',
          type: 'text',
          name: 'address'
        }
      ]
    }
  },
  components: {
    Content
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
    fileChange (data) {
      const formData = new FormData()
      formData.append('image', data, data.name)

      const payload = {
        id: this.data._id,
        data: formData
      }
      console.log(payload)
      this.updateUser(payload)
        .then((res) => {
          console.log(res.data)
          alert('update sukses')
          this.user()
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
    handleChange (data) {
      this.data[data.name] = data.data
    }
  }
}
</script>

<style scoped>
</style>
