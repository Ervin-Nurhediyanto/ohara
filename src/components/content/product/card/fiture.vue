<template>
  <div class="h-55vh p-2 border border-2 border-dark rounded-4 shadow-lg">
    <div class="rounded-4">
      <p><b>{{ fiture.title }}</b></p>
      <p class="font-size-10px ">{{ fiture.description }}</p>
    </div>
    <div>
      <ul v-for="item in fiture.items" :key="item" class="h-4vh">
        <li>{{ item }}</li>
      </ul>
    </div>
    <hr>
    <div class="d-flex justify-content-center">
      <button
        class="h-5vh btn btn-success">
        Lihat Paket Belajar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content-Card-Fiture',
  props: ['fiture'],
  data () {
    return {}
  },
  components: {}
}
</script>
