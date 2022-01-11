<template>
  <div>
    <el-button @click="visible = true">{{visible}}</el-button>

    <ks-dialog
        :visible.sync="visible"
        v-if="visible"
        :button-config="buttonConfig"
       >

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
    buttonConfig:
        [
          {label:'提交',prop:'submit',type:'primary',listeners:this.listeners}
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
    submit(config){
      this.$set(config,'disabled',true)
      // config.disabled = true
    },
    listeners(e){
      return {
        click:this.submit.bind(this,e)
      }
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
