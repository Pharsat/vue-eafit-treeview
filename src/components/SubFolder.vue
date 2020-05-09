<template>
  <div class="subFolder">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <File
      v-for="(file, index) in files"
      v-bind:key="file"
      v-bind:file="file"
      v-bind:index="index"
      v-on:updateFile="updateFile"
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
      this.$emit("updateSubFolder", this);
    },
    updateFile(file) {
      this.files[file.index] = file;
      this.$emit("updateSubFolder", this);
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