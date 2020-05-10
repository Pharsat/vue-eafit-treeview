<template>
  <div class="node">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <button @click="deleteMySelf">Delete node</button>
    <button @click="createNewSubFolder">Create sub folder</button>
    <br />
    <SubFolder
      v-for="(subFolder, index) in subFolders"
      v-bind:key="index"
      v-bind:subFolder="subFolder"
      v-bind:index="index"
      v-on:updateSubFolder="updateSubFolder"
      v-on:deleteSubFolder="deleteSubFolder"
    />
  </div>
</template>
<script>
import SubFolder from "./SubFolder.vue";

export default {
  name: "Node",
  components: {
    SubFolder
  },
  props: {
    index: Number,
    node: Object
  },
  data() {
    return {
      showName: false,
      name: this.node.name,
      subFolders: this.node.subFolders
    };
  },
  methods: {
    showNameInput() {
      this.showName = !this.showName;
      this.$emit(
        "updateNode",
        { name: this.name, subFolders: this.subFolders },
        this.index
      );
    },
    createNewSubFolder() {
      var newSubFolder = {
        name: "",
        files: []
      };
      this.subFolders.push(newSubFolder);
    },
    updateSubFolder(subFolder, index) {
      this.subFolders[index] = subFolder;
      this.$emit(
        "updateNode",
        { name: this.name, subFolders: this.subFolders },
        this.index
      );
    },
    deleteMySelf() {
      this.$emit("deleteNode", this.index);
    },
    deleteSubFolder(index) {
      this.subFolders.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.node {
  width: 100%;
  background-color: darkgreen;
}
</style>>