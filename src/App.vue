<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar class="tab-bar"></main-tab-bar>
  </div>
</template>
<script>
import MainTabBar from "@/components/content/maintabbar/MainTabBar";

export default {
  name: "App",
  components: {
    MainTabBar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
.tab-bar {
  z-index: 10;
}
</style>
