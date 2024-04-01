<template>
  <div class="row h-90vh m-0 p-0 bg-grey">
    <div class="col-2 h-25vh"></div>
    <ContentProduct/>
    <div class="col-2 h-25vh"></div>
    <div class="col-2 h-65vh"></div>
    <div class="col-8 h-65vh">
      <div class="row h-65vh pt-5">
        <!-- Card Product 01-->
        <div class="col-4">
          <div class="h-55vh p-2 border border-2 border-dark rounded-4 shadow-lg">
            <div class="rounded-4">
              <p><b>OHARA Private Online</b></p>
              <p class="font-size-10px ">Les privat online dengan tutor terbaik untuk topik akademik dan nonakademik</p>
            </div>
            <div>
              <ul>
                <li>Les privat eksklusif dengan tutor terbaik</li>
                <li>Bebas atur sesi, jadwal, dan kriteria tutor</li>
                <li>Rencana pembelajaran dapat disesuaikan dengan target belajar</li>
                <li>Terbuka untuk semua jenjang (SD dan SMP)</li>
                <li>Laporan Belajar Terukur</li>
              </ul>
            </div>
            <hr>
            <div class="d-flex justify-content-center">
              <button
                class="h-5vh btn btn-success">
                Lihat Paket Belajar
              </button>
            </div>
          </div>
        </div>
        <!-- Card Product 02-->
        <div class="col-4">
          <div class="h-55vh p-2 border border-2 border-dark rounded-4 shadow-lg">
            <div class="rounded-4">
              <p><b>OHARA Private Offline</b></p>
              <p class="font-size-10px ">Les privat tatap muka dengan tutor terbaik untuk topik akademik dan nonakademik</p>
            </div>
            <div>
              <ul>
                <li>Les privat eksklusif dengan tutor terbaik</li>
                <li>Bebas atur sesi, jadwal, tempat belajar, dan kriteria tutor</li>
                <li>Rencana pembelajaran dapat disesuaikan dengan target belajar</li>
                <li>Terbuka untuk semua jenjang (SD dan SMP)</li>
                <li>Laporan Belajar Terukur</li>
              </ul>
            </div>
            <hr>
            <div class="d-flex justify-content-center">
              <button
                class="h-5vh btn btn-success">
                Lihat Paket Belajar
              </button>
            </div>
          </div>
        </div>
        <!-- Card Product 03-->
        <div class="col-4">
          <div class="h-55vh p-2 border border-2 border-dark rounded-4 shadow-lg">
            <div class="rounded-4">
              <p><b>OHARA ...</b></p>
              <p class="font-size-10px ">Les .............................................................. </p>
            </div>
            <div>
              <ul>
                <li>Les ... </li>
                <li>Bebas atur sesi, ... </li>
                <li>Rencana ... </li>
                <li>Terbuka ... </li>
                <li>Laporan ... </li>
                <li>Laporan ... </li>
                <li>Laporan ... </li>
                <li>Laporan ... </li>
                <li>Laporan ... </li>
              </ul>
            </div>
            <hr>
            <div class="d-flex justify-content-center">
              <button
                class="h-5vh btn btn-success">
                Lihat Paket Belajar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2 h-65vh"></div>
  </div>
</template>

<script>
import ContentProduct from './Product.vue'

export default {
  name: 'Content-Main',
  data () {
    return {}
  },
  components: {
    ContentProduct
  }
}
</script>
