<template>
  <div class="row h-5vh m-0 my-2 p-0">
    <div class="col-4 col-lg-1 d-flex align-items-center">
      <span>{{ label }}</span>
    </div>
    <div class="col-8 col-lg-3 d-flex align-items-center">
      <input type="text" :placeholder="data" v-model="form" class="input-data" @change.prevent="handleChange">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form-Input',
  props: ['label', 'object', 'data'],
  data () {
    return {
      form: ''
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange () {
      this.$emit('handleChange', {
        object: this.object,
        data: this.form
      })
    }
  }
}
</script>

<style scoped>
.input-data {
  width: 180px;
  padding: 2px;
  padding-left: 5px;
}

@media screen and (min-width: 800px) {
  .input-data {
    width: 300px;
    padding: 2px;
    padding-left: 5px;
  }
}
</style>
