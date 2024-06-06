<template>
  <div class="row h-120vh m-0 p-0 bg-faq">
    <div class="d-flex row m-0 p-0">
      <div class="d-flex h-10vh justify-content-center">
        <b class="fs-1">Tanya Jawab</b>
      </div>
      <div class="d-flex h-120vh justify-content-center">
        <div class="col-10 col-lg-5 h-35vh mt-3 rounded bs-3px overflow scrollbar-none">
          <div v-for="i in faqs.q.length" :key="i" class="p-2">
            <question
              :index="i-1"
              :question="faqs.q[i - 1]"
              :symbol="faqs.btn"
              class="ts-white"
              v-on:handleClick="showAnswer"/>
            <answer v-if="faqs.isAns[i - 1]" :answer="faqs.a[i - 1]"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Question from './Question.vue'
import Answer from './Answer.vue'

export default {
  name: 'Content-FAQ-Main',
  data () {
    return {
      faqs: {
        isAns: [],
        btn: [],
        a: [
          'Ohara menyediakan berbagai program bimbingan belajar untuk siswa SD dan SMP. Kami menawarkan bimbingan online dan offline. Selain itu, kami juga menyediakan program pembelajaran rutin dan persiapan ujian sekolah. Setiap program disesuaikan dengan kebutuhan dan gaya belajar masing-masing siswa untuk memastikan hasil belajar yang optimal.',
          'Ya, kami menyediakan materi belajar tambahan seperti modul, latihan soal, dan pembahasan untuk membantu Anda memahami materi dengan lebih baik.',
          'Tim pengajar kami terdiri dari para profesional berpengalaman dan ahli di bidangnya, yang berdedikasi untuk memberikan pendidikan terbaik kepada Anda',
          'Untuk mendaftar di Ohara, Anda bisa mengunjungi website resmi kami atau datang langsung ke lokasi bimbel kami di JL Kurma 3 Kraton, Tegal. Pilih program bimbingan yang sesuai dengan kebutuhan Anda (online atau offline). Isi formulir pendaftaran yang tersedia di website atau di kantor kami. Lakukan pembayaran sesuai dengan tarif program yang dipilih. Tim Ohara akan menghubungi Anda untuk konfirmasi dan penjadwalan sesi bimbingan.',
          'Kami menyediakan ruang kelas yang nyaman, dilengkapi dengan akses internet dan platform pembelajaran online. Selain itu, kami juga memiliki ruang konseling serta berbagai fasilitas belajar lainnya untuk mendukung proses pembelajaran Anda secara optimal.'
        ],
        q: [
          'Apa saja program bimbingan yang ditawarkan oleh Ohara?',
          'Apakah Bimbel Ohara menyediakan materi belajar tambahan?',
          'Siapa saja yang mengajar di Bimbel Ohara?',
          'Bagaimana cara mendaftar bimbingan belajar di Ohara?',
          'Apa saja fasilitas yang tersedia di Bimbel Ohara?'
        ]
      }
    }
  },
  components: {
    Question,
    Answer
  },
  mounted () {
    for (let i = 0; i < this.faqs.q.length; i++) {
      this.faqs.isAns.push(false)
      this.faqs.btn.push('+')
    }
  },
  methods: {
    showAnswer (index) {
      this.faqs.isAns[index] = !this.faqs.isAns[index]
      if (this.faqs.btn[index] === '+') {
        this.faqs.btn[index] = '-'
      } else {
        this.faqs.btn[index] = '+'
      }
    }
  }
}
</script>
