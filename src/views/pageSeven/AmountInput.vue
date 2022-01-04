<script>
  export default {
    name: 'AmountInput',
    inheritAttrs:false,
    props:{
      value:[String,Number],
      decimal:{
        type:Number,
        default:2
      }
    },
    watch:{
      value:{
        handler(n){
          this.lastValue = this.decimalFormatter(n)
        },
        immediate:true
      }
    },
    data(){
      return {
        lastValue:null,
      }
    },
    computed: {
      regExp() {
        return new RegExp(`^\\D*(\\d*(?:\\.\\d{0,${this.decimal}})?).*$`, 'g')
      }
    },
    mounted() {
      this.$refs.amountInput.$el.querySelector('.el-input__inner').style.textAlign = 'right'
    },
    methods: {
      decimalFormatter(strOrNum){
        if(["number","string"].includes(typeof strOrNum)){
          return Number(strOrNum).toLocaleString("zH", {
            minimumFractionDigits: this.decimal,
            maximumFractionDigits: this.decimal
          })
        }else return strOrNum
      },
      handleInput(val) {
        this.lastValue = val.replace(this.regExp, '$1').replace(/^0+/, '0')
      },
      inputBlur() {
        this.$emit('input', Number(this.lastValue))
        this.lastValue = this.decimalFormatter(this.lastValue)
      },
      inputFocus() {
        if ("string" === typeof this.lastValue)
          this.lastValue = this.lastValue.replace(/,/g, '')
      }
    },
    render(h) {
      const props = {...this.$props, value: this.lastValue}
      const attrs = {...this.$attrs}
      const on = {
        ...this.$listeners,
        input: this.handleInput.bind(this),
        blur: this.inputBlur.bind(this),
        focus: this.inputFocus.bind(this)
      }
      return (
          <el-input ref="amountInput" {...{ props, attrs, on}}  >
            {
              Object.entries(this.$slots).map(slot =><template slot={slot[0]}>{h('slot',{name:slot[0]},slot[1])}</template> )
            }
          </el-input>
      )
    }
  }
</script>
