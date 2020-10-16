<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
      <main-tab-bar></main-tab-bar>
    </div>
  </div>
</template>
<script>
import mainTabBar from "@/components/content/maintabbar/MainTabBar";
export default {
  name: "App",
  components: {
    mainTabBar,
  },
};
</script>
<style>
</style>
