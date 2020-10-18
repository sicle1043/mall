<template>
  <div class="recommend-view">
    <a
      class="view-item"
      :href="item.link"
      v-for="item in recommends"
      :key="item.index"
    >
      <img :src="item.image" />
      {{ item.title }}
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeRecommmendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.recommend-view {
  display: flex;
}
.view-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
  padding: 20px 0 12px;
  border-bottom: 8px solid #eee;
}
.view-item img {
  width: 85%;
  margin-bottom: 5px;
}
</style>