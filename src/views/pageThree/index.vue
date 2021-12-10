<template>
  <div>
    <ks-form :model="formData" :form-config="formConfig">
      <slot slot="table">
        {{`I am table`}}
      </slot>
    </ks-form>
  </div>
</template>

<script>
import KsForm from "@/components/KsForm";
export default {
  name: 'pageThree',
  components: {KsForm},
  data() {
    return {
      formData: {},
      formConfig: [
        {prop: 'name', label: 'label', componentName: 'elInput'},
        {prop: 'table', label: 'table', componentName: 'table',isSlot:true}
      ]
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>
