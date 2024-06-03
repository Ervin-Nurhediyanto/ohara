<template>
  <button class="btn-presensi px-2 rounded-3 bs-1px" @click.prevent="handleClick">Check Here</button>
</template>

<script>

export default {
  name: 'Presensi-Button',
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    handleClick () {
      this.$emit('handlePresensi')
    }
  }
}
</script>
<style scoped>
.btn-presensi {
  font-weight: 500;
}
</style>
