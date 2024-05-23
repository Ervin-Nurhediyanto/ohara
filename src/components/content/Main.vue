<template>
  <div class="row h-90vh m-0 p-0 overflow scrollbar-none bg-grey">
    <div class="d-none d-lg-flex col-2 col-lg-1 h-25vh bg-success"></div>
    <!-- Normal Mode -->
    <ContentProduct :style="style.normal" :content_h="'h-25vh '" :btn_h="'h-5vh '" :card_h="'h-100vh '"/>
    <!-- Medium Mode -->
    <ContentProduct :style="style.medium" :content_h="'h-60vh '" :btn_h="'h-10vh '" :card_h="'h-50vh '"/>
    <div class="d-none d-lg-flex col-2 col-lg-1 h-25vh bg-dark"></div>
    <div class="d-none d-lg-flex col-2 col-lg-1 h-75vh bg-warning"></div>
    <!-- <div class="col-12 col-md-8 col-lg-8 h-65vh"> -->
    <div class="col-12 col-md-8 col-lg-10 h-75vh bg-info">
      <!-- Normal Mode -->
      <div :class="'row h-65vh pt-5 ' + style.normal">
        <div v-for="fiture in fitures" :key="fiture" class="col-12 col-sm-4 col-md-6 col-lg-4 mb-2">
          <CardFiture :fiture="fiture" :card_h="'h-55vh '" :item_h="'h-4vh'" :btn_h="'h-5vh'"/>
        </div>
      </div>
      <!-- Medium Mode -->
      <div :class="'row h-65vh pt-5 ' + style.medium">
        <div v-for="fiture in fitures" :key="fiture" class="col-12 col-sm-4 col-md-6 col-lg-4 mb-2">
          <CardFiture :fiture="fiture" :card_h="'h-95vh '" :item_h="'h-9vh'" :btn_h="'h-10vh'"/>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-flex col-2 col-lg-1 h-75vh bg-danger"></div>
  </div>
</template>

<script>
import ContentProduct from './Product.vue'
import CardFiture from './product/card/Fiture.vue'

export default {
  name: 'Content-Main',
  data () {
    return {
      style: {
        normal: 'd-flex d-sm-none d-md-flex d-lg-flex ',
        medium: 'd-none d-sm-flex d-md-none d-lg-none '
      },
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
