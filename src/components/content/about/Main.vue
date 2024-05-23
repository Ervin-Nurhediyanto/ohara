<template>
  <div class="row h-110vh m-0 p-0">
    <div class="d-flex row m-0 p-0 justify-content-center bg-about">
      <div class="d-flex justify-content-center align-items-end">
        <b class="fs-1 ff-Impact">About Us</b>
      </div>
      <div class="d-flex justify-content-center">
        <span class="col-8">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content-About-Main',
  data () {
    return {
      title: 'About Us',
      text: 'Bimbel OHARA adalah bimbingan belajar berbasis teknologi baik offline maupun online dengan metode pembelajaran yang inovatif. Bimbel OHARA menawarkan program-program yang sesuai dengan kebutuhan belajar siswa sesuai jenjang. Kami menyediakan tutor yang ahli untuk membantu siswa memahami materi, memberikan latihan, dan ujian simulasi. Bimbel ini memiliki visi berkomitmen membantu siswa kami mencapai prestasi akademis yang luar biasa.'
    }
  },
  components: {
  }
}
</script>
