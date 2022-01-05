<template>
  <el-input @click.native="handleInputClick" v-model="inputValue"></el-input>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
  return {
    inputValue:null
  }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {
    handleInputClick (e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
