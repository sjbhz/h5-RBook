<template>
  <van-tabbar route active-color="#fc9681" inactive-color="#ccc" safe-area-inset-bottom>
    <van-tabbar-item replace to="/home" icon="wap-home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/shop" icon="cart-o">购物</van-tabbar-item>
    <van-tabbar-item replace to="/message" icon="chat-o" :badge="msgNum">消息</van-tabbar-item>
    <van-tabbar-item replace to="/mine" icon="manager-o">我</van-tabbar-item>
  </van-tabbar>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    msgNum: Number
  }
});
</script>

<style>
</style>