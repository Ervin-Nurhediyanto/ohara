<template>
  <div class="form-group">
    <input
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-model="data"
      @change.prevent="handleChange"
    >
  </div>
</template>

<script>
export default {
  name: 'Input-Data',
  props: ['id', 'type', 'name', 'placeholder'],
  data () {
    return {
      data: ''
    }
  },
  components: {},
  methods: {
    handleChange () {
      this.$emit('handleChange', { name: this.name, data: this.data })
    }
  }
}
</script>

<style scoped>
input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.form-group {
  margin-bottom: 20px;
}
</style>
