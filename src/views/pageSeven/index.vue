<template>
  <div class="center">
    <amount-input v-model="input" :decimal="8" placeholder="请输入" >
    </amount-input>
  </div>
</template>

<script>
import AmountInput from "./AmountInput";
export default {
  components: {AmountInput},
  data(){
    return {
      input:null
    }
  },
}
</script>
<style lang="scss" scoped>
.center{
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
