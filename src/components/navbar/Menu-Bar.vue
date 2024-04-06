<template>
  <div v-if="isMenuBar" class="d-inline d-sm-none p-0 m-0 bg-transparent">
    <div
      v-for="item in menu_bar"
      :key="item"
      class="d-flex row p-0 m-0 justify-content-end bg-transparent">
      <div
        class="col-3 px-3 py-1 bg-orange border border-1 rounded-4 shadow-sm text-center"
        @click.prevent="handleMenu(item.to)">
        <span class="text-white">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Menu-Bar',
  props: ['isMenuBar'],
  data () {
    return {
      menu_bar: [
        {
          title: 'Login',
          to: 'Login'
        },
        {
          title: 'About',
          to: 'About'
        },
        {
          title: 'FAQ',
          to: 'FAQ'
        },
        {
          title: 'Product',
          to: 'Product'
        }
      ]
    }
  },
  components: {},
  methods: {
    handleMenu (menu) {
      this.$router.replace({
        name: menu
      })
      this.select = menu
      this.$emit('handleMenuBar')
    }
  }
}
</script>
