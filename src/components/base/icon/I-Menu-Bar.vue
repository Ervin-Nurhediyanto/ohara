<template>
  <div class="btn">
    <svg xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      class="h-5vh"
      @click.prevent="handleClick">
      <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
    </svg>
  </div>
</template>

<script>

export default {
  name: 'Icon-Menu-Bar',
  data () {
    return {}
  },
  components: {},
  methods: {
    handleClick () {
      this.$emit('handleClick')
    }
  }
}
</script>

<style>
.btn {
  position: relative;
  width: 25px;
  height: 25px;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
  display: none;
}
.btn::before {
  /* content: '\f0c9'; */
  position: absolute;
  top: 0;
  left: 0;
  /* font-family: 'Font Awesome 5 Free'; */
  font-weight: 700;
  font-size: 2em;
}

@media (max-width: 1200px) {
  .btn {
    display: flex;
    z-index: 100;
  }
  input:checked ~ .nav {
    transform: translateY(0%);
  }
  input:checked::before {
    content: '\f00d';
  }
}
</style>
