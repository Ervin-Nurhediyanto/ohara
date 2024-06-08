<template>
  <div class="m-0 p-0">
    <div class="d-flex h-10vh justify-content-center align-items-center text-white ts-dark">
      <h3><b>{{ title }}</b></h3>
    </div>
    <div class="row h-90vh m-0 p-0 overflow scrollbar-none">
      <card
        v-for="card in cards"
        :key="card"
        :title="card.title"
        :name="card.name"
        :image="card.image"
      />
    </div>
  </div>
</template>

<script>
import Card from '../card/Card-Dashboard.vue'

export default {
  name: 'Content-Dashboard',
  props: ['title', 'cards'],
  data () {
    return {}
  },
  components: {
    Card
  },
  computed: {},
  methods: {}
}
</script>
