<template>
  <div v-color:blue>
    <label for="input" style="display:inline-block ; margin: 50px auto">
      <el-button @click="isChange = !isChange">isChange</el-button>
    </label>
    <el-input id="input" size="mini" v-change:ymm.self="isChange" v-model="input"></el-input>
  </div>
</template>

<script>
export default {
  name: 'pageFour',
  data() {
    return {
      input:null,
      isChange:false,
    }
  },
  directives: {
    color:{
      bind(el,binding){
        el.style.backgroundColor = binding.arg
      }
    },
    change: {
      bind(el) {
        el.querySelector('input').focus()
        console.log('binding')
      },
      inserted(el, binding, vNode) {
        console.log('inserted',binding)
      },
      update(el, binding, vNode) {
        console.log('update',binding)
      },
      componentUpdated() {
        console.log('componentUpdated')
      },
      unbind() {
        console.log('unbinding')
      }
    }
  },
  created() {
    console.log('created')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  methods: {}
}
</script>

<style lang="scss">

.red {
  color: red;
}
</style>
