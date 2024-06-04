<template>
  <div class="col-12 p-1">
    <div class="m-0 p-0">
      <label for=""><b>Description</b></label>
    </div>
    <div class="m-0 p-0 textareaGroup">
      <textarea name="" id="" cols="30" rows="10" v-model="data" @change.prevent="handleChange"></textarea>
    </div>
</div>
</template>

<script>
export default {
  name: 'Text-Area',
  data () {
    return {
      data: ''
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange () {
      this.$emit('handleChange', this.data)
    }
  }
}
</script>

<style scoped>
.textareaGroup {
  font-family: 'Segoe UI', sans-serif;
  margin: 1em 0 1em 0;
  max-width: 500px;
  position: relative;
}

.textareaGroup textarea {
  font-size: 100%;
  padding: 0.8em;
  outline: none;
  border: 2px solid rgb(200, 200, 200);
  background-color: transparent;
  border-radius: 20px;
  width: 100%;
}
</style>
