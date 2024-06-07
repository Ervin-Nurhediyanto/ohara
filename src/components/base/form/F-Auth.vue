<template>
  <form action="#" class="form-auth">
    <h2 class="fs-4 title ts-white">{{ title }}</h2><hr/>
    <input-data
      v-for="i in inputs.length"
      :key="i"
      :id="inputs[i-1].id"
      :type="inputs[i-1].type"
      :name="inputs[i-1].name"
      :placeholder="inputs[i-1].placeholder"
      v-on:handleChange="handleChange"
    />
    <button-submit :text="text" v-on:handleClick="handleClick"/>
  </form>
</template>

<script>
import InputData from '../input/I-Data.vue'
import ButtonSubmit from '../button/Button-Submit.vue'

export default {
  name: 'Form-Auth',
  props: ['title', 'inputs', 'text'],
  data () {
    return {}
  },
  components: {
    InputData,
    ButtonSubmit
  },
  methods: {
    handleChange (data) {
      this.$emit('handleChange', data)
    },
    handleClick () {
      this.$emit('handleSubmit')
    }
  }
}
</script>

<style scoped>
.form-auth {
  text-align: center;
}
.title {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  text-align: center;
  color: #1877f2;
  font-weight: 700;
}
</style>
