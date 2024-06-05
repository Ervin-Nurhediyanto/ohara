<template>
  <div class="row m-0 p-0">
    <add-input v-on:handleChange="changeName"/>
    <add-text-area v-on:handleChange="changeDesc"/>
    <add-select-option v-on:handleChange="changeMapel"/>
    <add-image v-on:handleChange="changeImage"/>
    <add-button :text="'save'" v-on:handleClick="handleSubmit"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AddInput from './Input.vue'
import AddTextArea from './Text-Area.vue'
import AddSelectOption from './Select-Option.vue'
import AddImage from './Image.vue'
import AddButton from './Button.vue'

export default {
  name: 'Add-Product',
  data () {
    return {
      form: {}
    }
  },
  components: {
    AddInput,
    AddTextArea,
    AddSelectOption,
    AddImage,
    AddButton
  },
  computed: {},
  mounted () {},
  methods: {
    ...mapActions(['insertProduct', 'updateProduct']),
    handleSubmit () {
      this.insertProduct({ name: 'productname', description: 'productdesc' })
        .then((res) => {
          const formData = new FormData()
          formData.append('name', this.form.name)
          formData.append('description', this.form.description)
          formData.append('mapel', this.form.mapel)
          formData.append('image', this.form.image, this.form.image.name)

          const data = {
            id: res.data.data._id,
            data: formData
          }

          this.updateProduct(data)
            .then((res) => {
              console.log(res.data)
              alert('update sukses')
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
    changeMapel (data) {
      this.form.mapel = data
    },
    changeImage (data) {
      this.form.image = data
    }
  }
}
</script>
