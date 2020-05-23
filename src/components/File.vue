<template>
  <div class="file">
    <div class="div-row" :id="'fileContextMenu'+id">
      <div class="div-icon" @dblclick.prevent.self="showTextInput">
        <img class="icon" src="../assets/file.png" @dblclick.prevent.self="showTextInput" />
      </div>
      <div class="div-name" @dblclick.prevent.self="showTextInput">
        <span v-show="showName">{{name}}</span>
        <input
          v-show="!showName"
          type="text"
          v-model="name"
          @keyup.enter="nameChanged"
          placeholder="Type the file name here, then press enter"
        />
        <p v-show="showText" @dblclick="showTextInput">{{text}}</p>
        <br />
        <textarea
          v-show="showTextArea"
          v-model="text"
          @keyup.enter="textChanged"
          placeholder="Type the file content here, then press enter."
        />
        <ejs-contextmenu :target="'#fileContextMenu'+id" :items="menuItems" :select="onSelect"></ejs-contextmenu>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ContextMenuPlugin);

export default {
  name: "File",
  props: {
    file: Object,
    index: Number
  },
  data() {
    return {
      showName: this.file.name !== "",
      showText: this.file.text !== "",
      showTextArea: false,
      name: this.file.name,
      text: this.file.text,
      menuItems: [
        {
          text: "Delete file"
        },
        {
          text: "Modify file"
        }
      ],
      id: this.file.id
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
      this.$emit("deleteFile", this.me());
    },
    showEditText() {
      this.showTextArea = true;
      this.showText = false;
    },
    me() {
      return {
        id: this.id,
        name: this.name,
        text: this.text
      };
    },
    onSelect: function(args) {
      if (args.item.text === this.menuItems[0].text) {
        this.deleteMySelf();
      } else if (args.item.text === this.menuItems[1].text) {
        this.showEditText();
      }
    }
  }
};
</script>

<style scoped>
.file {
  width: 100%;
  background-color: beige;
  box-sizing: border-box;
}
</style>>