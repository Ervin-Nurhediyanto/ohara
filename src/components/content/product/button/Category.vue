<template>
  <button
    class="h-5vh btn btn-danger dropdown-toggle"
    @click.prevent="handleDropdown">
    {{ display }}
  </button>
</template>

<script>

export default {
  name: 'Content-Product-Button-Categoty',
  props: ['display', 'isDropdown'],
  data () {
    return {
    }
  },
  components: {},
  methods: {
    handleDropdown () {
      this.$emit('handleDropdown', !this.isDropdown)
    }
  }
}
</script>
