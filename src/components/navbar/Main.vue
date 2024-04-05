<template>
  <div class="row m-0 p-0 sticky-top">
    <div class="row m-0 p-0 h-15vh shadow-sm bg-blue">
      <Logo v-on:handleMenu="handleMenu"/>
      <div class="d-none d-sm-inline col-sm-7 col-md-6 col-lg-8">
        <div class="row h-10vh d-flex align-items-center">
          <div v-for="item in menu" :key="item" class="col-sm-2 col-md-2 col-lg-1 mx-1 mt-lg-3">
            <span class="c-pointer" @click.prevent="handleMenu(item.to)">
              <span v-if="select === item.title" class="text-danger"><b>{{ item.title }}</b></span>
              <span v-else><b>{{ item.title }}</b></span>
            </span>
          </div>
        </div>
      </div>
      <Auth v-on:handleMenuBar="handleMenuBar"/>
    </div>
    <MenuBar class="" :isMenuBar="isMenuBar" v-on:handleMenuBar="handleMenuBar"/>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Auth from './Auth.vue'
import MenuBar from './Menu-Bar.vue'

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
        }
      ]
    }
  },
  components: {
    Logo,
    Auth,
    MenuBar
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
