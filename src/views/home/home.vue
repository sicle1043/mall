<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <tab-control
      @tabclick="tabClick"
      class="tab-control fixed"
      :titles="['流行', '新款', '精选']"
      ref="tabControlFixed"
      v-show="this.isTabFixed"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banners="banners"
        @swiperImageLoad="swiperImageLoad"
      ></home-swiper>
      <home-recommend-view :recommends="recommends"></home-recommend-view>
      <home-feature-view class="feature-view"></home-feature-view>
      <tab-control
        @tabclick="tabClick"
        :titles="['流行', '新款', '精选']"
        ref="tabControl"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>

    <back-top @click.native="backClick" v-show="isBackTopShow"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import HomeRecommendView from "./childrenComps/HomeRecommendView";
import HomeFeatureView from "./childrenComps/HomeFeatureView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/common/tabcontrol/TabControl";
import Scroll from "@/components/common/scroll/Scroll";

import GoodsList from "@/components/content/goods/GoodsList";
import BackTop from "@/components/content/backtop/BackTop";

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
      currentType: "pop",
      isBackTopShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommendView,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  methods: {
    // 事件
    tabClick(index) {
      this.currentType = Object.keys(this.goods)[index];
      this.$refs.tabControlFixed.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    contentScroll(position) {
      // 判断位置，决定backTop是否显示
      this.isBackTopShow = position.y < -500;

      // 判断位置，决定是否吸顶
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    loadMore() {
      this.getHomeGoodsData(this.currentType);

      this.$refs.scroll.refresh();
    },
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    },

    // 获取数据的方法
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

        this.$refs.scroll.finishPullUp();
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    this.getHomeMultiData();
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  position: relative;
  height: 100vh;
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
  z-index: 9;
  position: relative;
  background-color: #ffffff;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>