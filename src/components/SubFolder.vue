<template>
  <div class="subFolder" @dblclick.prevent.self="toggleChildView">
    <span v-show="showName">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <button @click="deleteMySelf">Delete node</button>
    <button @click="createNewFile">Create file</button>
    <br />
    <div v-show="showFiles">
      <File
        v-for="(file, index) in files"
        v-bind:key="index"
        v-bind:file="file"
        v-bind:index="index"
        v-on:updateFile="updateFile"
        v-on:deleteFile="deleteFile"
      />
    </div>
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
      showFiles: true,
      showName: false,
      name: this.subFolder.name,
      files: this.subFolder.files
    };
  },
  methods: {
    showNameInput() {
      this.showName = true;
      this.$emit("updateSubFolder", this.me(), this.index);
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
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    deleteMySelf() {
      this.$emit("deleteSubFolder", this.index);
    },
    deleteFile(index) {
      this.files.splice(index, 1);
    },
    me() {
      return {
        name: this.name,
        files: this.files
      };
    },
    toggleChildView() {
      this.showFiles = !this.showFiles;
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