<template>
      <tab-bar>
      <tab-bar-item path="/home" activeColor="#f86442">
        <template v-slot:item-icon>
          <img src="@/assets/img/home.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/home_active.svg" />
        </template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <template v-slot:item-icon>
          <img src="@/assets/img/category.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/category_active.svg" />
        </template>
        <template v-slot:item-text><div>分类</div></template>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <template v-slot:item-icon>
          <img src="@/assets/img/cart.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/cart_active.svg" />
        </template>
        <template v-slot:item-text><div>购物车</div></template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="@/assets/img/profile.svg" />
        </template>
        <template v-slot:item-icon-active>
          <img src="@/assets/img/profile_active.svg" />
        </template>
        <template v-slot:item-text><div>首页</div></template>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from "@/components/common/tabbar/TabBar.vue";
import tabBarItem from "@/components/common/tabbar/TabBarItem.vue";
export default {
  name:'mainTabBar',
  components:{
    tabBar,
    tabBarItem
  }


}
</script>

<style>

</style>