<template>
  <div class="container rounded-4">
    <form-auth
      :inputs="inputs"
      :title="'Register'"
      :text="'Register'"
      v-on:handleChange="handleChange"
      v-on:handleSubmit="handleSubmit"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormAuth from './F-Auth.vue'

export default {
  name: 'Form-Register',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      inputs: [
        {
          id: 'username',
          type: 'text',
          name: 'username',
          placeholder: 'Username'
        },
        {
          id: 'email',
          type: 'email',
          name: 'email',
          placeholder: 'Email'
        },
        {
          id: 'password',
          type: 'password',
          name: 'password',
          placeholder: 'Password'
        },
        {
          id: 'confirm-password',
          type: 'password',
          name: 'confirmPassword',
          placeholder: 'Confirm Password'
        }
      ]
    }
  },
  components: {
    FormAuth
  },
  methods: {
    ...mapActions(['insertUser']),
    handleChange (data) {
      this.form[data.name] = data.data
    },
    handleSubmit () {
      if (this.form.password !== this.form.confirmPassword) {
        alert('Password Tidak Sama')
      } else if (this.form.password.length < 8) {
        alert('Password Terlalu Pendek (Minimal 8 Karakter)')
      } else {
        this.form.role = 'student'
        this.insertUser(this.form)
          .then((res) => {
            alert('REGISTER SUKSES')
            this.$router.replace({
              name: 'Login'
            })
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
