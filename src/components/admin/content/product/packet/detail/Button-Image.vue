<template>
  <div class="p-1">
    <label class="custum-file-upload" for="file">
      <div class="text">
        <span>Click to upload image</span>
      </div>
      <input type="file" id="file" @change.prevent="handleChange">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Add-Image',
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange (e) {
      const data = e.target.files[0]
      this.$emit('handleChange', data)
    }
  }
}
</script>

<style scoped>
.custum-file-upload {
  height: 40px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 20px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border: 2px dashed #cacaca;
  background-color: rgba(255, 255, 255, 1);
  padding: 0.5rem;
  border-radius: 10px;
  box-shadow: 0px 48px 35px -48px rgba(0,0,0,0.1);
}

.custum-file-upload .text {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custum-file-upload .text span {
  font-weight: 200;
  color: rgba(75, 85, 99, 1);
}

.custum-file-upload input {
  display: none;
}
</style>
