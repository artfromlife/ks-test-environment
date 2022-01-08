<template>
  <div>
    <el-button @click="visible = true">{{visible}}</el-button>

    <ks-dialog :visible.sync="visible" :button-config="buttonConfig">
      <ks-form :form-config="formConfig" :model="formData">
        <el-input slot="avv"></el-input>
      </ks-form>
    </ks-dialog>
  </div>
</template>

<script>
import KsForm from "../../components/KsForm";
export default {
  name: '',
  components: {KsForm},
  props: {},
  data() {
  return {
    visible:false,
    formConfig:
        [
          {label:'姓名姓名姓',prop:'name',type:'el-input'},
          {label:'姓名',prop:'avv',type:'el-button',},
          {label:'姓名',prop:'hhh',type:'el-input'},
          {label:'姓名',prop:'gggg',type:'el-input'},
          {label:'姓名',prop:'fff',type:'el-input'},
          {label:'姓名',prop:'ccc',type:'el-input'},
          {label:'姓名',prop:'saa',type:'el-input'},
          {label:'姓名',prop:'ccc54',type:'el-input'},
        ],
    buttonConfig:
        [
          {label:'提交',prop:'submit',type:'primary'}
        ],
    formData: {}
  }
  },
  computed: {},
  watch: {},
  created() {

  },
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {

  }
}
</script>

<style lang='scss' scoped>

</style>
