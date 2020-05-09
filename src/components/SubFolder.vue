<template>
  <div class="subFolder">
    <span v-show="showName" @click="showNameInput">{{name}}</span>
    <input v-show="!showName" type="text" v-model="name" @keyup.enter="showNameInput" />
  </div>
</template>

<script>
export default {
  name: "SubFolder",
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
    }
  }
};
</script>

<style scoped>
.file {
  width: 100%;
  background-color:chartreuse;
}
</style>>