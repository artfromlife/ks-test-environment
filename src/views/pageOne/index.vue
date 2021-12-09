<template>
  <div>
    <el-button @click="()=>{ this.hasRules = !hasRules ; $refs.form.clearValidate() }">Change Rules</el-button>
    <el-button @click="$refs.form.validate().then(e=>fieldCallback(e)).catch(e=>e)">Validate</el-button>
    <el-button @click="$refs.form.validateField('email',e => fieldCallback(e))">Validate email Only</el-button>
    <el-form
        ref="form"
        :model="model"
        :rules="rules"
        :validate-on-rule-change="false"
        :inline="true"
        label-position="left"
        label-width="100px"
        label-suffix="后缀"
        :hide-required-asterisk="false"
        :show-message="true"
        :inline-message="true"
        :status-icon="true"
        size="mini"
        :disabled="false"
        @validate="validate"
    >
      <el-form-item label="name" prop="name">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="age" prop="age">
        <el-input v-model="model.age"></el-input>
      </el-form-item>
      <el-form-item label="email" prop="email" v-if="isEmailVisible">
        <el-input v-model="model.email"></el-input>
      </el-form-item>
    </el-form>
    <el-button @click="isEmailVisible = !isEmailVisible">{{ isEmailVisible ? 'hidden':'show'}}</el-button>
  </div>
</template>

<script>
export default {
  name: 'pageOne',
  data() {
    return {
      isEmailVisible:false,
      hasRules: true,
      model: {
        name: null,
        age: null,
        email: null,
        hasGirlfriend: null
      },
    }
  },
  computed: {
    rules() {
      if (this.hasRules) {
        return {
          name: [{required: true, trigger: ['blur', 'change']}],
          age: [{required: true, trigger: ['blur', 'change']}],
          email: [{ type:'email',required: true, trigger: ['blur', 'change']}],
        }
      } else {
        return {}
      }
    }
  },
  methods: {
    fieldCallback(e){
      console.log(e)
    },
    validate(prop,isPassed,errMessage){
      console.log({
        prop,
        isPassed,
        errMessage
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
