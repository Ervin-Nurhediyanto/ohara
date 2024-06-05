<template>
  <textarea name="" id="" cols="30" rows="10" :placeholder="placeholder" v-model="data" @change.prevent="handleChange"></textarea>
</template>

<script>
export default {
  name: 'Description',
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
textarea {
  border: none;
  background-color: transparent;
  padding: 5px;
  width: 100%;
  height: 150px;
}
</style>
