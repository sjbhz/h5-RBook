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
        <van-grid-item icon="chat-o" text="客服消息" />
        <van-grid-item icon="shop-collect-o" text="关注店铺" />
        <van-grid-item icon="description-o" text="消息记录" />
      </van-grid>

      <!-- <van-row>
        <van-col span="5">
          <div class="Fcenter">
            <van-icon name="bag-o" class="Ficon" />
          </div>
          <div class="Fcenter">我的订单</div>
        </van-col>
        <van-col span="4">
          <div class="Fcenter">
            <van-icon name="cart-o" class="Ficon" />
          </div>
          <div class="Fcenter">购物车</div>
        </van-col>
        <van-col span="5">
          <div class="Fcenter">
            <van-icon name="chat-o" class="Ficon" />
          </div>
          <div class="Fcenter">客服消息</div>
        </van-col>
        <van-col span="5">
          <div class="Fcenter">
            <van-icon name="shop-collect-o" class="Ficon" />
          </div>
          <div class="Fcenter">关注店铺</div>
        </van-col>
        <van-col span="5">
          <div class="Fcenter">
            <van-icon name="description-o" class="Ficon" />
          </div>
          <div class="Fcenter">消息记录</div>
        </van-col>
      </van-row>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>

<style scoped lang="scss">
.shop_index {
  font-size: 15px;

  .Vsearch {
    width: calc(100% - 30px);
  }

  .Fcenter {
    text-align: center;

    .Ficon {
      font-size: 15px;
    }
  }
}
</style>