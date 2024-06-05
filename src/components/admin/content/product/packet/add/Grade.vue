<template>
  <div class="col-12 p-1 selectGroup">
    <div><b>Kelas</b></div>
    <select name="" id="" class="" @change.prevent="handleChange">
      <option value="Kelas 4" selected>Kelas 4</option>
      <option value="Kelas 5">Kelas 5</option>
      <option value="Kelas 6">Kelas 6</option>
      <option value="Kelas 7">Kelas 7</option>
      <option value="Kelas 8">Kelas 8</option>
    </select>
</div>
</template>

<script>
export default {
  name: 'Grade-Packet',
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
