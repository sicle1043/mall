<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <template v-slot:left
        ><img src="@/assets/img/common/back.svg" alt=""
      /></template>
      <template v-slot:center>
        <div class="title">
          <div
            v-for="(item, index) in titles"
            :key="item.id"
            class="title-item"
            :class="{ active: currentIndex === index }"
            @click="titleClick(index)"
          >
            {{ item }}
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.detail-nav-bar img {
  margin-top: 10px;
}
.title {
  display: flex;
}
.title-item {
  flex: 1;
  font-size: 13px;
  color: black;
}
.active {
  color: var(--color-high-text);
}
</style>