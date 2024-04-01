<template>
  <div v-if="isDropdown" class="mt-1 p-1 rounded-3 shadow-sm bg-white">
    <div v-for="option in opstions" :key="option">
      <div
        class="c-pointer"
        @click.prevent="selectDropdown(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content-Product-Dropdown-Category',
  props: ['isDropdown'],
  data () {
    return {
      isSelect: false,
      opstions: ['Kelas 4', 'Kelas 5', 'Kelas 6', 'Kelas 7', 'Kelas 8']
    }
  },
  components: {},
  methods: {
    selectDropdown (selected) {
      this.$emit('selectDropdown', selected)
    }
  }
}
</script>
