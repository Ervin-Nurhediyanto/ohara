<template>
  <div class="dropdown">
    <!-- {{ items }} -->
    <button v-if="select" class="dropdown-button" @click.prevent="handleOption"><b>{{ select }}</b></button>
    <button v-else class="dropdown-button" @click.prevent="handleOption"><b>{{ text }}</b></button>
    <div class="dropdown-content">
      <a href="#" v-for="i in options.length" :key="i" @click.prevent="handleClick(options[i-1])">
        <span>{{ options[i-1] }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: ['data', 'select', 'items', 'text'],
  data () {
    return {
      options: []
    }
  },
  components: {},
  computed: {},
  mounted () {
    this.handleOption()
  },
  methods: {
    handleClick (data) {
      this.$emit('handleClick', { data: this.data, option: data })
    },
    handleOption () {
      this.items.map((item) => {
        if (this.text === 'Kelas') {
          if (this.options.indexOf(item.product) === -1) {
            this.options.push(item.product)
          }
        }
        if (this.text === 'Student') {
          if (this.options.indexOf(item.student) === -1) {
            this.options.push(item.student)
          }
        }
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
  padding: 5px 15px;
  font-size: 16px;
  width: 200px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.dropdown-button:hover {
  background-color: #f1f1f1;
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
