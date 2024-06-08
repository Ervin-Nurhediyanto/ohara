<template>
  <div class="row m-0 p-0">
    <div class="col-12 col-lg-6">
      <name v-on:handleChange="changeName"/>
      <mapel v-on:handleChange="changeMapel"/>
      <grade v-on:handleChange="changeGrade"/>
      <price v-on:handleChange="changePrice"/>
      <image-packet v-on:handleChange="changeImage"/>
    </div>
    <div class="col-12 col-lg-6">
      <description v-on:handleChange="changeDesc"/>
      <point v-on:handleChange="changePoint"/>
    </div>
    <button-add :text="'save'" v-on:handleClick="handleSubmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Name from './Name.vue'
import Description from './Description.vue'
import Point from './Point.vue'
import Mapel from './Mapel.vue'
import Grade from './Grade.vue'
import Price from './Price.vue'
import ImagePacket from './Image.vue'
import ButtonAdd from './Button.vue'

export default {
  name: 'Add-Packet',
  props: ['productId'],
  data () {
    return {
      form: {
        mapel: 'Matematika',
        grade: 'Kelas 4'
      }
    }
  },
  components: {
    Name,
    Description,
    Point,
    Mapel,
    Grade,
    Price,
    ImagePacket,
    ButtonAdd
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['insertPacket', 'updatePacket']),
    handleSubmit () {
      this.insertPacket({ name: 'packetname', description: 'packetdesc', productId: this.productId })
        .then((res) => {
          console.log(this.form)
          const formData = new FormData()
          formData.append('name', this.form.name)
          formData.append('description', this.form.description)
          formData.append('points', this.form.points)
          formData.append('mapel', this.form.mapel)
          formData.append('grade', this.form.grade)
          formData.append('price', this.form.price)
          formData.append('image', this.form.image, this.form.image.name)

          const data = {
            id: res.data.data._id,
            data: formData
          }

          this.updatePacket(data)
            .then((res) => {
              alert('Add Packet sukses')
              this.$emit('update')
            })
        })
    },
    changeName (data) {
      this.form.name = data
    },
    changeDesc (data) {
      this.form.description = data
    },
    changePoint (data) {
      this.form.points = data
    },
    changeMapel (data) {
      this.form.mapel = data
    },
    changeGrade (data) {
      this.form.grade = data
    },
    changePrice (data) {
      this.form.price = data.toString()
    },
    changeImage (data) {
      this.form.image = data
    }
  }
}
</script>
