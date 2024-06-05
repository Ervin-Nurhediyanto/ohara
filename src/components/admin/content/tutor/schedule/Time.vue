<template>
  <div class="dropdown">
    <button v-if="select" class="dropdown-button"><b>{{ select }}</b></button>
    <button v-else class="dropdown-button"><b>Pilih Jam</b></button>
    <div class="dropdown-content">
      <a href="#" v-for="i in Times.length" :key="i" @click.prevent="handleClick(Times[i-1])">
        <span>{{ Times[i-1] }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Time',
  props: ['data', 'select'],
  data () {
    return {
      Times: [
        '08.00 - 09.00',
        '09.00 - 10.00',
        '10.00 - 11.00',
        '11.00 - 12.00',
        '13.00 - 14.00',
        '14.00 - 15.00',
        '15.00 - 16.00',
        '17.00 - 18.00',
        '18.00 - 19.00',
        '20.00 - 21.00',
        '21.00 - 22.00',
        '22.00 - 23.00'
      ]
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleClick (data) {
      this.$emit('handleClick', { data: this.data, time: data })
    }
  }
}
</script>

<style scoped>
.dropdown {
  position: relative;
  display: inline-block;
}
.dropdown-button {
  background-color: transparent;
  color: #3498db;
  padding: 15px 20px;
  font-size: 12px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.dropdown-button:hover {
  background-color: transparent;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  border-radius: 5px;
  z-index: 1;
  overflow: hidden;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  font-size: 12px;
}
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;
}
.dropdown-content a:hover {
  background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content {
  display: block;
  opacity: 1;
  transform: translateY(0);
}
</style>
