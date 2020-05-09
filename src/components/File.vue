<template>
  <div class="file">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="nameChanged" />
    <br />
    <span v-show="showText" @dblclick="showTextInput">{{text}}</span>
    <textarea v-show="!showText" v-model="text" @keyup.enter="textChanged" />
  </div>
</template>

<script>
export default {
  name: "File",
  props: {
    index: Number,
    file: Object
  },
  data() {
    return {
      showName: false,
      showText: true,
      name: this.file.name,
      text: this.file.text
    };
  },
  methods: {
    textChanged() {
      this.showTextInput();
      this.$emit('updateFile', this);
    },
    nameChanged() {
      this.showNameInput();
      this.$emit('updateFile', this);
    },
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
  background-color: beige;
}
</style>>