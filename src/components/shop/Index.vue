<template>
  <div class="shop_index">
    <van-sticky>
      <div style="width:100%;display:flex">
        <van-search v-model="value" placeholder="请输入搜索关键词" class="Vsearch" />
        <img src="@/assets/more.svg" style="width:20px;height:54px" />
      </div>
    </van-sticky>
    <div>
      <van-grid :column-num="5">
        <van-grid-item icon="bag-o" text="我的订单" />
        <van-grid-item icon="cart-o" text="购物车" />
        <van-grid-item icon="chat-o" text="客服消息" @click="handlechart" />
        <van-grid-item icon="shop-collect-o" text="关注店铺" />
        <van-grid-item icon="description-o" text="消息记录" @click="handleMsg" />
      </van-grid>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const value = ref("");

const handleMsg = () => {
  console.log(11)
  router.push('/shop/MessageHistroy')
};
const handlechart = () => {
  console.log(11)
  router.push('/shop/Chart')
};
</script>

<style scoped lang="scss">
.shop_index {
  font-size: 15px;

  .Vsearch {
    width: calc(100% - 30px);
  }

  
}
</style>