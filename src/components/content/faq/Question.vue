<template>
  <div class="d-flex justify-content-between">
    <span class="ff-lucida">Q: {{ question }}</span>
    <span @click.prevent="handleClick(index)" class="h-4vh px-2 py-1 rounded-circle c-pointer bg-warning bs-1px">
      <b>{{ symbol[index] }}</b>
    </span>
  </div>
</template>

<script>

export default {
  name: 'Question',
  props: ['index', 'question', 'symbol'],
  data () {
    return {}
  },
  components: {},
  methods: {
    handleClick (index) {
      this.$emit('handleClick', this.index)
    }
  }
}
</script>
