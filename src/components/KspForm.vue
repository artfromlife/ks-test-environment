<template>
  <el-form
      label-position="left"
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
                        v-for="option in dict[cfg.dict]"
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
        const clearField = (subscriber) => this.$set(this.model, subscriber, null)
        const subscribers = publisherMapper[publisher]
        // 一个发布者的值变化了, 引发其订阅者们的变动
        subscribers.forEach(subscriber => {
          // 每个 订阅者 是否 要变动 取决于 他的 所有订阅者 和 他的 订阅模式
          // 读取订阅模式
          let filterMode = formConfigMapper[subscriber].filterMode
          // 默认是全部订阅 , 即所有发布者的条件 都满足 再进行显示
          if (!filterMode) {
            formConfigMapper[subscriber].filterMode = 'AND'
            filterMode = 'AND'
          }
          const publisherMapperOfSubscriber = subscriberMapper[subscriber]
          if (filterMode === 'AND') {
            // 是一个 AND 的关系
            const isAllPublishersSatisfied = Object.keys(publisherMapperOfSubscriber).every(k =>
                publisherMapperOfSubscriber[k].includes(this.model[k])
            )
            if (isAllPublishersSatisfied) {
              formConfigMapper[subscriber].hidden === true && clearField(subscriber)
              formConfigMapper[subscriber].hidden = false
            } else {
              formConfigMapper[subscriber].hidden === false && clearField(subscriber)
              formConfigMapper[subscriber].hidden = true
            }
          } else if (filterMode === 'OR') {
            // 是一个 OR 的关系
            const isSomePublishersSatisfied = Object.keys(publisherMapperOfSubscriber).some(k =>
                publisherMapperOfSubscriber[k].includes(this.model[k])
            )
            if (isSomePublishersSatisfied) {
              formConfigMapper[subscriber].hidden === true && clearField(subscriber)
              formConfigMapper[subscriber].hidden = false
            } else {
              formConfigMapper[subscriber].hidden === false && clearField(subscriber)
              formConfigMapper[subscriber].hidden = true
            }

          } else if (filterMode === 'XOR') {
            // 最近的一个变化的 publisher 来控制 ,BUG -> FEATURE
            const isTheLastPublisherSatisfied = publisherMapperOfSubscriber[publisher].includes(this.model[publisher])
            if (isTheLastPublisherSatisfied) {
              formConfigMapper[subscriber].hidden === true && clearField(subscriber)
              formConfigMapper[subscriber].hidden = false
            } else {
              formConfigMapper[subscriber].hidden === false && clearField(subscriber)
              formConfigMapper[subscriber].hidden = true
            }
          }
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
    },
    dict(){
      console.count("123")
      return this.$store.state.dict
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
