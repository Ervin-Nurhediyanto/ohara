<template>
  <input
    type="file"
    multiple
    class="input-file"
    @change.prevent="fileChange"
  />
</template>

<script>
export default {
  name: 'Input File',
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    fileChange (e) {
      const data = e.target.files[0]
      this.$emit('fileChange', data)
    }
  }
}
</script>

<style scoped>
.input-file {
  background-color: blue;
  width: 100px;
  border-color: transparent;
  box-shadow: 2px 2px black;
  font-weight: 400;
}
</style>
