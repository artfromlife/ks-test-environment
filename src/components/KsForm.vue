

<script>
import ElForm from "element-ui/packages/form";

export default {
  name: 'KsForm',
  components: {},
  props: {
    ...ElForm.props,
    formConfig: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.observeFormData();
  },
  mounted() {
  },
  updated() {
  },
  activated() {
  },
  deactivated() {
  },
  beforeDestroy() {
  },
  destroyed() {
  },
  methods: {
    observeFormData(){
      const keys = Object.keys(this.model)
      this.formConfig.forEach( c => {
        if(!keys.includes(c.prop)){
          this.$set(this.model,c.prop,null)
        }
      })
    }
  },
  render(h, context) {
    const children = this.formConfig.map(c => {
      const self = this
      const {prop, type} = c
      const slotProps = {name: prop}
      const slotData = {props: slotProps}
      const componentProps = {...c,value:this.model[prop]}
      const componentOn = {
        input:function (v) {
          self.model[prop] = v
        }
      }
      const componentData = {props: componentProps, on: componentOn}
      const child = h('el-form-item',{props:c},[h(type,componentData)])
      return h('slot',slotData,[child])
    })
    const labelWidth = Math.max(...this.formConfig.map(c => c.label.length)) * 18 + 'px'
    const props = {
      ...this.props,
      inline: true,
      labelPosition: 'left',
      labelWidth
    }
    const attrs = {}
    const on = {...this.$listeners}
    const data = {props, attrs, on}
    return h('el-form', data, children)
  }
}
</script>

<style lang='scss' scoped>

</style>
