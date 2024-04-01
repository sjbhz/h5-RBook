<template>
  <div class="message_index">
    <van-sticky>
      <van-nav-bar title>
        <template #left>
          <van-icon name="list-switch" />
        </template>
        <template #right>
          <van-icon name="share-o" />
        </template>
      </van-nav-bar>
    </van-sticky>

    <div class="content_T">
      <!-- <div class="imag_L"></div> -->
      <van-image
        class="imag_L"
        round
        width="100px"
        height="100px"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
      />
      <van-button icon="plus" round type="primary" size="small" class="plus_btn" />
      <div class="bgd_R">
        <div class="name_self">fansi</div>
        <div class="id_self">
          <span>ID号：32223408</span>
          <span class="ewm">二维码</span>
        </div>
      </div>
    </div>
    <div style="font-size:12px;margin:10px;margin-left:0">点击这里，填写简介</div>
    <div style="margin:10px 0">
      <span class="female">
        <span style="color:red">♀</span> 23岁
      </span>
    </div>
    <div style="display:flex;height:80px;border:1px solid red">
      <div style="width:60%">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div style="width:40%">2</div>
    </div>
    <div>
      <!-- <van-grid :gutter="5">
        <van-grid-item v-for="value in 3" :key="value" icon="photo-o" text="文字" />
      </van-grid>-->
      <van-space>
        <!-- <van-grid-item :key="1" icon="photo-o" text="文字" />
        <van-grid-item :key="2" icon="photo-o" text="文字" />
        <van-grid-item :key="3" icon="photo-o" text="文字" />-->
       
      </van-space>
    </div>

    <!-- <van-row style="margin-top:8px">
      <van-col span="8">
        <div class="Fcenter">
          <van-icon name="like-o" class="Ficon" />
        </div>
        <div class="Fcenter">赞与收藏</div>
      </van-col>
      <van-col span="8">
        <div class="Fcenter">
          <van-icon name="contact-o" class="Ficon" />
        </div>
        <div class="Fcenter">新增关注</div>
      </van-col>
      <van-col span="8">
        <div class="Fcenter">
          <van-icon name="chat-o" class="Ficon" />
        </div>
        <div class="Fcenter">评论与@</div>
      </van-col>
    </van-row>-->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
</script>

<style scoped lang="scss">
.message_index {
  font-size: 15px;
  .found {
    display: inline-block;
    margin-left: 4px;
  }

  .Fcenter {
    text-align: center;

    .Ficon {
      font-size: 15px;
    }
  }
  .content_T {
    display: flex;
    margin-top: 8px;
    width: 100%;
    height: 130px;
    line-height: 130px;
    border: 1px solid #ddd;
    .imag_L {
      margin: 20px 10px 0 10px;
      width: 100px;
      height: 100px;
      border: 1px solid #eee;
      border-radius: 50%;
      // background: no-repeat center/100% url("./../../assets/c2.jpg");
    }
    .plus_btn {
      margin-top: 94px;
      margin-left: -42px;
    }
    .bgd_R {
      width: calc(100% - 60px);
      height: 100%;
      margin-left: 8px;
      .name_self {
        height: 50%;
        font-size: 18px;
        font-weight: bold;
      }
      .id_self {
        line-height: 45px;
        font-size: 14px;
        color: #999;
        .ewm {
          display: inline-block;
          margin-left: 8px;
        }
      }
    }
  }

  .female {
    display: inline-block;
    width: 90px;
    height: 26px;
    font-size: 13px;
    line-height: 26px;
    border: 1px solid #ddd;
    background: #ddd;
    border-radius: 10px;
    text-align: center;
  }
}
</style>