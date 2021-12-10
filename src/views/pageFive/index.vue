<template>
  <div>
    <el-date-picker type="datetime" v-model="time" @click.native="add"></el-date-picker>
  </div>
</template>

<script>
export default {
  name: 'pageFive',
  data() {
    return {
      time:null
    }
  },
  methods: {
    add(){
      document.querySelector('.el-picker-panel ,.el-date-picker, .el-popper ,.has-time').style.display = 'block'
      if(this.firstClick === undefined){
        this.firstClick = true
        const parentNode = document.querySelector('.el-picker-panel__footer')
        const firstChild = parentNode.firstChild
        const button = document.createElement('button')
        button.innerText='长期'
        button.onclick = function(e) {
          document.querySelector('.el-picker-panel ,.el-date-picker, .el-popper ,.has-time').style.display = 'none';
        }
        let classNames = "el-button el-picker-panel__link-btn el-button--default el-button--mini is-plain"
        button.classList.add( ...classNames.split(' '))
        parentNode.insertBefore(button,firstChild)
      }
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>
</style>
