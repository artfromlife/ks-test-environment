<template>
  <el-input ref="input" v-focus:foo.a.b = "123" ></el-input>
</template>

<script>
export default {
  name: 'pageSeven',
  data() {
    return {}
  },
  directives:{
     focus:{
       // 一个指令定义对象可以提供如下几个钩子函数
       bind(el,binding,vnode,oldVnode){
         // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
         const s = JSON.stringify
         el.innerHTML =
             'name: '       + s(binding.name) + '<br>' +
             'value: '      + s(binding.value) + '<br>' +
             'expression: ' + s(binding.expression) + '<br>' +
             'argument: '   + s(binding.arg) + '<br>' +
             'modifiers: '  + s(binding.modifiers) + '<br>' +
             'vnode keys: ' + Object.keys(vnode).join(', ')
       },
       inserted(el,binding,vnode,oldVnode){
         // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
         console.log('inserted',el)
       },
       update(el,binding,vnode,oldVnode){
         // 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
         // 但是你可以通过比较更新前后的值来忽略不必要的模板更新
       },
       componentUpdated(el,binding,vnode,oldVnode){
         // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
       },
       unbind(el,binding,vnode,oldVnode){
         // 只调用一次，指令与元素解绑时调用
       },
     }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
