<template>
  <div class="treeView">
    <input type="text" v-model="nodeName" />
    <button @click="createNewNode">Create root node</button>
    <br />
    <Node
      v-for="(node, index) in nodes"
      v-bind:key="node"
      v-bind:node="node"
      v-bind:index="index"
      v-on:updateNode="updateNode"
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
        name: this.nodeName,
        subFolders: [
          {
            name: "subFolder",
            files: [
              { name: "hola", text: "adios" },
              { name: "hi", text: "bye" }
            ]
          },
          {
            name: "subFolder",
            files: [
              { name: "hola", text: "adios" },
              { name: "hi", text: "bye" }
            ]
          }
        ]
      };
      this.nodes.push(newNode);
    },
    updateNode(node) {
      this.node[node.index] = node;
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