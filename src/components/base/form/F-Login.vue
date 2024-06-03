<template>
  <!-- <div class="login-container">
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
  </div> -->
  <form>
    <p class="logo">Ohara Bimbel</p>
    <input type="text" placeholder="Username" required="" v-model="form.username">
    <input type="password" placeholder="Password" required="" v-model="form.password">
    <button class="login" @click.prevent="handleLogin">Log In</button>
    <hr/>
    <button class="create-account" @click.prevent="handleRegister">Create New Account</button>
  </form>
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
              // const role = result.data.data[0].name
              const role = result[0].data.data[0].name
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
/* .login {
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
} */

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
  background: #fff;
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
</style>
