<template>
  <div class="row h-90vh m-0 p-0 bg-grey">
    <div class="d-flex row m-0 p-0">
      <div class="d-flex h-10vh justify-content-center">
        <b class="fs-1">Tanya Jawab</b>
      </div>
      <div class="d-flex h-80vh justify-content-center">
        <div class="col-10 col-lg-5 h-40vh mt-3 rounded bs-3px bg-white">
          <div v-for="i in faqs.q.length" :key="i" class="p-2">
            <div class="d-flex justify-content-between">{{ faqs.q[i - 1] }}
              <span @click.prevent="handleAns(i-1)" class="px-2 rounded-circle c-pointer bg-warning">
              <b>{{ faqs.btn[i - 1] }}</b>
            </span>
            </div>
            <div v-if="faqs.isAns[i - 1]">{{ faqs.a[i - 1] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Content-FAQ-Main',
  data () {
    return {
      faqs: {
        isAns: [
          false,
          false,
          false
        ],
        a: [
          'jawab 1',
          'jawab 2',
          'jawab 3'
        ],
        q: [
          'pertanyaan 1',
          'pertanyaan 2',
          'pertanyaan 3'
        ],
        btn: [
          '+',
          '+',
          '+'
        ]
      }
    }
  },
  components: {
  },
  methods: {
    handleAns (i) {
      this.faqs.isAns[i] = !this.faqs.isAns[i]
      if (this.faqs.btn[i] === '+') {
        this.faqs.btn[i] = '-'
      } else {
        this.faqs.btn[i] = '+'
      }
    }
  }
}
</script>
