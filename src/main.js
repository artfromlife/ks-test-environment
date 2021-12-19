import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// normalize.css
import 'normalize.css'
// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI, {size: 'medium', zIndex: 3000})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

setInterval(()=>{
  console.log("当前节点总数:",document.querySelectorAll('*').length,document.getElementsByTagName('*').length)
},2000)
