<template>
  <div class="col-12 col-lg-3 h-50vh p-3">
    <div class="d-flex h-40vh p-2 justify-content-center align-items-center c-pointer">
      <image-dashboard :image="image" :name="name"/>
    </div>
    <div class="d-flex justify-content-center">
      <b>{{ title }}</b>
    </div>
  </div>
</template>

<script>
import ImageDashboard from '../image/Img-Dashboard.vue'

export default {
  name: 'Card-Dashboard',
  props: ['image', 'title', 'name'],
  data () {
    return {}
  },
  components: {
    ImageDashboard
  },
  computed: {},
  methods: {}
}
</script>
