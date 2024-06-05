<template>
  <div class="col-12 p-1 d-flex justify-content-center">
    <label class="custum-file-upload" for="file">
      <div class="text">
        <span>Upload Bukti Pembayaran</span>
      </div>
      <input type="file" id="file" @change.prevent="handleChange">
    </label>
  </div>
</template>

<script>
export default {
  name: 'Upload',
  props: ['id'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  mounted () {},
  methods: {
    handleChange (e) {
      const data = e.target.files[0]
      this.$emit('handleChange', { id: this.id, data: data })
    }
  }
}
</script>

<style scoped>
.custum-file-upload {
  height: 20px;
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
  padding: 0.8rem;
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
  font-size: 12px;
}

.custum-file-upload input {
  display: none;
}

@media (min-width: 1200px) {
  .custum-file-upload {
    height: 20px;
    width: 200px;
  }
  .custum-file-upload .text span {
    font-weight: 200;
  }
}

</style>
