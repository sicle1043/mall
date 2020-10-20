<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <home-feature-view class="feature-view"></home-feature-view>
    <tab-control
      @tabclick="tabClick"
      class="tab-control"
      :titles="['流行', '新款', '精选']"
    ></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import HomeFeatureView from "./childrenComps/HomeFeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/common/tabcontrol/TabControl";

import GoodsList from "@/components/content/goods/GoodsList";

import { getHomeMultiData, getHomeGoodsData } from "@/network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: 'pop',
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
  },
  methods: {
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index]
    },

    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list

    }

  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
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
  z-index: 9;
}
</style>