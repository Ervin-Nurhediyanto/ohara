<template>
  <div class="row m-0 p-1 d-flex justify-content-between text-white bg-dark">
    <div class="col-11 col-lg-3 m-0 p-0">
      <div v-if="!isInsert && !isSchedule" class="row m-0 p-0">
        <div class="col-3 col-lg-2 m-0 p-0"><b>Search</b></div>
        <div class="col-2 col-lg-2 m-0 p-0 mx-1"><input type="text" v-model="search"></div>
      </div>
    </div>
    <div class="col-1 col-lg-1 m-0 p-0 c-pointer">
      <span @click.prevent="handleClick">
        <b class="d-none d-lg-inline">{{ textBtn[0] }} </b><b>{{ textBtn[1] }}</b>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['isInsert', 'isSchedule', 'textBtn'],
  data () {
    return {
      search: ''
    }
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
