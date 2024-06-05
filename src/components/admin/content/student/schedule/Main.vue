<template>
  <div>
    <div class="row m-0 p-0 justity-content-between">
      <div class="col px-1 text-white ts-dark"><b>SCHEDULE : {{ data.name }}</b></div>
      <div v-if="isProfile" class="col px-1 text-white ts-dark text-end c-pointer" @click.prevent="handleClose"><b>CLOSE</b></div>
    </div>
    <table v-if="!isProfile" class="h-5vh w-100 m-0 p-0">
      <tr class="m-0 p-0 text-white ts-dark bg-warning">
        <th class="px-1 border border-1 border-dark text-center">No.</th>
        <th class="px-1 border border-1 border-dark text-center">Packet Name</th>
        <th class="px-1 border border-1 border-dark text-center">Day</th>
        <th class="px-1 border border-1 border-dark text-center">Time</th>
        <th class="px-1 border border-1 border-dark text-center">Tutor</th>
        <th class="px-1 border border-1 border-dark text-center">Status</th>
      </tr>
      <!-- DATA -->
      <tr v-for="i in schedules.length" :key="i">
        <th class="px-1 border border-1 border-dark text-center">{{ i }}</th>
        <th class="px-1 border border-1 border-dark text-center">{{ schedules[i-1].productName }}</th>
        <th class="px-1 border border-1 border-dark text-center">
          <option-day
            :select="schedules[i-1].day"
            :data="schedules[i-1]"
            :availableSchedules="availableSchedules"
            v-on:handleClick="handleDay"
          />
        </th>
        <th class="px-1 border border-1 border-dark text-center">
          <option-time
            v-if="schedules[i-1].day"
            :select="schedules[i-1].time"
            :data="schedules[i-1]"
            v-on:handleClick="handleTime"
          />
        </th>
        <th class="px-1 border border-1 border-dark text-center">
          <span
            v-if="schedules[i-1].day && schedules[i-1].time"
            class="c-pointer text-primary"
            @click.prevent="handleTutor(schedules[i-1].tutorId)">Check Tutor</span>
        </th>
        <th class="px-1 border border-1 border-dark text-center">{{ schedules[i-1].status }}</th>
      </tr>
    </table>
    <profile-tutor v-if="isProfile" :data="tutor"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import OptionDay from './Day.vue'
import OptionTime from './Time.vue'
import ProfileTutor from './Profile.vue'

export default {
  name: 'Main-Schedule',
  props: ['data', 'schedules', 'availableSchedules'],
  data () {
    return {
      isProfile: false,
      tutor: {}
    }
  },
  components: {
    OptionDay,
    OptionTime,
    ProfileTutor
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['getUser']),
    handleDay (data) {
      this.$emit('handleDay', data)
    },
    handleTime (data) {
      this.$emit('handleTime', data)
    },
    handleTutor (data) {
      this.isProfile = !this.isProfile
      this.getUser({ id: data })
        .then((res) => {
          this.tutor = res.data.data[0]
        })
    },
    handleClose () {
      this.isProfile = !this.isProfile
    }
  }
}
</script>

<style scoped>
</style>
