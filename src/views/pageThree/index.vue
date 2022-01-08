<template>
  <div>
    <el-button @click="visible = true">{{visible}}</el-button>

    <ks-dialog
        :visible.sync="visible"
        v-if="visible"
        :button-config="buttonConfig"
        @close="formData={}">

      <ksp-form
          :form-config="formConfig"
          :model="formData"
          :watcher-callback="watcherCallback"
      >
        <template #age="slotProps">
          <el-input v-model="slotProps.model.age"/>
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
            label:'年龄',prop:'age'

          },
          {
            label:'学校',prop:'school',type:'el-input',span:24,
            filter: {
              profession:['2']
            },
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
            label: '是否是人',prop:'yesOrNo',type: 'el-select',
            filter:{
              profession:['2']
            },
            options: [
              {label:'是',value:'1'},
              {label:'否',value:'2'},
            ]
          },
          {
            label:'性别',prop:'sex',type:'el-select',hidden:true,
            filter:{
              yesOrNo:['1']
            },
            options: [
                  {label:'男',value:'1'},
                  {label:'女',value:'2'},
                ]
          },
          {
            label: '是否',prop:'switch',type: 'el-switch'
          },

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
    },
    watcherCallback(subscriberMapper,publisherMapper,formConfigMapper,publisher) {
      const subscribers = publisherMapper[publisher]
      subscribers.forEach(subscriber => {
        if (subscriberMapper[subscriber][publisher].includes(this.formData[publisher])) {
          formConfigMapper[subscriber].hidden = false
        } else {
          formConfigMapper[subscriber].hidden = true
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
