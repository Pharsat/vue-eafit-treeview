<template>
  <div class="treeView">
    <input type="text" v-model="nodeName" />
    <button @click="createNewNode" :disabled="this.nodes.length > 0">Create root node</button>
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
    updateNode(node) {
      this.nodes[node.index] = node;
    },
    deleteNode(node) {
      this.nodes.splice(node.index, 1);
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