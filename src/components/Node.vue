<template>
  <div class="node">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <SubFolder
      v-for="(subFolder, index) in subFolders"
      v-bind:key="subFolder"
      v-bind:subFolder="subFolder"
      v-bind:index="index"
      v-on:updateSubFolder="updateSubFolder"
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
      name: "Nodo",
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
  },
  methods: {
    showNameInput() {
      this.showName = !this.showName;
    },
    updateSubFolder(subFolder) {
      this.subFolders[subFolder.index] = subFolder;
      console.log(subFolder.name);
      console.log(subFolder.files);
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