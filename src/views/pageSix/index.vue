<template>
  <div>
    <div>{{obj.num}}</div>
    <el-button @click="handleClick">点击改变对象</el-button>
    <div v-for="({n,o,time},index) in watcherStack" :key="index">
      <div style="display: flex;justify-content: space-around">
        <div>newValue:{{n}}</div>
        <div>oldValue:{{o}}</div>
        <div>time:{{time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'pageSix',
  data() {
    return {
      obj:{},
      watcherStack:[]
    }
  },
  created() {
    this.$set(this.obj,'num',2)
  },
  mounted(){
    //用来占用JS主线程
    let t = new Date().getTime()
    while (Date.now() < t+500){
      ;
    }
  },

  methods: {
    handleClick(){
      console.log("1231")
      this.obj = {num:new Date().getTime()}
    }
  },
  watch:{
    'obj.num':{
      handler(n,o){
        this.watcherStack.push({n,o,time:new Date().getTime()})
      }
    },
    'obj.arr':{
      handler(n,o){
        this.watcherStack.push({n,o,time:new Date().getTime()})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
