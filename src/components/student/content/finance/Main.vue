<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0">
      <!-- HEADER -->
      <div class="col-12 h-5vh m-0 p-0">
        <div class="row h-5vh m-0 p-0 bg-warning text-white ts-dark">
          <span class="d-none d-lg-flex col-lg-1 h-5vh align-items-center border border-1 border-dark fs-finance-header"><b>No.</b></span>
          <span class="d-none d-lg-flex col-lg-3 h-5vh align-items-center border border-1 border-dark"><b>PRODUCT</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>TGL REG</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>TGL PEMBAYARAN</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>BUKTI PEMBAYARAN</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>STATUS</b></span>
        </div>
      </div>
      <!-- DATA -->
      <div class="col-12 h-85vh m-0 p-0 overflow scrollbar-none">
        <div class="row h-5vh m-0 p-0 bg-white text-white ts-dark">
          <span class="d-none d-lg-flex col-lg-1 h-5vh align-items-center border border-1 border-dark fs-finance-header"><b>1</b></span>
          <span class="d-none d-lg-flex col-lg-3 h-5vh align-items-center border border-1 border-dark"><b>PRIVATE ONLINE</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>30-05-2024</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>-</b></span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark">
            <button class="h-3vh p-1 fs-12px">UPLOAD BUKTI</button>
          </span>
          <span class="d-none d-lg-flex col-lg-2 h-5vh align-items-center border border-1 border-dark"><b>PROSES PEMBAYARAN</b></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Main-Finance-Student',
  data () {
    return {
      title: 'FINANCE STUDENT'
    }
  },
  components: {},
  computed: {},
  methods: {}
}
</script>
