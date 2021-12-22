<template>
  <div>
    <child v-bind="item"></child>
  </div>
</template>

<script>

import Child from "@/views/pageSeven/Child";
export default {
  name: 'pageSeven',
  components: {Child},
  created() {
    console.log(this.$props === this.$options.propsData)
  },
  data() {
    return {
      item:{
        A:'12',
        B:'13',
        C:'14'
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
