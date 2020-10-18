<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners='banners'></home-swiper>
    <home-recommend-view :recommends='recommends'></home-recommend-view>

  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper"
import HomeRecommendView from "./childrenComps/HomeRecommendView"
import { getHomeMultiData } from "@/network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
  },
  created() {
    getHomeMultiData().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style>
.nav-home {
  background-color: var(--color-tint);
}
</style>