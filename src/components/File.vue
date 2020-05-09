<template>
  <div class="file">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
    <br />
    <span v-show="showText" @click="showTextInput">{{text}}</span>
    <textarea v-show="!showText" v-model="text" @keyup.enter="showTextInput" />
  </div>
</template>

<script>
export default {
  name: "File",
  props: [],
  data() {
    return {
      showName: false,
      showText: false
    };
  },
  methods: {
    showNameInput() {
      this.showName = !this.showName;
    },
    showTextInput() {
      this.showText = !this.showText;
    }
  }
};
</script>

<style scoped>
.file {
  width: 100%;
  background-color:beige;
}
</style>>