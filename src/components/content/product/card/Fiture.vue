<template>
  <div :class="'p-2 border border-2 border-dark rounded-4 shadow-lg ' + card_h">
    <div class="rounded-4">
      <p><b>{{ fiture.title }}</b></p>
      <p class="font-size-10px ">{{ fiture.description }}</p>
    </div>
    <div>
      <ul v-for="item in fiture.items" :key="item" :class="item_h">
        <li class="font-size-12px">{{ item }}</li>
      </ul>
    </div>
    <hr>
    <div class="d-flex justify-content-center">
      <button
        :class="'btn btn-success ' + btn_h">
        Lihat Paket Belajar
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Content-Card-Fiture',
  props: ['fiture', 'style', 'card_h', 'item_h', 'btn_h'],
  data () {
    return {}
  },
  components: {}
}
</script>
