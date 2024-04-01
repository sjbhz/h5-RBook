<template>
  <router-view></router-view>
  <Footer :msgNum="99" />
</template>

<script lang="ts">
import Footer from "./../../../src/layout/footer/index.vue";
import { defineComponent } from "vue";

// 在script标签中不设置setup即可像如下这样写，如果设置setup，下面的不需要
export default defineComponent({
  name: "Home",
  components: {
    Footer
  },
  mounted() {
    // 通过Vue实例thi访问
    console.log("this", this.$API);
    // (不推荐) 通过getCurrentInstance来访问，Vue3新增用来解决setup中无法通过this访问Vue实例
    // getCurrentInstance().appContext.config.globalProperties.$API
  }
});
</script>

<style scoped>
</style>
