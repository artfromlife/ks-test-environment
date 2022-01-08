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
            @click="$emit('buttonClick',button.prop)">
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
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
