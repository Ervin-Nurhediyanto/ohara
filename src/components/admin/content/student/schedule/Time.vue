<template>
  <div class="dropdown">
    <button v-if="select" class="dropdown-button" @mouseover.prevent="handleOption"><b>{{ select }}</b></button>
    <button v-else class="dropdown-button" @mouseover.prevent="handleOption"><b>Pilih Jam</b></button>
    <div class="dropdown-content">
      <a href="#" v-for="i in times.length" :key="i" @click.prevent="handleClick(times[i-1], schedules[i-1])">
        <span>{{ times[i-1] }}</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Day',
  props: ['data', 'select'],
  data () {
    return {
      times: [],
      schedules: []
    }
  },
  components: {},
  computed: {},
  mounted () {
  },
  methods: {
    ...mapActions(['getSchedules', 'updateSchedule']),
    handleClick (data, schedule) {
      this.$emit('handleClick', { data: this.data, time: data, schedule: schedule })
    },
    handleOption () {
      this.times = []
      this.schedules = []
      this.getSchedules({ status: 'Available', day: this.data.day })
        .then((res) => {
          const data = res.data.data
          data.map((item) => {
            if (this.times.indexOf(item.time) === -1 && item.time !== '') {
              this.times.push(item.time)
              this.schedules.push(item)
            }
          })
        })
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
