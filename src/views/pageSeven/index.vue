<template>
  <div>
    <el-input v-model="num" ></el-input>
    <el-button @click="num=Math.random()/100000"></el-button>
  </div>
</template>

<script>
import {toolNumber} from "@/views/pageSeven/num";

export default {
  name: 'pageSeven',
  data() {
    return {
      num: 0.0000001
    }
  },
  directives:{
    num:{
      inserted(el,binding,vNode){
        let node = el.querySelector('input')
        if(node){
          node.value = toolNumber(node.value)
        }
      },
      componentUpdated(el,binding,vNode){
        let node = el.querySelector('input')
        if(node){
            node.value = toolNumber(node.value)
        }
      },
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
