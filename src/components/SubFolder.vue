<template>
  <div class="subFolder subFolderStyle">
    <div class="div-row" :id="'subFolderContextMenu'+id">
      <div class="div-icon" @dblclick.prevent.self="toggleChildView">
        <img
          class="icon"
          src="../assets/closed-folder.png"
          v-show="!showFiles"
          @dblclick.prevent.self="toggleChildView"
        />
        <img
          class="icon"
          src="../assets/opened-folder.png"
          v-show="showFiles"
          @dblclick.prevent.self="toggleChildView"
        />
      </div>
      <div class="div-name" @dblclick.prevent.self="toggleChildView">
        <span v-show="showName">{{name}}</span>
        <input
          v-show="!showName"
          type="text"
          v-model="name"
          @keyup.enter="showNameInput"
          placeholder="Type the subfolder name here, then press enter"
        />
        <ejs-contextmenu :target="'#subFolderContextMenu'+id" :items="menuItems" :select="onSelect"></ejs-contextmenu>
      </div>
    </div>
    <div class="div-row" v-if="this.files.length > 0" v-show="showFiles">
      <File
        v-for="(file,index) in files"
        :key="file.id"
        v-bind:index="index"
        v-bind:file="file"
        v-on:updateFile="updateFile"
        v-on:deleteFile="deleteFile"
      />
    </div>
    <br v-show="this.subFolders.length > 0" />
    <div class="div-row" v-if="this.subFolders.length > 0" v-show="showFiles">
      <SubFolder
        v-for="(subFolder, index) in subFolders"
        v-bind:key="subFolder.id"
        v-bind:subFolder="subFolder"
        v-bind:index="index"
        v-on:updateSubFolder="updateSubFolder"
        v-on:deleteSubFolder="deleteSubFolder"
        v-bind:allowSubFoldersIntoSubFoldersAddition="allowSubFoldersIntoSubFoldersAddition"
      />
    </div>
  </div>
</template>
<script>
import File from "./File.vue";
import Vue from "vue";
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ContextMenuPlugin);

export default {
  name: "SubFolder",
  components: {
    File
  },
  props: {
    index: Number,
    subFolder: Object,
    allowSubFoldersIntoSubFoldersAddition: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showFiles: true,
      showName: this.subFolder.name !== "",
      name: this.subFolder.name,
      files: this.subFolder.files,
      subFolders: this.subFolder.subFolders,
      menuItems: this.getContextMenuItems(),
      id: this.subFolder.id
    };
  },
  methods: {
    showNameInput() {
      this.showName = true;
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    createNewFile() {
      var newFile = {
        id: this.id + "_" + this.getNextId(),
        name: "",
        text: ""
      };
      this.files.push(newFile);
    },
    createNewSubFolder() {
      var newSubFolder = {
        id: this.id + "_" + this.getNextId(),
        name: "",
        files: [],
        subFolders: []
      };
      this.subFolders.push(newSubFolder);
    },
    updateFile(file, index) {
      this.$set(this.files, index, file);
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    deleteMySelf() {
      this.$emit("deleteSubFolder", this.me());
    },
    deleteFile(file) {
      this.files.splice(
        this.files.findIndex(item => item["id"] == file.id),
        1
      );
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    me() {
      return {
        id: this.id,
        name: this.name,
        files: this.files,
        subFolders: this.subFolders
      };
    },
    toggleChildView() {
      this.showFiles = !this.showFiles;
    },
    onSelect: function(args) {
      if (args.item.text === this.menuItems[0].text) {
        this.deleteMySelf();
      } else if (args.item.text === this.menuItems[1].text) {
        this.createNewFile();
      } else if (args.item.text === this.menuItems[2].text) {
        this.createNewSubFolder();
      }
    },
    getNextId() {
      var fileNextIds = this.files.map(function(file) {
        var idsComposition = file.id.split("_");
        return idsComposition[idsComposition.length - 1];
      });
      var subFolderNextIds = this.subFolders.map(function(subFolder) {
        var idsComposition = subFolder.id.split("_");
        return idsComposition[idsComposition.length - 1];
      });
      var maxCollection = [...fileNextIds, ...subFolderNextIds, 0];
      return Math.max.apply(Math, maxCollection) + 1;
    },
    updateSubFolder(subFolder, index) {
      this.$set(this.subFolders, index, subFolder);
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    deleteSubFolder(subFolder) {
      this.subFolders.splice(
        this.subFolders.findIndex(item => item["id"] == subFolder.id),
        1
      );
      this.$emit("updateSubFolder", this.me(), this.index);
    },
    getContextMenuItems() {
      var menuItems = [
        {
          text: "Delete subfolder"
        },
        {
          text: "Add file"
        }
      ];
      if (this.allowSubFoldersIntoSubFoldersAddition) {
        menuItems.push({ text: "Add subfolder" });
      }
      return menuItems;
    }
  }
};
</script>

<style scoped>
.subFolder {
  width: 100%;
  box-sizing: border-box;
}
</style>