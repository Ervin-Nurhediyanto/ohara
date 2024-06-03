<template>
  <form class="form">
    <p class="heading">Register Tutor</p>
    <input class="input my-2" placeholder="username" type="text" v-model="form.username">
    <input class="input my-2" placeholder="Password" type="password" v-model="form.password">
    <input class="input my-2" placeholder="Email" type="email" v-model="form.email">
    <button class="btn" @click.prevent="handleReg">Register</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'form',
  props: [''],
  data () {
    return {
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['insertUser']),
    handleReg () {
      this.form.role = 'tutor'
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
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 1px;
  background-color: white;
  padding: 1.5em;
  border-radius: 25px;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
}
.form:hover {
  transform: translateX(-0.5em) translateY(-0.5em);
  border: 1px solid #171717;
  box-shadow: 10px 10px 0px #666666;
}
.heading {
  color: black;
  padding-bottom: 0.5em;
  text-align: center;
  font-weight: bold;
  font-size: 24px;
}
.form .btn {
  margin-top: 2em;
  align-self: center;
  padding: 0.7em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px;
  border: none;
  color: black;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
}
.form .btn:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}
.form .btn:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}
.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
}
.input:hover {
  box-shadow: 6px 6px 0px #969696,
             -3px -3px 10px #ffffff;
}
.input:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0,0,0,0.3);
}
</style>
