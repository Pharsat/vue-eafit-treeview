import Vue from "vue";
import TreeView from "./components/TreeView.vue";


const Components = {
    TreeView
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
