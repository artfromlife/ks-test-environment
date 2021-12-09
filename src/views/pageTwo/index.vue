<template>
  <div>
    <Child></Child>
  </div>
</template>

<script>
import emitter from "@/utils/emitter";
import Child from "@/views/pageTwo/Child";
export default {
  name: 'pageTwo',
  components: {Child},
  mixins:[emitter],
  data() {
    return {}
  },
  created() {
    this.$on('self',(e)=>{
      console.log(e)
    })
  },
  methods: {
  },
  mounted() {
    this.broadcast('Child','child',['haha'])
  }
}
</script>

<style lang="scss" scoped>
</style>
