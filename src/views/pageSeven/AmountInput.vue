<script>
  export default {
    name: 'AmountInput',
    props:{
      value:[String,Number],
      decimal:{
        type:Number,
        default:2
      }
    },
    data(){
      return {
        lastValue:null,
      }
    },
    computed:{
      regExp(){
        return new RegExp(`^\\D*(\\d*(?:\\.\\d{0,${this.decimal}})?).*$`,'g')
      }
    },
    mounted() {
      this.$refs.amountInput.$el.querySelector('.el-input__inner').style.textAlign = 'right'
    },
    render(){
      const that = this
      const props = {...this.$props, ...this.$attrs, value: this.lastValue}
      const scopedSlots = {...this.$scopedSlots}
      const on = {
        ...this.$listeners,
        input(val) {
          that.lastValue = val.replace(that.regExp, '$1').replace(/^0+/, '0')
        },
        blur() {
          that.$emit('input', that.lastValue)
          that.lastValue = Number(that.lastValue).toLocaleString("zH", {minimumFractionDigits: that.decimal, maximumFractionDigits: that.decimal})
        },
        focus() {
          if ("string" === typeof that.lastValue)
            that.lastValue = that.lastValue.replace(/,/g, '')
        }
      }
      return (
          <el-input ref="amountInput" {...{ props, scopedSlots:this.$slots, on }}  />
      )
    }
  }
</script>
