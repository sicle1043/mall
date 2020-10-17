<template>
  <div id="home">
    <nav-bar class="nav-home">
      <template v-slot:center>购物街</template>
    </nav-bar>
    <h1>首页</h1>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style>
.nav-home{
  background-color: var(--color-tint);
}
</style>