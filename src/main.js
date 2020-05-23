import Vue from 'vue'
import TreeView from './components/TreeView.vue'
Vue.config.productionTip = false

Vue.prototype.$findWithAttr = function(array, attr, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i][attr] === value) {
      return i;
    }
  }
  return -1;
}

new Vue({
  render: h => h(TreeView)
}).$mount('#app')