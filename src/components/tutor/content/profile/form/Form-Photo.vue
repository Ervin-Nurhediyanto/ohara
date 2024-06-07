<template>
  <div class="row h-25vh m-0 p-0">
    <div class="col-12 col-lg-2">
      <div class="row m-0 p-0 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <img v-if="this.data.image" :src="data.image" class="h-20vh w-auto border border-1 rounded-4" alt="Photo Profile">
          <img v-else :src="image" class="h-20vh w-auto border border-1 rounded-4" alt="Photo Profile">
        </div>
        <div class="col-12 d-flex justify-content-center">
          <input type="file" multiple @change="fileChange" class="btn-change mt-2"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BlankPhoto from '../../../../../assets/icon/profile.jpg'

export default {
  name: 'Form-Photo-Profile-Tutor',
  props: ['data'],
  data () {
    return {
      image: BlankPhoto,
      form: {}
    }
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['updateUser']),
    fileChange (e) {
      this.form.image = e.target.files[0]

      const formData = new FormData()
      formData.append('image', this.form.image, this.form.image.name)

      const data = {
        id: this.data._id,
        data: formData
      }
      console.log(data)
      this.updateUser(data)
        .then((res) => {
          console.log(res.data)
          alert('update sukses')
          this.$emit('handleUpdate')
        })
    }
  }
}
</script>

<style scoped>
.btn-change {
  background-color: blue;
  width: 100px;
  border-color: transparent;
  box-shadow: 2px 2px black;
  font-weight: 400;
}
</style>
