<template>
  <div>
    template
    <Child @change="handleClick"></Child>
  </div>
</template>

<script>
const Child = {
  created() {
    this.$on('change',()=>{
      console.log('child handler')
    })
  },
  mounted() {
    this.$emit('change')
  },
  render(h){
    return h('div')
  }
}
export default {
  name: '',
  components: {Child},
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
  methods: {
    handleClick(){
      console.log('father handler')
      let t = new Date().getTime()
      while (Date.now() < t+2000){
        ;
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
