<template>
  <div class="row m-0 p-0">
    <Content :roles="roles"/>
  </div>
</template>

<script>
import Content from '../../components/admin/content/student/Main.vue'

export default {
  name: 'Student-Admin',
  props: ['roles'],
  data () {
    return {}
  },
  components: {
    Content
  },
  computed: {},
  methods: {}
}
</script>
