<template>
  <div class="login-container">
    <form class="login-form">
      <h2>Welcome Back!</h2>
      <div class="input-group">
        <label for="username">Username</label>
        <input type="text" id="username" name="username" v-model="form.username" required>
      </div>
      <div class="input-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" v-model="form.password" required>
      </div>
      <button type="submit" @click.prevent="handleLogin">Login</button>
      <p class="signup-link">Don't have an account?
        <a href="#" @click.prevent="handleRegister">Sign up</a>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters({
      username: 'username'
    })
  },
  methods: {
    ...mapActions(['login', 'findRole']),
    handleLogin () {
      this.login(this.form)
        .then((res) => {
          this.findRole(res.data.data.roleId)
            .then((result) => {
              const role = result.data.data[0].name
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
            })
        })
        .catch(() => {
          alert('Username atau Password salah')
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
.login {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  height: 80%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.login-form h2 {
  text-align: center;
  color: #333333;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  margin-bottom: 5px;
  color: #333333;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #cccccc;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}

.signup-link {
  text-align: center;
  margin-top: 15px;
}

.signup-link a {
  color: #007bff;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
