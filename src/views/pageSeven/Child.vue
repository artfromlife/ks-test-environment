<template>
  <div>{{`${A}-${B}-${C}`}}</div>
</template>

<script>
export default {
  name: 'Child',
  props:{
    A:String,
    B:String,
    C:String,
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
