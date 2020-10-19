<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view class="feature-view"></home-feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <ul>
      <li v-for="item in 50 * [1]" :key="item.index">列表</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import HomeFeatureView from "./childrenComps/HomeFeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/common/tabcontrol/TabControl";

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
    HomeFeatureView,
    TabControl,
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
#home {
  padding-top: 44px;
}
.nav-home {
  background-color: var(--color-tint);
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.feature-view {
  width: 100%;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>