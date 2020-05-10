<template>
  <div class="file">
    <span v-show="showName" @dblclick.prevent.self="showTextInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="nameChanged" />
    <br />
    <button @click="deleteMySelf">Delete file</button> <button @click="showEditText">Edit Text</button>
    <br />
    <p v-show="showText" @dblclick="showTextInput">{{text}}</p>
    <textarea v-show="showTextArea" v-model="text" @keyup.enter="textChanged" />
    <button v-show="showTextArea" @click="textChanged">Save file</button> 
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
      showText: false,
      showTextArea: false,
      name: this.file.name,
      text: this.file.text
    };
  },
  methods: {
    textChanged() {
      this.showTextArea = false;
      this.$emit("updateFile", this.me(), this.index);
    },
    nameChanged() {
      this.showNameInput();
      this.$emit("updateFile", this.me(), this.index);
    },
    showNameInput() {      
      this.showName = true;
    },
    showTextInput() {
      this.showText = this.showTextArea ? this.showText : !this.showText;
    },
    deleteMySelf() {
      this.$emit("deleteFile", this.index);
    },
    showEditText(){
      this.showTextArea = true;
      this.showText = false;
    },
    me() {
      return {
        name: this.name,
        text: this.text
      };
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