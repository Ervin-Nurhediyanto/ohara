<template>
  <div class="col-12 p-1 selectGroup">
    <div><b>Mata Pelajaran</b></div>
    <select name="" id="" class="" @change.prevent="handleChange">
      <option value="Matematika">Matematika</option>
      <option value="IPA">IPA</option>
      <option value="Bahasa Inggris">Bahasa Inggris</option>
    </select>
</div>
</template>

<script>
export default {
  name: 'Select-Option',
  data () {
    return {}
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
.selectGroup {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 300px;
  position: relative;
}

.selectGroup select {
  font-size: 100%;
  padding: 0.2em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  /* border-radius: 20px; */
  width: 100%;
}
</style>
