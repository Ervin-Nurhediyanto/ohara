<template>
  <div class="row m-0 p-0 h-10vh shadow-sm">
    <Logo v-on:handleMenu="handleMenu"/>
    <div class="d-none d-md-inline d-lg-inline col-md-6 col-lg-8">
      <div class="row h-10vh d-flex align-items-center">
        <div v-for="item in menu" :key="item" class="col-md-2 col-lg-1">
          <span class="c-pointer" @click.prevent="handleMenu(item)">
            <span v-if="select === item" class="text-danger">{{ item }}</span>
            <span v-else>{{ item }}</span>
          </span>
        </div>
      </div>
    </div>
    <Auth/>
  </div>
</template>

<script>
import Logo from './Logo.vue'
import Auth from './Auth.vue'

export default {
  name: 'Navbar-Main',
  data () {
    return {
      select: '',
      menu: [
        'About',
        'FAQ',
        'Produk'
      ]
    }
  },
  components: {
    Logo,
    Auth
  },
  methods: {
    handleMenu (menu) {
      this.$router.replace({
        name: menu
      })
      this.select = menu
    }
  }
}
</script>
