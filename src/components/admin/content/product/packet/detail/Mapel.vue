<template>
  <select name="" id="" class="" @change.prevent="handleChange">
    <option v-for="i in data.length" :key="i" :value="data[i-1].value">{{ data[i-1].value }}</option>
  </select>
</template>

<script>
export default {
  name: 'Mapel',
  props: ['value'],
  data () {
    return {
      data: [
        { value: this.value },
        { value: 'Matematika' },
        { value: 'IPA' },
        { value: 'Bahasa Inggris' }
      ]
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange (e) {
      const data = e.target.value
      this.$emit('handleChange', data)
    }
  }
}
</script>

<style scoped>
</style>
