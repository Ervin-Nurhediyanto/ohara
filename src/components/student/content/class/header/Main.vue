<template>
  <tr class="h-5vh text-white ts-dark bg-warning">
    <th class="h-5vh w-3 px-1 border border-2 border-dark text-center">No.</th>
    <th class="h-5vh w-15 px-1 border border-2 border-dark text-center">Product</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Class</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Tutor</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Mapel</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Modul</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">Presensi</th>
    <th class="h-5vh w-11 px-1 border border-2 border-dark text-center">Sesion</th>
  </tr>
</template>

<script>
export default {
  name: 'Main-Header-Student',
  props: ['isPresensi'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
