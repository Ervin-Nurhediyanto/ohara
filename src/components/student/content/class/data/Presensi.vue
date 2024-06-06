<template>
  <tr class="h-5vh">
    <th class="h-5vh w-3 px-1 border border-2 border-dark text-center">{{ no }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.day }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.date }}</th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.time }}</th>
    <th class="h-5vh w-10 border border-2 border-dark">
      <div class="row m-0 p-0 justify-content-center">
        <div class="">
          <img :src="data.image" alt="" class="img c-pointer" @click.prevent="openImage(data.image)">
        </div>
      </div>
    </th>
    <th class="h-5vh w-10 px-1 border border-2 border-dark text-center">{{ data.status }}</th>
  </tr>
</template>

<script>

export default {
  name: 'Data-Presensi-Student',
  props: ['no', 'data'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    openImage (url) {
      window.open(url, '_blank').focus()
    }
  }
}
</script>
