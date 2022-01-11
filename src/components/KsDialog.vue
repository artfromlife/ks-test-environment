<template>
  <transition name="fade">
    <el-dialog
        functional
        :close-on-click-modal="false"
        v-bind="$attrs"
        v-on="$listeners">
      <slot/>
      <el-button-group slot="footer">
        <el-button
            v-for="button in buttonConfig"
            :key="button.prop"
            v-on="typeof button.listeners === 'function' ? button.listeners(button):button.listeners"
            v-bind="button"
        >
          {{ button.label }}
        </el-button>
      </el-button-group>
    </el-dialog>
  </transition>
</template>

<script>
export default {
  name: 'KsDialog',
  components: {},
  props: {
    buttonConfig: {
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
    enhancer(button) {
      console.log(Object.keys(button.listeners))
      if (button.listeners) {
        Object.keys(button.listeners).forEach(k => {
          button.listeners[k] = button.listeners[k].bind(this, button)
        })
      }
      return button.listeners
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
