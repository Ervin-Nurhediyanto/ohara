<template>
  <div class="row m-0 p-0 sticky-top">
    <header class="m-0 p-0 shadow-md bg-blue">
      <Logo class="" v-on:handleMenu="handleMenu"/>
      <input type="checkbox" name="" class="d-flex d-lg-none mx-2 btn-nav" />
      <div class="nav">
        <ol v-for="item in menu" :key="item">
          <li><a href="#" @click.prevent="handleMenu(item.to)">{{ item.title }}</a></li>
        </ol>
      </div>
    </header>
  </div>
</template>

<script>
import Logo from './Logo.vue'

export default {
  name: 'Navbar-Main',
  data () {
    return {
      isMenuBar: false,
      select: '',
      menu: [
        {
          title: 'About',
          to: 'About'
        },
        {
          title: 'FAQ',
          to: 'FAQ'
        },
        {
          title: 'Product',
          to: 'Product'
        },
        {
          title: 'Login',
          to: 'Login'
        }
      ]
    }
  },
  components: {
    Logo
  },
  methods: {
    handleMenu (menu) {
      this.$router.replace({
        name: menu
      })
      this.select = menu
      this.isMenuBar = false
    },
    handleMenuBar () {
      this.isMenuBar = !this.isMenuBar
      this.$emit('handleMenuBar')
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
header {
  width: 100%;
  height: 60px;
  background: #f8f8f8;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.Logo {
  color: rgb(44, 44, 44);
  font-size: 1.5em;
}
.nav {
  display: flex;
  align-items: center;
}
.nav ol {
  display: flex;
  list-style: none;
}
.nav ol li {
  margin: 1em;
}
.nav ol li a {
  text-decoration: none;
  padding: 0.2em 1.2em 0.9em 1.2em;
  border-radius: 10px 10px 0 0;
  color: rgb(39, 39, 39);
  transition: all .4s;
  position: relative;
  z-index: 1;
}
.nav ol li a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 41px;
  border-radius: 10px 10px 0 0;
  background: #853333;
  transform-origin: bottom;
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  transform: scaleY(0.05);
  z-index: -1;
  transition: all .4s;
}
.nav ol li a:hover::before {
  transform: scaleY(1.1);
}
.nav ol li a:hover {
  color: white;
}
.btn-nav {
  background-image: url(../../assets//icon/menu-bar.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 25px;
  height: 25px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  display: none;
}
.btn-nav::before {
  /* content: '\f0c9'; */
  position: absolute;
  top: 0;
  left: 0;
  /* font-family: 'Font Awesome 5 Free'; */
  font-weight: 700;
  font-size: 2em;
}

@media (max-width: 1200px) {
  header {
    justify-content: space-between;
    padding: 0 2em;
  }
  .btn-nav {
    display: flex;
    z-index: 100;
  }
  .nav {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    background: #f8f8f8;
    transform: translateY(-110%);
    transition: all .4s;
  }
  input:checked ~ .nav {
    transform: translateY(0%);
  }
}

@media (max-width: 700px) {
  .nav ol {
    flex-direction: column;
    text-align: center;
  }
}
</style>
