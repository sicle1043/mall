<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      v-for="(item, index) in titles"
      :key="item.index"
      @click="itemClick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>


<style>
.tab-control {
  line-height: 40px;
  height: 40px;
  display: flex;
  text-align: center;
  background-color: #ffffff;
  font-size: 14px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>