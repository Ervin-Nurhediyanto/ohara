<template>
  <input :placeholder="placeholder" class="input" type="text" v-model="data" @change.prevent="handleChange">
</template>

<script>
export default {
  name: 'Name',
  props: ['placeholder'],
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
input {
  border: none;
  background-color: transparent;
  padding-left: 5px;
}
</style>
