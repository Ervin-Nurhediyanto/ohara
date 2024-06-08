<template>
  <div class="row h-100vh m-0 p-0 bg-grey overflow scrollbar-none">
    <div class="h-5vh d-flex justify-content-center">
      <span class="fs-20px"><b>{{ title }}</b></span>
    </div>
    <div class="Class-Options h-5vh bg-dark">
      <Dropdown title="PILIH KELAS" :items="services" v-on:handleClick="handlePacket"/>
    </div>
    <div class="row h-90vh m-0 p-0 justify-content-center overflow scrollbar-none">
      <div
        v-for="packet in packets"
        :key="packet"
        class="col-11 col-lg-3 h-30vh m-1">
        <image-packet
          :data="packet"
          :image="packet.image"
          v-on:handleClick="handleClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ImagePacket from '../../base/image/Img-Product.vue'
import Dropdown from '../../base/dropdown/Drop-Down.vue'

export default {
  name: 'Packet-Main',
  data () {
    return {
      title: '',
      packets: [],
      services: [
        { title: 'Kelas 4' },
        { title: 'Kelas 5' },
        { title: 'Kelas 6' },
        { title: 'Kelas 7' },
        { title: 'Kelas 8' }
      ]
    }
  },
  components: {
    ImagePacket,
    Dropdown
  },
  mounted () {
    this.handleProduct()
  },
  methods: {
    ...mapActions(['getProducts', 'findProduct', 'getPackets', 'findPacket']),
    handleProduct () {
      this.findProduct({ id: this.$route.query.packet })
        .then((res) => {
          console.log(res.data.data)
          this.title = res.data.data[0].name
        })
    },
    handlePacket (data) {
      this.getPackets({ productId: this.$route.query.packet, grade: data })
        .then((res) => {
          console.log(res.data.data)
          this.packets = res.data.data
        })
    },
    handleClick () {
      this.$router.replace({
        name: 'Login'
      })
    }
  }
}
</script>

<style scoped>
.Class-Options {
  display: flex;
  justify-content: center;
}
</style>
