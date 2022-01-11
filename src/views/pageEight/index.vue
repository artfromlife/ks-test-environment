<template>
  <div>
    <ksp-form :form-config="formConfig" :model="formData"></ksp-form>
  </div>
</template>

<script>
import KsForm from "../../components/KsForm";
export default {
  name: 'pageEight',
  components: {KsForm},
  props: {},
  data() {
  return {
    formConfig:[
      {label:'select',dict:'app',type:'ElSelect',prop:''}
    ],
    formData:{}
  }
  },
  computed: {},
  watch: {},
  created() {
    setTimeout(()=>{
      this.$store.commit('dict/SET_DICT',{
        app:[
          {value:1,label:121331}
        ]
      })
    },1000)
  },
  mounted() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
