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
    mounted() {
      this.$refs.amountInput.$el.querySelector('.el-input__inner').style.textAlign = 'right'
    },
    methods:{
      handleInput(val){
        this.lastValue = val.replace(/[^\d.]/g,'')
      },
      inputBlur(){
        this.$emit('input',this.lastValue)
        this.lastValue = Number(this.lastValue).toLocaleString("zH", {minimumFractionDigits: this.decimal,maximumFractionDigits:this.decimal})
      },
      inputFocus(){
        if("string" === typeof this.lastValue)
          this.lastValue = this.lastValue.replace(/,/g,'')
      }
    },
    render(){
      return(
        <el-input
          ref="amountInput"
          value={this.lastValue}
          onInput={this.handleInput}
          onBlur={this.inputBlur}
          onFocus={this.inputFocus}
        />
      )
    }
  }
</script>
