<template>
  <div>
    <div :id="'nodeContextMenu'+id" class="node" @dblclick.prevent.self="toggleChildView">
      <span v-show="showName">{{name}}</span>
      <input
        v-show="!showName"
        type="text"
        v-model="name"
        @keyup.enter="showNameInput"
        placeholder="Type the tree name here, then press enter"
      />
      <ejs-contextmenu :target="'#nodeContextMenu'+id" :items="menuItems" :select="onSelect"></ejs-contextmenu>
    </div>
   
    <div v-show="showSubFolders">
      <SubFolder
        v-for="(subFolder, index) in subFolders"
        v-bind:key="subFolder.id"
        v-bind:subFolder="subFolder"
        v-bind:index="index"
        v-on:updateSubFolder="updateSubFolder"
        v-on:deleteSubFolder="deleteSubFolder"
      />
    </div>
  </div>
</template>
<script>
import SubFolder from "./SubFolder.vue";
import Vue from "vue";
import { ContextMenuPlugin } from "@syncfusion/ej2-vue-navigations";

Vue.use(ContextMenuPlugin);

export default {
  name: "Node",
  components: {
    SubFolder
  },
  props: {
    index: Number,
    node: Object
  },
  data() {
    return {
      showSubFolders: true,
      showName: false,
      name: this.node.name,
      subFolders: this.node.subFolders,
      menuItems: [
        {
          text: "Delete tree"
        },
        {
          text: "Add subfolder"
        }
      ],
      id: this.node.id
    };
  },
  methods: {
    showNameInput() {
      this.showName = true;
      this.$emit("updateNode", this.me(), this.index);
    },
    createNewSubFolder() {
      var nextIds = this.subFolders.map(function(subFolder) {
        return subFolder.id;
      });
      var maxCollection = [...nextIds, 0];
      var newSubFolder = {
        id: Math.max.apply(Math, maxCollection) + 1,
        name: "",
        files: []
      };
      this.subFolders.push(newSubFolder);
    },
    updateSubFolder(subFolder, index) {
      this.$set(this.subFolders, index, subFolder);
      this.$emit("updateNode", this.me(), this.index);
    },
    deleteMySelf() {
      this.$emit("deleteNode", this.me());
    },
    deleteSubFolder(subFolder) {
      this.subFolders = this.subFolders.filter(function(item) {
        return item.id != subFolder.id;
      });
    },
    me() {
      return {
        id: this.id,
        name: this.name,
        subFolders: this.subFolders
      };
    },
    toggleChildView() {
      this.showSubFolders = !this.showSubFolders;
    },
    onSelect: function(args) {
      if (args.item.text === this.menuItems[0].text) {
        this.deleteMySelf();
      } else if (args.item.text === this.menuItems[1].text) {
        this.createNewSubFolder();
      }
    }
  }
};
</script>

<style scoped>
.node {
  width: 100%;
  background-color: darkgreen;
}
</style>>