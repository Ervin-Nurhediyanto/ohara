<template>
  <div class="p-0">
    <Content :isMenuBar="isMenuBar" v-on:handleMenuBar="handleMenuBar"/>
  </div>
</template>

<script>
import Content from '../components/content/home/Main.vue'

export default {
  name: 'Home',
  props: ['isMenuBar'],
  data () {
    return {}
  },
  components: {
    Content
  },
  methods: {
    handleMenuBar () {
      this.$emit('handleMenuBar')
    }
  }
}
</script>
