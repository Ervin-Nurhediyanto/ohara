<template>
  <div class="row m-0 p-0">
    <div class="col-12 col-lg-4 m-0 p-0">
      <img :src="packet.image" alt="" class="img">
      <div class="d-flex justify-content-center">
        <button-image v-on:handleChange="handleImage"/>
      </div>
    </div>
    <div class="col-12 col-lg-4 m-0 p-0">
      <div class="row m-0 p-0 my-1 pt-3">
        <div class="col-12 col-lg-4"><b>Packet Name</b>:</div>
        <div class="col-12 col-lg-8"><name :placeholder="packet.name" v-on:handleChange="handleName"/></div>
      </div>
      <div class="row m-0 p-0 my-1">
        <div class="col-12 col-lg-4"><b>Mapel</b>:</div>
        <div class="col-12 col-lg-8"><mapel :value="packet.mapel" v-on:handleChange="handleMapel"/></div>
      </div>
      <div class="row m-0 p-0 my-1">
        <div class="col-12 col-lg-4"><b>Kelas</b>:</div>
        <div class="col-12 col-lg-8"><grade :value="packet.grade" v-on:handleChange="handleGrade"/></div>
      </div>
      <div class="row m-0 p-0 my-1">
        <div class="col-12 col-lg-4"><b>Price</b>:</div>
        <div class="col-12 col-lg-8"><price :placeholder="`Rp${packet.price}`" v-on:handleChange="handlePrice"/></div>
      </div>
      <div class="row m-0 p-0 my-1">
        <div class="col-12 col-lg-4"><b>Description</b>:</div>
        <div class="col-12 col-lg-8">
          <description :placeholder="packet.description" v-on:handleChange="handleDesc"/>
        </div>
      </div>
    </div>
    <div class="col-12 col-lg-4 m-0 p-0">
      <div class="row m-0 p-0 my-1 pt-3">
        <div class="col-12 col-lg-4"><b>Point</b>:</div>
        <div class="col-12 col-lg-8">
          <Point
            v-for="i in packet.points.length"
            class="my-1"
            :key="i"
            :placeholder="`📌 ${packet.points[i-1]}`"
            :index="i-1"
            v-on:handleChange="handlePoint"
          />
        </div>
      </div>
    </div>
    <div class="row m-0 p-0 my-1 d-flex justify-content-center">
      <div class="col-12 col-lg-4 mt-3 d-flex justify-content-center">
        <button-update :text="'update'" v-on:handleClick="handleUpdate"/>
        <button-delete :text="'delete'" v-on:handleClick="handleDelete"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonUpdate from '../../../../../base/button/Button-Update.vue'
import ButtonDelete from '../../../../../base/button/Button-Delete.vue'

import ButtonImage from './Button-Image.vue'
import Name from './Name.vue'
import Mapel from './Mapel.vue'
import Grade from './Grade.vue'
import Price from './Price.vue'
import Description from './Description.vue'
import Point from './Point.vue'

export default {
  name: 'Detail',
  props: ['packet'],
  data () {
    return {
      form: {
        mapel: this.packet.mapel,
        grade: this.packet.grade
      }
    }
  },
  components: {
    ButtonUpdate,
    ButtonDelete,
    ButtonImage,
    Name,
    Mapel,
    Grade,
    Price,
    Description,
    Point
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['updatePacket', 'deletePacket']),
    handleUpdate () {
      const formData = new FormData()
      formData.append('name', this.form.name)
      formData.append('description', this.form.description)
      formData.append('points', this.form.points)
      formData.append('mapel', this.form.mapel)
      formData.append('grade', this.form.grade)
      formData.append('price', this.form.price)
      formData.append('image', this.form.image, this.form.image.name)

      const data = {
        id: this.packet._id,
        data: formData
      }

      this.updatePacket(data)
        .then((res) => {
          console.log(res)
          alert('update packet sukses')
          this.$emit('update', data.id)
        })
    },
    handleDelete () {
      console.log('DELETE PACKET:', this.packet._id)
      this.deletePacket({ id: this.packet._id })
        .then((res) => {
          alert('DELETE SUKSES')
          this.$router.go(0)
        })
    },
    handleImage (data) {
      this.form.image = data
    },
    handleName (data) {
      this.form.name = data
    },
    handleMapel (data) {
      this.form.mapel = data
    },
    handleGrade (data) {
      this.form.grade = data
    },
    handlePrice (data) {
      this.form.price = data.toString()
    },
    handleDesc (data) {
      this.form.description = data
    },
    handlePoint (data) {
      this.form.points = data
    }
  }
}
</script>

<style scoped>
</style>
