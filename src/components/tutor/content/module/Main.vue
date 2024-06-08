<template>
  <Content
    :title="title"
    :videos="videos"
  />
</template>

<script>
import Content from '../../../base/content/C-Module.vue'

export default {
  name: 'Main-Module-Tutor',
  data () {
    return {
      title: 'MODULE TUTOR',
      search: '',
      videos: [
        {
          title: 'BELAJAR MATEMATIKA 01',
          link: 'https://www.youtube.com/embed/KAHrh7s6XgQ',
          idTutor: '',
          idPacket: ''
        },
        {
          title: 'BELAJAR MATEMATIKA 02',
          link: 'https://www.youtube.com/embed/3V48p5inOkc',
          idTutor: '',
          idPacket: ''
        },
        {
          title: 'BELAJAR MATEMATIKA 03',
          link: 'https://www.youtube.com/embed/b7VrSXHe1MY',
          idTutor: '',
          idPacket: ''
        }
      ]
    }
  },
  components: {
    Content
  },
  computed: {},
  methods: {}
}
</script>

<style scoped>
</style>
