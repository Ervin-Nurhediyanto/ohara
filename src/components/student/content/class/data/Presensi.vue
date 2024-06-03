<template>
  <tr class="h-5vh">
    <th class="h-5vh w-3 px-1 border border-2 border-dark">{{ no }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">Minggu</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">02-06-2024</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">13.47</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">
      <!-- <img src="" alt=""> -->
    </th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark">Hadir</th>
  </tr>
</template>

<script>

export default {
  name: 'Data-Presensi-Student',
  props: ['no'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    // handlePresensi () {
    //   this.$emit('handleBack')
    // }
  }
}
</script>
