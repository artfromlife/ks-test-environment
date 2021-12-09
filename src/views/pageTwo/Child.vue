<template>
  <div>
    {{msg}}
  </div>
</template>

<script>
import emitter from "@/utils/emitter";
export default {
  name: 'Child',
  mixins:[emitter],
  data() {
    return {
      msg:null
    }
  },
  mounted() {
    this.$on('child',msg => this.msg = msg )
    this.dispatch('pageTwo','self','234')
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
</style>
