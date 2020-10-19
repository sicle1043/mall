<template>

  <img :src="imgLink" alt="" />
</template>

<script>
export default {
  name: "HomeFeatureView",
  data() {
    return {
      imgLink: require("@/assets/img/home/recommend_bg.jpg")
    };
  },
};
</script>

<style>
</style>