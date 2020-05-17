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
        v-for="(file,index) in files"
        :key="file.id"
        v-bind:index="index"
        v-bind:file="file"
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
      files: this.subFolder.files,
      id: this.subFolder.id
    };
  },
  methods: {
    showNameInput() {
      this.showName = true;
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    createNewFile() {
      var nextIds = this.files.map(function(file) {
        return file.id;
      });
      var maxCollection = [...nextIds, 0];
      var newFile = {
        id: Math.max.apply(Math, maxCollection) + 1,
        name: "",
        text: ""
      };
      this.files.push(newFile);
    },
    updateFile(file, index) {
      this.$set(this.files, index, file);
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    deleteMySelf() {
      this.$emit("deleteSubFolder", this.me());
    },
    deleteFile(file) {
      this.files = this.files.filter(function(item) {
        return item.id != file.id;
      });
    },
    me() {
      return {
        id: this.id,
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