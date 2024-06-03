<template>
  <div class="container rounded-4">
    <form action="#" class="register-form">
      <h2 class="fs-4">Register</h2>
      <hr/>
      <div class="form-group">
        <input type="text" id="username" name="username" placeholder="Username" required v-model="form.username">
      </div>
      <div class="form-group">
        <input type="email" id="email" name="email" placeholder="Email" required v-model="form.email">
      </div>
      <div class="form-group">
        <input type="password" id="password" name="password" placeholder="Password" required v-model="form.password">
      </div>
      <div class="form-group">
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm Password" required v-model="form.confirmPassword">
      </div>
      <button type="submit" @click.prevent="handleClick">Register</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Template-Form-Register',
  data () {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  components: {},
  methods: {
    ...mapActions(['insertUser']),
    handleClick () {
      if (this.form.password !== this.form.confirmPassword) {
        alert('Password Tidak Sama')
      } else {
        this.form.role = 'student'
        this.insertUser(this.form)
          .then((res) => {
            alert('REGISTER SUKSES')
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
.register {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.register-form {
  text-align: center;
}
.form-group {
  margin-bottom: 20px;
}
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
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
</style>
