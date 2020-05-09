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
  props: { showName: Boolean },
  data() {
    return {
      name: "SubFolder",
      files: [
        { name: "hola", text: "adios" },
        { name: "hi", text: "bye" }
      ]
    };
  },
  methods: {
    showNameInput() {
      this.showName = !this.showName;
    },
    updateFile(file) {
      this.files[file.index] = file;
    }
  }
};
</script>

<style scoped>
.file {
  width: 100%;
  background-color: chartreuse;
}
</style>>