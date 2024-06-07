<template>
  <div class="p-0 bg-auth">
    <Content :audio="audio"/>
  </div>
</template>

<script>
import Content from '../../components/content/auth/login/Main.vue'

export default {
  name: 'Auth-Login',
  props: ['audio'],
  data () {
    return {
    }
  },
  components: {
    Content
  },
  methods: {
  }
}
</script>
