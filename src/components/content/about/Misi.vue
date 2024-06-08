<template>
  <div class="col-12 my-2">
    <div class="d-flex justify-content-center align-items-end">
      <b class="fs-1 ff-Impact">{{ title }}</b>
    </div>
    <div class="d-flex row justify-content-center">
      <div v-for="i in text.length" :key="i" class="col-8">{{ i }}. {{ text[i-1] }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Text-Misi',
  data () {
    return {
      title: 'Misi',
      text: [
        'Menyediakan program bimbingan belajar yang terstruktur dan berkualitas untuk tingkat SD hingga SMA/K.',
        'Merekrut dan mengembangkan tim pengajar berkualitas dan berpengalaman.',
        'Terus berinovasi dan melakukan penelitian agar metode pembelajaran tetap relevan dan responsif terhadap perkembangan pendidikan dan teknologi.',
        'Mendorong kerjasama antara orang tua, tutor, dan siswa untuk lingkungan belajar yang inklusif.'
      ]
    }
  },
  components: {}
}
</script>
