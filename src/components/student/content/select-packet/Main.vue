<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div v-if="!isSelect" class="row m-0 p-0">
      <div class="col-12 h-5vh d-flex justify-content-center align-items-center text-white bg-dark">
        <span><b>PILIH PRODUK</b></span>
      </div>
      <div class="col-12 col-lg-3 h-30vh m-0 p-0" v-for="i in products.length" :key="i">
        <img :src="products[i-1].image" class="img c-pointer" alt="" @click.prevent="select(products[i-1])">
      </div>
    </div>
    <div v-if="isSelect" class="Class-Options d-flex justify-content-between d-flex align-items-center text-white bg-dark">
      <Dropdown title="PILIH KELAS" :items="services" v-on:handleClick="handleClass"/>
      <div class="px-3 c-pointer" @click.prevent="handleBack"><b>BACK</b></div>
    </div>
    <!-- PACKET -->
    <div v-if="isSelect && selectClass !== ''" class="row h-90vh m-0 p-0 d-flex justify-content-center">
      <div v-for="i in optionProduct.length" :key="i" class="col-11 col-lg-3 h-35vh m-1 p-2 rounded-4 bg-white">
        <div class="h-35vh">
          <div class="d-flex justify-content-center"><b>{{ optionProduct[i-1].name }}</b></div>
          <div>{{ selectClass }}</div>
          <div v-for="j in optionProduct[i-1].desc.length" :key="j">
            <div>* {{ optionProduct[i-1].desc[j-1] }}</div>
          </div>
          <div>* Biaya: {{ optionProduct[i-1].cost }}</div>
          <div class="mt-3">
            <button @click.prevent="handleBuy(`${optionProduct[i-1].name} ${selectClass}`)" class="">PILIH</button>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="row h-90vh m-0 p-0 justify-content-center overflow scrollbar-none">
      <div v-for="i in products.length" :key="i" class="col-11 col-lg-3 h-30vh m-1 p-2 rounded-4 bg-white">
        <div class="h-20vh">
          <div class="d-flex justify-content-center"><b>{{ products[i-1].title }}</b></div>
          <div>{{ selectedClass }}</div>
          <div v-for="j in products[i-1].description.length" :key="j">
            <div>* {{ products[i-1].description[j-1] }}</div>
          </div>
          <div>* Biaya: {{ products[i-1].cost }}</div>
        </div>
        <div class="">
          <button @click.prevent="handleSelectedPacket(`${products[i-1].title} ${selectedClass}`)" class="">PILIH</button>
        </div>
      </div>
    </div> -->
    <!-- PACKET -->
    <div class="row h-85vh m-0 p-0 overflow scrollbar-none">
    </div>
  </div>
</template>

<script>
import Product01 from '../../../../assets/card/Private_Offline.png'
import Product02 from '../../../../assets/card/Private_Online.png'
import Product03 from '../../../../assets/card/Kelas_Offline.png'
import Product04 from '../../../../assets/card/Voucher_Tugas.png'
import Dropdown from '../../../../components/base/dropdown/Drop-Down.vue'

