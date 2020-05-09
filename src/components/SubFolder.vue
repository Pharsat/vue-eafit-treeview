<template>
  <div class="subFolder">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <File
      v-for="file in files"
      v-bind:key="file"
      v-bind:fileName="file.name"
      v-bind:fileText="file.text"
      showName="false"
      showText="true"
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