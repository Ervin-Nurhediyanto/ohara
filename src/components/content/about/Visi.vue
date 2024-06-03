<template>
  <div class="col-12 my-2">
    <div class="d-flex justify-content-center align-items-end">
      <b class="fs-1 ff-Impact">{{ title }}</b>
    </div>
    <div class="d-flex justify-content-center">
      <span class="col-8">{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Text-Visi',
  data () {
    return {
      title: 'Visi',
      text: 'Menjadi lembaga pendidikan terdepan di Indonesia dalam menyediakan layanan bimbingan belajar yang komprehensif dan inovatif, baik secara offline maupun online, untuk mengoptimalkan potensi dan prestasi akademik siswa di seluruh Indonesia.'
    }
  },
  components: {}
}
</script>
