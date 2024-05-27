<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <div class="col-12 m-0 p-0 col-lg-9">
        <div class="row m-0 p-2 py-2">
          <div v-for="i in data.length" :key="i" class="col-12 col-lg-3 h-40vh m-1 p-1 border border-1 rounded-4 bs-3px bg-paper">
            <span class="d-flex justify-content-center text-white ts-dark"><b>{{ data[i-1].title }}</b></span>
            <div v-for="j in data[i-1].packets.length" :key="j" class="row m-0 mt-1 p-0 c-pointer" @click.prevent="handleClick(data[i-1].packets[j-1])">
              <div class="col-6 m-0 p-0 px-1"><b>{{ data[i-1].packets[j-1].name }}</b></div>
              <div class="col-6 d-flex m-0 p-0 px-1 justify-content-center">{{ data[i-1].packets[j-1].time }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-lg-3 py-2 border border-3 rounded-4">
        <div class="d-flex justify-content-center mb-3 text-white ts-dark"><b>INFORMASI</b></div>
        <div><b>Nama: {{ select.name }}</b></div>
        <div><b>Hari: {{ select.day }}</b></div>
        <div><b>Waktu: {{ select.time }}</b></div>
        <div><b>Paket: {{ select.packet }}</b></div>
        <div><b>Lokasi: {{ select.location }}</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main-Jadwal-Tutor',
  data () {
    return {
      title: 'JADWAL TUTOR',
      select: {
        name: '',
        time: '',
        day: '',
        packet: '',
        location: ''
      },
      data: [
        {
          title: 'SENIN',
          packets: [
            {
              name: 'ANAK BAIK',
              time: '15.00 - 16.00',
              day: 'SENIN',
              packet: 'PRIVATE ONLINE',
              location: 'Online'
            }
          ]
        },
        {
          title: 'SELASA',
          packets: [
            {
              name: 'ANAK TELADAN',
              time: '16.00 - 17.00',
              day: 'SELASA',
              packet: 'PRIVATE OFFLINE',
              location: 'Jl. Kemana mana'
            },
            {
              name: 'ANAK SOPAN',
              time: '19.00 - 20.00',
              day: 'SELASA',
              packet: 'KELAS OFFLINE',
              location: 'Ruang Kelas Ohara'
            }
          ]
        }
      ]
    }
  },
  components: {},
  computed: {},
  methods: {
    handleClick (data) {
      this.select = data
    }
  }
}
</script>
