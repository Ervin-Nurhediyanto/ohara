<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <card :data="data" v-on:fileChange="fileChange"/>
      <div class="row h-65vh m-0 p-0 pt-3">
        <div class="col-12 col-lg-3">
          <div v-for="input in inputs" :key="input" class="row">
            <div>{{ input.title }}</div>
            <input-data
              :id="input.id"
              :type="input.text"
              :name="input.name"
              :placeholder="data[input.name]"
              v-on:handleChange="handleChange"/>
          </div>
        </div>
        <div class="row h-45vh d-flex m-0 p-0">
          <div class="col-6 col-lg-2">
            <button-submit :text="'UPDATE'" v-on:handleClick="handleClick"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '../card/Card-Profile.vue'
import InputData from '../input/I-Data.vue'
import ButtonSubmit from '../button/Button-Submit.vue'

export default {
  name: 'Content-Profile',
  props: ['title', 'data', 'inputs'],
  data () {
    return {}
  },
  components: {
    Card,
    InputData,
    ButtonSubmit
  },
  computed: {},
  mounted () {},
  methods: {
    fileChange (data) {
      this.$emit('fileChange', data)
    },
    handleClick () {
      this.$emit('handleClick')
    },
    handleChange (data) {
      this.$emit('handleChange', data)
    }
  }
}
</script>

<style scoped>
</style>
