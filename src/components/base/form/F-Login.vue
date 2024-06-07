<template>
  <div class="form-login">
    <form-auth
      :inputs="inputs"
      :title="'Ohara Bimbel'"
      :text="'Login'"
      v-on:handleChange="handleChange"
      v-on:handleSubmit="handleSubmit"
    />
    <button-submit
      :text="'Register'"
      class="my-2"
      v-on:handleClick="handleRegister"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FormAuth from './F-Auth.vue'
import ButtonSubmit from '../button/Button-Submit.vue'

export default {
  name: 'Form-Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      inputs: [
        {
          id: 'username',
          type: 'text',
          name: 'username',
          placeholder: 'Username'
        },
        {
          id: 'password',
          type: 'password',
          name: 'password',
          placeholder: 'Password'
        }
      ]
    }
  },
  components: {
    FormAuth,
    ButtonSubmit
  },
  computed: {},
  methods: {
    ...mapActions(['login', 'findRole']),
    handleChange (data) {
      this.form[data.name] = data.data
    },
    handleSubmit () {
      this.login(this.form)
        .then((res) => {
          this.handleRole(res.data.data.roleId)
        })
        .catch(() => {
          alert('Username atau Password salah')
        })
    },
    handleRole (id) {
      this.findRole(id)
        .then((res) => {
          this.handleRouter(res.data.data[0].name)
        })
    },
    handleRouter (role) {
      this.$router.replace({
        name: `Dashboard-${role}`
      })
    },
    handleRegister () {
      this.$router.replace({
        name: 'Register'
      })
    }
  }
}
</script>

<style scoped>
.form-login {
  z-index: 1000;
}
</style>
