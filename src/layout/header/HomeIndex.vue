<template>
  <div class="header-container">
    <div v-if="showBtn" class="icon-left" @click="goLastPage">
      <van-icon name="list-switch" />
    </div>
    <van-tabs v-model:active="activeName" class="Vtabs">
      <van-tab title="关注" name="a">内容 1</van-tab>
      <van-tab title="发现" name="b">内容 2</van-tab>
      <van-tab title="江苏" name="c">内容 3</van-tab>
    </van-tabs>
    <div v-if="showBtn" class="icon-right" @click="goSearch">
      <van-icon name="search" />
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  props: {
    // 是否显示返回按钮
    showBtn: Boolean
  },
  setup() {
    const activeName = ref("b");
    const router = useRouter();

    const goLastPage = () => {
      router.go(-1);
    };
    const goSearch = () => {
      router.go(-1);
    };
    return {
      activeName,
      goLastPage,
      goSearch
    };
  }
};
</script>

<style lang="scss" scoped>
.header-container {
  border: 1px solid red;
  height: 45px;
  border-bottom: 1px solid #ccc;
  // background: linear-gradient(45deg, #fc9681, #409eff);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #fff;
  position: relative;

  .icon-left {
    border: 1px solid red;
    z-index: 9999;
    color: black;
    position: absolute;
    height: 100%;
    left: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
  .Vtabs {
    align-items: center;
    height: 100%;
    width: 100%;
  }
  .icon-right {
    border: 1px solid red;
    z-index: 9999;
    color: black;
    position: absolute;
    height: 100%;
    right: 10px;
    font-size: 20px;
    display: flex;
    align-items: center;
  }
}
</style>