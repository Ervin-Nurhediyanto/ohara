<template>
  <button
    :class="'btn btn-danger ' + style"
    @click.prevent="handleDropdown">
    {{ display }}
  </button>
</template>

<script>

export default {
  name: 'Content-Product-Button-Categoty',
  props: ['display', 'isDropdown', 'style'],
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
