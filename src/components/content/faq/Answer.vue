<template>
  <div class="mt-2 p-1 text-white border border-1">
    <span class="ff-lucida">A: {{ answer }}</span>
  </div>
</template>

<script>

export default {
  name: 'Answer',
  props: ['answer'],
  data () {
    return {}
  },
  components: {},
  methods: {}
}
</script>