export default {
  name: 'Main-Select-Class-Student',
  data () {
    return {
      title: 'SELECT PACKET STUDENT',
      isSelect: false,
      selectProduct: {},
      selectClass: '',
      optionProduct: [],
      products: [
        {
          name: 'Private Offline',
          image: Product01,
          packets: [
            {
              class: 'Kelas 4',
              options: [
                {
                  name: 'PRIVATE OFFLINE BULANAN PAKET A',
                  desc: [
                    '8 Kali Pertemuan per Bulan',
                    'Tutor Berkualitas',
                    'Lokasi: Ruang Kelas Ohara'
                  ],
                  cost: 'Rp280.000'
                },
                {
                  name: 'PRIVATE OFFLINE BULANAN PAKET B',
                  desc: [
                    '8 Kali Pertemuan per Bulan',
                    'Tutor Berkualitas',
                    'Lokasi: Rumah SIswa'
                  ],
                  cost: 'Rp360.000'
                }
              ]
            }
          ]
        },
        {
          name: 'Private Online',
          image: Product02
        },
        {
          name: 'Kelas Offline',
          image: Product03
        },
        {
          name: 'Voucher Tugas',
          image: Product04
        }
      ],
      services: [
        {
          title: 'Kelas 4',
          link: '#'
        },
        {
          title: 'Kelas 5',
          link: '#'
        },
        {
          title: 'Kelas 6',
          link: '#'
        },
        {
          title: 'Kelas 7',
          link: '#'
        },
        {
          title: 'Kelas 8',
          link: '#'
        }
      ]
      // if (this.title === 'PRIVATE OFFLINE') {
      //   if (data === 'Kelas 4' || data === 'Kelas 5' || data === 'Kelas 6') {
      //     this.products = [
      //       {
      //         title: `${this.title} BULANAN PAKET A`,
      //         description: [
      //           '8 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp280.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} BULANAN PAKET B`,
      //         description: [
      //           '8 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp360.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} SEMESTER PAKET A`,
      //         description: [
      //           '48 Kali Pertemuan per Semester',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp1.580.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} SEMESTER PAKET B`,
      //         description: [
      //           '48 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp2.060.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} TAHUNAN PAKET A`,
      //         description: [
      //           '96 Kali Pertemuan per Tahun',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp3.110.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} TAHUNAN PAKET B`,
      //         description: [
      //           '96 Kali Pertemuan per Tahun',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp4.070.000',
      //         class: this.selectedClass
      //       }
      //     ]
      //   } else {
      //     this.products = [
      //       {
      //         title: `${this.title} BULANAN PAKET A`,
      //         description: [
      //           '8 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp360.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} BULANAN PAKET B`,
      //         description: [
      //           '8 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp440.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} SEMESTER PAKET A`,
      //         description: [
      //           '48 Kali Pertemuan per Semester',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp2.060.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} SEMESTER PAKET B`,
      //         description: [
      //           '48 Kali Pertemuan per Bulan',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp2.540.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} TAHUNAN PAKET A`,
      //         description: [
      //           '96 Kali Pertemuan per Tahun',
      //           'Tutor Berkualitas',
      //           'Lokasi: Ruang Kelas Ohara'
      //         ],
      //         cost: 'Rp4.070.000',
      //         class: this.selectedClass
      //       },
      //       {
      //         title: `${this.title} TAHUNAN PAKET B`,
      //         description: [
      //           '96 Kali Pertemuan per Tahun',
      //           'Tutor Berkualitas',
      //           'Lokasi: Rumah Siswa'
      //         ],
      //         cost: 'Rp5.030.000',
      //         class: this.selectedClass
      //       }
      //     ]
      //   }
      // }
    }
  },
  components: {
    Dropdown
  },
  computed: {},
  methods: {
    select (product) {
      this.isSelect = !this.isSelect
      this.selectProduct = product
    },
    handleBack () {
      this.isSelect = !this.isSelect
      this.selectProduct = {}
      this.selectClass = ''
    },
    handleClass (data) {
      this.selectClass = data
      if (this.selectProduct.name === 'Private Offline') {
        const product = this.products[0]
        if (data === 'Kelas 4') {
          this.optionProduct = product.packets[0].options
        }
        console.log(this.optionProduct)
      }
    }
  }
}
</script>

<style>
.menu-item {
  color: #FFF;
  padding: 10px 20px;
  position: relative;
  text-align: center;
  border-bottom: 3px solid transparent;
  display: flex;
  transition: 0.4s;
}

.Class-Options .menu-item.active,
.Class-Options .menu-item:hover {
  background-color: #444;
  border-bottom-color: #FF5858;
}

.Class-Options .menu-item a {
  color: inherit;
  text-decoration: none;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #45a049;
}
</style>
