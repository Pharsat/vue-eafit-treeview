<template>
  <div class="node" @dblclick.prevent.self="toggleChildView">
    <span v-show="showName">{{name}}</span>
    <input
      v-show="!showName"
      type="text"
      v-model="name"
      @keyup.enter="showNameInput"
      placeholder="Enter the node name here, then press enter"
    />
    <br />
    <button @click="deleteMySelf">Delete node</button>
    <button @click="createNewSubFolder">Create sub folder</button>
    <br />
    <div v-show="showSubFolders">
      <SubFolder
        v-for="(subFolder, index) in subFolders"
        v-bind:key="index"
        v-bind:subFolder="subFolder"
        v-bind:index="index"
        v-on:updateSubFolder="updateSubFolder"
        v-on:deleteSubFolder="deleteSubFolder"
      />
    </div>
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
      showSubFolders: true,
      showName: false,
      name: this.node.name,
      subFolders: this.node.subFolders
    };
  },
  methods: {
    showNameInput() {
      this.showName = true;
      this.$emit("updateNode", this.me(), this.index);
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
      this.$emit("updateNode", this.me(), this.index);
    },
    deleteMySelf() {
      this.$emit("deleteNode", this.index);
    },
    deleteSubFolder(index) {
      this.subFolders.splice(index, 1);
    },
    me() {
      return {
        name: this.name,
        subFolders: this.subFolders
      };
    },
    toggleChildView() {
      this.showSubFolders = !this.showSubFolders;
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