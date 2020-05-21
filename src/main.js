import Vue from 'vue'
import TreeView from './components/TreeView.vue'
Vue.config.productionTip = false

new Vue({
  render: h => h(TreeView),
}).$mount('#app')
