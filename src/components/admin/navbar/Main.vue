<template>
  <div class="col-2 text-white bg-primary">
    <photo-profile/><hr/>
    <div class="d-none d-sm-flex justify-content-center c-default">{{ username }}</div><hr class="d-none d-sm-flex"/>
    <div class="c-pointer">
      <dashboard/>
      <tutor/>
      <student/>
      <product/>
      <logout/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PhotoProfile from './Photo-Profile.vue'
import Dashboard from './Dashboard.vue'
import Tutor from './Tutor.vue'
import Student from './Student.vue'
import Product from './Product.vue'
import Logout from './Logout'

export default {
  name: 'Main-Navbar-Admin',
  data () {
    return {}
  },
  components: {
    PhotoProfile,
    Dashboard,
    Tutor,
    Student,
    Product,
    Logout
  },
  computed: {
    ...mapGetters({
      username: 'username'
    })
  },
  methods: {}
}

</script>
