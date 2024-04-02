<template>
  <div class="row h-90vh m-0 p-0 bg-grey">
    <div class="d-none d-lg-flex col-2 h-25vh"></div>
    <ContentProduct/>
    <div class="d-none d-lg-flex col-2 h-25vh"></div>
    <div class="col-2 h-65vh"></div>
    <div class="col-8 h-65vh">
      <div class="row h-65vh pt-5">
        <div v-for="fiture in fitures" :key="fiture" class="col-4">
          <CardFiture :fiture="fiture"/>
        </div>
      </div>
    </div>
    <div class="col-2 h-65vh"></div>
  </div>
</template>

<script>
import ContentProduct from './Product.vue'
import CardFiture from './product/card/fiture.vue'

export default {
  name: 'Content-Main',
  data () {
    return {
      fitures: [
        {
          title: 'OHARA Private Online',
          description: 'Les privat online dengan tutor terbaik untuk topik akademik dan nonakademik',
          items: [
            'Les privat eksklusif dengan tutor terbaik',
            'Bebas atur sesi, jadwal, dan kriteria tutor',
            'Rencana pembelajaran dapat disesuaikan dengan target belajar',
            'Terbuka untuk semua jenjang (SD dan SMP)',
            'Laporan Belajar Terukur'
          ]
        },
        {
          title: 'OHARA Private Offline',
          description: 'Les privat tatap muka dengan tutor terbaik untuk topik akademik dan nonakademik',
          items: [
            'Les privat eksklusif dengan tutor terbaik',
            'Bebas atur sesi, jadwal, tempat belajar, dan kriteria tutor',
            'Rencana pembelajaran dapat disesuaikan dengan target belajar',
            'Terbuka untuk semua jenjang (SD dan SMP)',
            'Laporan Belajar Terukur'
          ]
        }
      ]
    }
  },
  components: {
    ContentProduct,
    CardFiture
  }
}
</script>
