<template>
  <div class="container">
    <div class="box">7777</div>
    <A/>
  </div>
</template>

<script>
import A from "@/views/pageSix/A";
export default {
  name: 'pageSix',
  components: {A},
  props: {},
  data() {
  return {}
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
}
</script>

<style lang='scss' scoped>
.container{
  height: 100%;
  width: 100%;
  background-color: pink;
  ::v-deep .box{
    background-color: red;
  }
}
</style>
