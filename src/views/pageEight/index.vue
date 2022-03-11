<template>
  <div>
    <el-button @click="encode">application/x-www-form-urlencoded</el-button>
    <el-button @click="multipart">multipart/form-data</el-button>
    <input type="file" @change="handleFileChoose"></input>
  </div>
</template>

<script>
import axios from 'axios'
import qs from 'qs'

export default {
  name: 'pageEight',
  components: {},
  props: {},
  data() {
    return {
      formData: new FormData(),
      urlSearchParams: new URLSearchParams()
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
  },
  updated() {
  },
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {
    handleFileChoose(e) {
      this.formData.set('file',e.target.files[0])
      this.urlSearchParams.set('file',e.target.files[0])
    },
    encode() {
      this.urlSearchParams.set('你好','骚啊')
      axios({
        method: 'post',
        url: '/user',
        'Content-Type': 'application/x-www-form-urlencoded;',
        data:this.urlSearchParams,
      }).then()
    },
    multipart() {
      this.formData.set('你好','骚啊')
      axios({
        method: 'post',
        url: '/user',
        'Content-Type': 'multipart/form-data',
        data: this.formData
      }).then()
    }

  }
}
</script>

<style lang='scss' scoped>

</style>
