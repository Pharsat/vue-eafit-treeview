<template>
  <div class="subFolder">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <button @click="deleteMySelf">Delete node</button>
    <button @click="createNewFile">Create file</button>
    <br />
    <File
      v-for="(file, index) in files"
      v-bind:key="index"
      v-bind:file="file"
      v-bind:index="index"
      v-on:updateFile="updateFile"
      v-on:deleteFile="deleteFile"
    />
  </div>
</template>
<script>
import File from "./File.vue";

export default {
  name: "SubFolder",
  components: {
    File
  },
  props: {
    index: Number,
    subFolder: Object
  },
  data() {
    return {
      showName: false,
      name: this.subFolder.name,
      files: this.subFolder.files
    };
  },
  methods: {
    showNameInput() {
      this.showName = !this.showName;
      this.$emit(
        "updateSubFolder",
        { name: this.name, files: this.files },
        this.index
      );
    },
    createNewFile() {
      var newFile = {
        name: "",
        text: ""
      };
      this.files.push(newFile);
    },
    updateFile(file, index) {
      this.files[index] = file;
      this.$emit(
        "updateSubFolder",
        { name: this.name, files: this.files },
        this.index
      );
    },
    deleteMySelf() {
      this.$emit("deleteSubFolder", this.index);
    },
    deleteFile(index) {
      this.files.splice(index, 1);
    }
  }
};
</script>

<style scoped>
.subFolder {
  width: 100%;
  background-color: chartreuse;
}
</style>>