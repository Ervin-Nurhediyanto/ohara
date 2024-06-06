<template>
  <span class="text-primary fs-12px c-pointer" @click.prevent="handleClick">Check Here</span>
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
