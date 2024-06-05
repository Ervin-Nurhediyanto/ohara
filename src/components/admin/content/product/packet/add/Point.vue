<template>
  <div class="col-12 p-1">
    <button @click.prevent="addPoint">Add Point</button>
    <div v-for="i in data.length" :key="i" class="inputGroup">
      <input type="text" required="" autocomplete="off" v-model="data[i-1]" @change.prevent="handleChange">
      <label for="name">Point Description</label>
      <button class="mt-1"  @click.prevent="deletePoint(i-1)">Delete</button>
    </div>
</div>
</template>

<script>
export default {
  name: 'Point-Packet',
  data () {
    return {
      data: []
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange () {
      this.$emit('handleChange', this.data)
    },
    addPoint () {
      this.data.push('')
    },
    deletePoint (index) {
      this.data.splice(index, 1)
    }
  }
}
</script>

<style scoped>
.inputGroup {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 500px;
  position: relative;
}

.inputGroup input {
  font-size: 100%;
  padding: 0.6em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}

.inputGroup label {
  font-size: 100%;
  position: absolute;
  left: 0;
  padding: 0.6em;
  margin-left: 0.5em;
  pointer-events: none;
  transition: all 0.3s ease;
  color: rgb(100, 100, 100);
}

.inputGroup :is(input:focus, input:valid)~label {
  transform: translateY(-50%) scale(.9);
  margin: 0em;
  margin-left: 1.3em;
  padding: 0.4em;
  background-color: #F0F3FF;
}

.inputGroup :is(input:focus, input:valid) {
  border-color: rgb(150, 150, 200);
}
</style>
