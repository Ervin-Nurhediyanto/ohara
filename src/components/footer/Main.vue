<template>
  <!-- <div class="row m-0 p-0 text-white bg-dark"> -->
  <div class="row m-0 p-0 text-white bg-footer">
    <div class="d-flex row m-0 p-0 h-25vh justify-content-center">
      <div class="col-lg-8 m-0 p-0">
        <div class="row h-20vh m-0 p-0">
          <TFL/>
          <TFC/>
          <TFR/>
          <div class="d-flex col-lg-12 h-5vh m-0 p-2 justify-content-end">
            <div class="mx-2">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </div>
            <div class="mx-2">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </div>
            <div class="mx-2">
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TFL from './template/T-F-Left.vue'
import TFC from './template/T-F-Center.vue'
import TFR from './template/T-F-Right.vue'

export default {
  name: 'Footer-Main',
  data () {
    return {}
  },
  components: {
    TFL,
    TFC,
    TFR
  }
}

</script>
