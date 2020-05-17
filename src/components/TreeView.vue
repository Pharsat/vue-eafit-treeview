<template>
  <div class="treeView">
    <button @click="createNewNode" :disabled="this.nodes.length > 0">Create root node</button>
    <button @click="storeJson">Store to local storage</button>
    <br />
    <Node
      v-for="(node, index) in nodes"
      v-bind:key="node.id"
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
      nodes: []
    };
  },
  methods: {
    createNewNode() {
      var nextIds = this.nodes.map(function(file) {
        return file.id;
      });
      var maxCollection = [...nextIds, 0];
      var newNode = {
        id: Math.max.apply(Math, maxCollection) + 1,
        name: "",
        subFolders: []
      };
      this.nodes.push(newNode);
    },
    updateNode(node, index) {
      this.$set(this.nodes, index, node);
    },
    deleteNode(node) {
      this.nodes = this.nodes.filter(function(item) {
        return item.id != node.id;
      });
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