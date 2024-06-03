<template>
  <div class="row h-90vh m-0 p-0 bg-grey">
    <div class="d-flex row m-0 p-0">
      <div class="d-flex h-10vh justify-content-center">
        <b class="fs-1">Tanya Jawab</b>
      </div>
      <div class="d-flex h-80vh justify-content-center">
        <div class="col-10 col-lg-5 h-40vh mt-3 rounded bs-3px bg-info overflow scrollbar-none">
          <div v-for="i in faqs.q.length" :key="i" class="p-2">
            <div class="d-flex justify-content-between">
              <span class="ff-lucida">Q: {{ faqs.q[i - 1] }}</span>
              <span @click.prevent="handleAns(i-1)" class="h-4vh px-2 py-1 rounded-circle c-pointer bg-warning bs-1px">
                <b>{{ faqs.btn[i - 1] }}</b>
              </span>
            </div>
            <div v-if="faqs.isAns[i - 1]" class="text-white">
              <span class="ff-lucida">A: {{ faqs.a[i - 1] }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content-FAQ-Main',
  data () {
    return {
      faqs: {
        isAns: [
          false,
          false,
          false
        ],
        a: [
          'Ohara menyediakan berbagai program bimbingan belajar untuk siswa SD dan SMP. Kami menawarkan bimbingan online dan offline. Selain itu, kami juga menyediakan program pembelajaran rutin dan persiapan ujian sekolah. Setiap program disesuaikan dengan kebutuhan dan gaya belajar masing-masing siswa untuk memastikan hasil belajar yang optimal.',
          'Untuk mendaftar di Ohara, Anda bisa mengunjungi website resmi kami atau datang langsung ke lokasi bimbel kami di Tegal. Pilih program bimbingan yang sesuai dengan kebutuhan Anda (online atau offline). Isi formulir pendaftaran yang tersedia di website atau di kantor kami. Lakukan pembayaran sesuai dengan tarif program yang dipilih. Tim Ohara akan menghubungi Anda untuk konfirmasi dan penjadwalan sesi bimbingan.',
          'Ohara menawarkan tarif yang terjangkau untuk semua program bimbingan kami. Biaya bimbingan belajar kami bervariasi tergantung pada tingkat pendidikan dan jenis program yang dipilih (online atau offline). Untuk informasi lebih lanjut mengenai tarif, Anda bisa mengunjungi website kami atau menghubungi kantor Ohara di Tegal. Kami juga sering menawarkan promo dan diskon khusus untuk pendaftaran baru serta paket bimbingan tertentu.'
        ],
        q: [
          'Apa saja program bimbingan yang ditawarkan oleh Ohara?',
          'Bagaimana cara mendaftar bimbingan belajar di Ohara?',
          'Berapa biaya bimbingan belajar di Ohara?'
        ],
        btn: [
          '+',
          '+',
          '+'
        ]
      }
    }
  },
  components: {
  },
  methods: {
    handleAns (i) {
      this.faqs.isAns[i] = !this.faqs.isAns[i]
      if (this.faqs.btn[i] === '+') {
        this.faqs.btn[i] = '-'
      } else {
        this.faqs.btn[i] = '+'
      }
    }
  }
}
</script>
