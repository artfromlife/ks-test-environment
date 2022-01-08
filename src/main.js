import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// normalize.css
import 'normalize.css'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './styles/main.css'
Vue.use(ElementUI, {size: 'medium', zIndex: 3000})

const requireComponent = require.context('./components',false, /\w+.(vue|js)$/)
requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)
  Vue.component(fileName.split('/').pop().replace(/\.\w+$/,''),componentConfig.default)
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// setInterval(()=>{
//   console.log("当前节点总数:",document.querySelectorAll('*').length,document.getElementsByTagName('*').length)
// },2000)
