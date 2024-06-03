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
  name: 'Text-Description',
  data () {
    return {
      title: 'About Us',
      text: 'Bimbel ohara adalah bimbingan belajar berbasis teknologi baik offline maupun online dengan metode pembelajaran yang inovatif. Bimbel Ohara menawarkan program yang disesuaikan dengan kebutuhan belajar siswa sesuai jenjang. Menyediakan tutor yang ahli untuk membantu siswa memahami materi, memberikan latihan, dan ujian simulasi. Bimbel ohara memiliki visi berkomitmen untuk membantu siswa mencapai prestasi akademis yang luar biasa. Di OHara, kami percaya bahwa setiap anak memiliki potensi luar biasa untuk meraih kesuksesan.'
    }
  },
  components: {}
}
</script>
