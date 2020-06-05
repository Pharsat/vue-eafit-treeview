<template>
  <div class="treeView">
    <button @click="createNewNode" :disabled="this.nodes.length > 0">Create root node</button>
    <br />
    <Node
      v-for="(node, index) in nodes"
      v-bind:key="node.id"
      v-bind:node="node"
      v-bind:index="index"
      v-on:updateNode="updateNode"
      v-on:deleteNode="deleteNode"
      v-bind:allowSubFoldersIntoSubFoldersAddition="allowSubFoldersIntoSubFoldersAddition"
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
  props: {
    allowSubFoldersIntoSubFoldersAddition: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      nodes: this.readJson()
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
      this.storeJson();
    },
    deleteNode(node) {
      this.nodes.splice(
        this.nodes.findIndex(item => item["id"] == node.id),
        1
      );
      this.storeJson();
    },
    storeJson() {
      localStorage.setItem("treeView", JSON.stringify(this.nodes));
    },
    readJson() {
      if (localStorage.getItem("treeView") === null) {
        localStorage.setItem("treeView", "[]");
      }
      return JSON.parse(localStorage.getItem("treeView"));
    }
  },
  watch: {
    nodes: function(newNodes) {
      localStorage.setItem("treeView", JSON.stringify(newNodes));
    }
  }
};
</script>

<style >
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";

.icon {
  max-height: 24px;
  box-sizing: border-box;
}
.div-icon {
  float: left;
  margin-right: 5px;
}
.div-name {
  width: auto;
  overflow: hidden;
}
.div-row {
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
}
input,
textarea {
  width: 100%;
}

input,
span {
  height: 24px;
}
.subFolderStyle {
  background-color: #41a4fc;
}
.nodeStyle {
  background-color: #959595;
}
.fileStyle {
  background-color: beige;
}
</style>
<style scoped>
.treeView {
  width: 100%;
  box-sizing: border-box;
  background-color: #dadada;
  text-align: left;
  padding: 5px;
}
</style>