<template>
  <div>
    <el-button @click="visible = true">{{visible}}</el-button>

    <ks-dialog :visible.sync="visible" :button-config="buttonConfig">
      <ksp-form :form-config="formConfig" :model="formData" @innerInput="handleInput">
        <template #age="slotProps">
          <el-input v-model="slotProps.model.age"/>
        </template>
        <template #age="slotProps">
          <el-form-item label="年龄">
            <el-input v-model="slotProps.model.age"/>
          </el-form-item>
        </template>
      </ksp-form>
    </ks-dialog>
  </div>
</template>

<script>
import KsForm from "../../components/KsForm";
export default {
  name: 'pageThree',
  components: {KsForm},
  props: {},
  data() {
  return {
    visible:false,
    formConfig:
        [
          {
            label:'姓名',prop:'name',type:'el-input',
            listeners:{
              input:this.handleInput,
              focus:this.handleFocus
            }
          },
          {
            label:'年龄',slot:'age'

          },
          {
            label:'学校',prop:'school',type:'el-input',
            listeners: {
              input:this.handleInput,
              focus:this.handleFocus
            }
          },
          {
            label:'职业',prop:'profession',type:'el-select',
            options: [
                {label:'教师',value:'1'},
                {label:'杀手',value:'2'},
              ]
          },
          {
            label:'性别',prop:'sex',type:'el-select',
            options: [
                  {label:'男',value:'1'},
                  {label:'女',value:'2'},
                ]},
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
    handleInput(v) {
      console.log(v)
    },
    handleFocus(){
      console.log('focus')
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
