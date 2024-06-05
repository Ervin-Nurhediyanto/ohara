<template>
  <div class="col-12 p-1">
    <div>
      <label for="name"><b>Price</b></label>
    </div>
    <div class="">
      <input type="number" required="" autocomplete="off" v-model="data" @change.prevent="handleChange">
    </div>
</div>
</template>

<script>
export default {
  name: 'Price-Packet',
  data () {
    return {
      data: ''
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange () {
      this.$emit('handleChange', this.data)
    }
  }
}
</script>

<style scoped>
</style>
