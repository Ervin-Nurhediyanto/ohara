<template>
  <div class="paste-button">
    <button v-if="status == 'enable'" class="button-enable bg-grey">{{ status }} &nbsp; ▼</button>
    <button v-else class="button-disable bg-grey">{{ status }} &nbsp; ▼</button>
    <div class="dropdown-content">
      <a id="top" href="#" @click.prevent="handleStatus('enable')">Enable</a>
      <a id="middle" href="#" @click.prevent="handleStatus('disable')">Disable</a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Status-Student-Admin',
  props: ['status', 'data', 'index'],
  data () {
    return {}
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions(['updateUser']),
    handleStatus (status) {
      const formData = new FormData()
      formData.append('status', status)

      const data = {
        id: this.data._id,
        data: formData
      }
      this.updateUser(data)
        .then((res) => {
          this.$emit('handleStatus', { index: this.index, status: status })
        })
    }
  }
}
</script>

<style scoped>
  .paste-button {
    position: relative;
    display: block;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  .button-enable {
    color: #4CAF50;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 15px;
    cursor: pointer;
  }

  .button-disable {
    color: crimson;
    padding: 5px 10px;
    font-size: 14px;
    font-weight: bold;
    border: 2px solid transparent;
    border-radius: 15px;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    font-size: 13px;
    position: absolute;
    z-index: 1;
    min-width: 100px;
    background-color: #212121;
    border: 2px solid #4CAF50;
    border-radius: 0px 15px 15px 15px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  }

  .dropdown-content a {
    color: #4CAF50;
    padding: 8px 10px;
    text-decoration: none;
    display: block;
    transition: 0.1s;
  }

  .dropdown-content a:hover {
    background-color: #4CAF50;
    color: #212121;
  }

  .dropdown-content a:focus {
    background-color: #212121;
    color: #4CAF50;
  }

  .dropdown-content #top:hover {
    border-radius: 0px 13px 0px 0px;
  }

  .dropdown-content #bottom:hover {
    border-radius: 0px 0px 13px 13px;
  }
  .paste-button:hover button {
    border-radius: 15px 15px 0px 0px;
  }
  .paste-button:hover .dropdown-content {
    display: block;
  }
  </style>
