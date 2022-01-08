<template>
  <el-form
      label-position="top"
      :label-width="computedLabelWidth"
      v-bind="{...$props,...$attrs}"
      v-on="$listeners"
  >
    <slot>
      <el-row :gutter="gutter">
        <el-col :span="span" v-for="cfg in formConfig" :key="cfg.prop">
          <slot :name="cfg.slot" :model="model">
            <el-form-item :label="cfg.label" :prop="cfg.prop">
              <slot :name="cfg.prop" :model="model">
                <component :is="cfg.type || 'warn'" v-bind="cfg" v-on="cfg.listeners" v-model="model[cfg.prop]">
                  <el-option
                    v-for="option in cfg.options"
                    :key="option.value"
                    :value="option.value"
                    :label="option.label"
                  />
                </component>
              </slot>
            </el-form-item>
          </slot>
        </el-col>
      </el-row>
    </slot>
  </el-form>
</template>

<script>
import ElForm from "element-ui/packages/form";

export default {
  name: 'KspForm',
  components: {},
  props: {
    ...ElForm.props,
    formConfig: {
      type: Array,
      default: () => []
    },
    gutter: {
      type: Number,
      default: 10
    },
    span: {
      type: Number,
      default: 12
    }
  },
  data() {
    return {}
  },
  computed: {
    computedLabelWidth() {
      return Math.max(...this.formConfig.map(c => c.label.length)) * 18 + 'px'
    }
  },
  watch: {},
  created() {
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
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
