<template>
  <Content :title="title" :cards="cards"/>
</template>

<script>
import Profile from '../../../../assets/icon/profile.jpg'
import Module from '../../../../assets/icon/module.jpg'
import Presence from '../../../../assets/icon/presence.jpg'
import Schedule from '../../../../assets/icon/schedule.jpg'
import Content from '../../../base/content/C-Dashboard.vue'

export default {
  name: 'Main-Dashboard-Tutor',
  data () {
    return {
      title: 'DASHBOARD TUTOR',
      cards: [
        {
          title: 'PROFILE',
          name: 'Profile-Tutor',
          image: Profile
        },
        {
          title: 'MODULE',
          name: 'Module-Tutor',
          image: Module
        },
        {
          title: 'PRESENCE',
          name: 'Presence-Tutor',
          image: Presence
        },
        {
          title: 'SCHEDULE',
          name: 'Schedule-Tutor',
          image: Schedule
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
