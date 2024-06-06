<template>
  <button @click.prevent="handleClick">
    <span> SUBMIT </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleClick () {
      this.$emit('handleClick')
    }
  }
}
</script>

<style scoped>
button {
 display: inline-block;
 width: 150px;
 height: 35px;
 border-radius: 10px;
 border: 1px solid #03045e;
 position: relative;
 overflow: hidden;
 transition: all 0.5s ease-in;
 z-index: 1;
}

button::before,
button::after {
 content: '';
 position: absolute;
 top: 0;
 width: 0;
 height: 100%;
 transform: skew(15deg);
 transition: all 0.5s;
 overflow: hidden;
 z-index: -1;
}

button::before {
 left: -10px;
 background: #240046;
}

button::after {
 right: -10px;
 background: #5a189a;
}

button:hover::before,
button:hover::after {
 width: 58%;
}

button:hover span {
 color: #e0aaff;
 transition: 0.3s;
}

button span {
 color: #03045e;
 font-size: 18px;
 transition: all 0.3s ease-in;
}
</style>
