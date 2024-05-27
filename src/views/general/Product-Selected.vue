<template>
  <div class="row h-100vh m-0 p-0 bg-grey overflow scrollbar-none">
    <div class="h-5vh d-flex justify-content-center">
      <span class="fs-20px"><b>{{ title }}</b></span>
    </div>
    <div class="Class-Options h-5vh bg-dark">
      <Dropdown title="PILIH KELAS" :items="services" v-on:handleClick="handleSelectedClass"/>
    </div>
    <div class="row h-90vh m-0 p-0 justify-content-center overflow scrollbar-none">
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
    </div>
  </div>
</template>

<script>
import Dropdown from '../../components/base/dropdown/Drop-Down.vue'

export default {
  name: 'Product-Selected',
  data () {
    return {
      title: this.$route.query.packet,
      selectedClass: '',
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
      ],
      products: []
    }
  },
  components: {
    Dropdown
  },
  mounted () {
    const arrTitle = this.title.split('-')
    const title = `${arrTitle[0]} ${arrTitle[1]}`
    this.title = title.toUpperCase()
  },
  methods: {
    handleSelectedClass (data) {
      this.selectedClass = data
      if (this.title === 'PRIVATE OFFLINE') {
        if (data === 'Kelas 4' || data === 'Kelas 5' || data === 'Kelas 6') {
          this.products = [
            {
              title: `${this.title} BULANAN PAKET A`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp280.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} BULANAN PAKET B`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp360.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER PAKET A`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp1.580.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER PAKET B`,
              description: [
                '48 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp2.060.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN PAKET A`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp3.110.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN PAKET B`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp4.070.000',
              class: this.selectedClass
            }
          ]
        } else {
          this.products = [
            {
              title: `${this.title} BULANAN PAKET A`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp360.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} BULANAN PAKET B`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp440.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER PAKET A`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp2.060.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER PAKET B`,
              description: [
                '48 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp2.540.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN PAKET A`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp4.070.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN PAKET B`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Rumah Siswa'
              ],
              cost: 'Rp5.030.000',
              class: this.selectedClass
            }
          ]
        }
      }
      if (this.title === 'PRIVATE ONLINE') {
        if (data === 'Kelas 4' || data === 'Kelas 5' || data === 'Kelas 6') {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp320.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp1.820.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp3.590.000',
              class: this.selectedClass
            }
          ]
        } else {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp400.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp2.300.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Online'
              ],
              cost: 'Rp4.550.000',
              class: this.selectedClass
            }
          ]
        }
      }
      if (this.title === 'KELAS OFFLINE') {
        if (data === 'Kelas 4' || data === 'Kelas 5' || data === 'Kelas 6') {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp240.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp1.340.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp2.630.000',
              class: this.selectedClass
            }
          ]
        } else {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp320.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp1.820.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp3.590.000',
              class: this.selectedClass
            }
          ]
        }
      }
      if (this.title === 'VOUCHER TUGAS') {
        if (data === 'Kelas 4' || data === 'Kelas 5' || data === 'Kelas 6') {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp160.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp860.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp1.670.000',
              class: this.selectedClass
            }
          ]
        } else {
          this.products = [
            {
              title: `${this.title} BULANAN`,
              description: [
                '8 Kali Pertemuan per Bulan',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp200.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} SEMESTER`,
              description: [
                '48 Kali Pertemuan per Semester',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp1.100.000',
              class: this.selectedClass
            },
            {
              title: `${this.title} TAHUNAN`,
              description: [
                '96 Kali Pertemuan per Tahun',
                'Tutor Berkualitas',
                'Lokasi: Ruang Kelas Ohara'
              ],
              cost: 'Rp2.150.000',
              class: this.selectedClass
            }
          ]
        }
      }
    },
    handleSelectedPacket (data) {
      // alert(data)
      this.$router.replace({
        name: 'Login'
      })
    }
  }
}
</script>

<style>
.Class-Options {
  display: flex;
  justify-content: center;
}

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
