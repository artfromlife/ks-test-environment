<template>
  <el-form v-bind="$attrs">
    <el-form-item v-for="{ prop, label, componentName, isSlot ,dict} in formConfig" :key="prop" :prop="prop" :label="label">
      <slot :name="componentName" v-if="isSlot" :dict="dict"></slot>
      <component :is="componentName" v-model="$attrs.model[prop]" v-else></component>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'KsForm',
  props:{
    formConfig:{
      type:Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
