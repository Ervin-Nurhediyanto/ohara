<template>
  <div class="row m-0 p-0 h-10vh shadow-sm">
    <Logo/>
    <div class="col-8">
      <div class="row h-10vh d-flex align-items-center">
        <div class="col-3"><span class="c-pointer">Produk OHARA</span></div>
        <div class="col-3"><span class="c-pointer">Riwayat Pembelian</span></div>
        <div class="col-3"><span class="c-pointer">Cek Status Pembelian</span></div>
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
    return {}
  },
  components: {
    Logo,
    Auth
  }
}
</script>
