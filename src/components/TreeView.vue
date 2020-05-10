<template>
  <div class="treeView">
    <input type="text" v-model="nodeName" />
    <button @click="createNewNode" :disabled="this.nodes.length > 0">Create root node</button>
    <button @click="storeJson">Store to local storage</button>
    <br />
    <Node
      v-for="(node, index) in nodes"
      v-bind:key="index"
      v-bind:node="node"
      v-bind:index="index"
      v-on:updateNode="updateNode"
      v-on:deleteNode="deleteNode"
    />
  </div>
</template>
<script>
import Node from "./Node.vue";

export default {
  name: "TreeView",
  components: {
    Node
  },
  props: {},
  data() {
    return {
      nodeName: "",
      nodes: []
    };
  },
  methods: {
    createNewNode() {
      var newNode = {
        name: "",
        subFolders: []
      };
      this.nodes.push(newNode);
    },
    updateNode(node, index) {
      console.log(node);
      console.log(index);
      this.nodes[index] = node;
    },
    deleteNode(index) {
      this.nodes.splice(index, 1);
    },
    storeJson() {
      localStorage.setItem("treeView", JSON.stringify(this.nodes));
    }
  }
};
</script>

<style scoped>
.treeView {
  width: 100%;
  background-color: deeppink;
}
</style>>