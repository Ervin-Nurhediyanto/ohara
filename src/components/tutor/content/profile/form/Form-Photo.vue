<template>
  <div class="row h-25vh m-0 p-0">
    <div class="col-12 col-lg-2">
      <div class="row m-0 p-0 d-flex justify-content-center">
        <div class="col-12 d-flex justify-content-center">
          <img :src="Photo" class="h-20vh w-auto border border-1 rounded-4" alt="Photo Profile">
        </div>
        <div class="col-12 d-flex justify-content-center">
          <button class="btn-change my-1 px-1">Ubah Foto</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form-Photo-Profile-Tutor',
  props: ['Photo'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {}
}
</script>

<style>
.btn-change {
  background-color: azure;
  border-radius: 10px;
  width: 100px;
  border-color: transparent;
  box-shadow: 2px 2px;
}
</style>
