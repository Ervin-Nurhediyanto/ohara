<template>
  <form class="">
    <p class="logo ts-white">Ohara Bimbel</p>
    <input type="text" placeholder="Username" required="" v-model="form.username">
    <input type="password" placeholder="Password" required="" v-model="form.password">
    <button class="login" @click.prevent="handleLogin">Log In</button>
    <hr/>
    <button class="create-account" @click.prevent="handleRegister">Create New Account</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Template-Form-Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions(['login', 'findRole']),
    handleLogin () {
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
          // const role = result[0].data.data[0].name
          this.handleRouter(res.data.data[0].name)
        })
    },
    handleRouter (role) {
      if (role === 'ADMIN') {
        this.$router.replace({
          name: 'Dashboard-Admin'
        })
      }
      if (role === 'TUTOR') {
        this.$router.replace({
          name: 'Dashboard-Tutor'
        })
      }
      if (role === 'STUDENT') {
        this.$router.replace({
          name: 'Dashboard-Student'
        })
      }
    },
    pageRefresh () {
      this.$router.go(0)
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
.logo {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: #1877f2;
  font-weight: 700;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  width: 300px;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

form input {
  outline: none;
  padding: 0.4rem 0.5rem;
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
}

form input:focus {
  border: 1.8px solid #1877f2;
}

form .login {
  outline: none;
  border: none;
  background: #1877f2;
  padding: 0.8rem 1rem;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  color: #fff;
}

form .login:hover {
  background: #0f71f1;
  cursor: pointer;
}

form a {
  text-decoration: none;
  text-align: center;
  font-size: 0.9rem;
  padding-top: 0.8rem;
  color: #1877f2;
}

form hr {
  background: #f7f7f7;
  margin: 0.5rem;
}

form .create-account {
  outline: none;
  border: none;
  background: #06b909;
  padding: 0.8rem 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
  color: #fff;
  width: 75%;
  margin: 0 auto;
}

form .create-account:hover {
  background: #03ad06;
  cursor: pointer;
}

@media (min-width: 1200px) {
  form {
    margin-top: 50px;
    margin-left: 100px;
  }
}
</style>
