<template>
  <div class="center">
    <amount-input v-model="input" :decimal="8" placeholder="请输入" >
        <el-button slot="append" @click="handleClick">+</el-button>
        <el-button slot="prefix" @click="input-=0.1">-</el-button>

    </amount-input>
  </div>
</template>

<script>
import AmountInput from "./AmountInput";
export default {
  components: {AmountInput},
  data() {
    return {
      input: null
    }
  },
  methods: {
    handleClick() {
      this.input += 0.1
    }

  }
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
