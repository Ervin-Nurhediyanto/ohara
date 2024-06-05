<template>
  <div class="row m-0 p-0">
    <div v-for="i in packets.length" :key="i" class="col-12 col-lg-3 h-30vh m-0 p-0">
      <img :src="packets[i-1].image" alt="packet image" class="img c-pointer" @click.prevent="handleClick(packets[i-1])">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Packet-Items',
  props: ['packets'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleClick (data) {
      this.$emit('handleClick', data)
    }
  }
}
</script>
