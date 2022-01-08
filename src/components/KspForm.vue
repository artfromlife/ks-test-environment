<template>
  <el-form
      label-position="top"
      :label-width="computedLabelWidth"
      v-bind="{...$props,...$attrs}"
      v-on="$listeners"
  >
    <slot>
      <el-row :gutter="gutter">
        <transition-group name="list-complete" tag="div">
          <el-col :span="cfg.span||12" v-for="cfg in formConfig" :key="cfg.prop" class="list-complete-item">
            <slot :name="cfg.slot" :model="model" v-if="!cfg.hidden">
              <el-form-item :label="cfg.label" :prop="cfg.prop">
                <slot :name="cfg.prop" :model="model">
                  <component
                      :is="cfg.type || 'warn'"
                      v-bind="cfg"
                      v-on="cfg.listeners"
                      v-model="model[cfg.prop]"
                      clearable>
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
        </transition-group>
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
    /**
     * subscriberMapper :
     *    {
     *      subscriber : {  publisher:[] }
     *    }
     * publisherMapper:
     *    {
     *      publisher: ['subscriber1','subscriber2]
     *    }
     * formConfigMapper:
     *    {
     *      subscriber : formConfigItem
     *    }
     *
     */
    watcherCallback:{
      type:Function,
      default:function (subscriberMapper,publisherMapper,formConfigMapper,publisher){
        const subscribers = publisherMapper[publisher]
        subscribers.forEach(subscriber => {
          if(subscriberMapper[subscriber][publisher].includes(this.model[publisher])){
            formConfigMapper[subscriber].hidden = false
          }else {
            formConfigMapper[subscriber].hidden = true
          }
          this.$set(this.model,subscriber,null)
        })
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    computedLabelWidth() {
      return Math.max(...this.formConfig.map(c => c.label.length)) * 18 + 'px'
    },
    formConfigMapper() {
      const Mapper = {}
      this.formConfig.forEach( c => Mapper[c.prop] = c)
      return Mapper
    }
  },
  watch: {},
  created() {
    this.dealFilters();
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
    this.$off()
  },
  destroyed() {
  },
  methods: {
    dealFilters() {
      const subscriberMapper = {}
      let dependencies = []
      this.formConfig.forEach(c => {
        if(c.filter){
          subscriberMapper[c.prop] = c.filter
          dependencies.push(...Object.keys(c.filter))
        }
      })

      dependencies = [...new Set(dependencies)]
      const publisherMapper = {}
      dependencies.forEach(publisher => {
        const subscribers = []
        Object.keys(subscriberMapper).forEach( subscriber => {
          if(Object.keys(subscriberMapper[subscriber]).includes(publisher)){
            subscribers.push(subscriber)
          }
        })
        publisherMapper[publisher] = subscribers
        const formConfigMapper = this.formConfigMapper
        this.$watch(
            `model.${publisher}`,
            this.watcherCallback.bind(this,subscriberMapper,publisherMapper,formConfigMapper,publisher),
            {
              immediate:true,
              deep:Array.isArray(this.model[publisher])
            }
        )
      })

    },

  }
}
</script>

<style lang='scss' scoped>

</style>
