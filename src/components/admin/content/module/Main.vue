<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
      MODULE ADMIN
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main-Module-Admin',
  props: ['roles'],
  data () {
    return {
      title: 'MODULE ADMIN'
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {}
}
</script>
