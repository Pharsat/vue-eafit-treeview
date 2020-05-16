<template>
  <div :id="uniqueName" class="file">
    <span v-show="showName" @dblclick.prevent.self="showTextInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="nameChanged" />
    <p v-show="showText" @dblclick="showTextInput">{{text}}</p>
    <textarea v-show="showTextArea" v-model="text" @keyup.enter="textChanged" />
    <ejs-contextmenu :target="'#'+uniqueName" :items="menuItems" :select="onSelect"></ejs-contextmenu>
  </div>
</template>

<script>
import Vue from "vue";
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ContextMenuPlugin);

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
      text: this.file.text,
      menuItems: [
        {
          text: "Delete file"
        },
        {
          text: "Modify file"
        }
      ],
      uniqueName: "file" + this.index
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
    showEditText() {
      this.showTextArea = true;
      this.showText = false;
    },
    me() {
      return {
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
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
.file {
  width: 100%;
  background-color: beige;
}
</style>>