<template>
  <van-sticky>
    <Header ref="header" class="head" :showBtn="true" />
  </van-sticky>

  <div class="card">
    <van-row>
      <van-col span="12">
        <div v-for="(item,index) in countNum" :key="index">
          <div class="item_WH">
            <img class="item_WH" :src="'./../../../dogs/a'+ item +'.jpg'" />
            <div class="title_F">熊孩子，一日一照，开心每一天</div>
            <div class="author_F">
              <span class="header_img_left"></span>
              <span class="name_auth">
                <span class="name_txt">小崽子zzz</span>
              </span>
              <span class="acivit_num">
                <span class="heart_svg"></span>
                <span class="num">508</span>
              </span>
            </div>
          </div>
        </div>
      </van-col>
      <van-col span="12">
        <van-cell v-for="(item,index) in (countNum)" :key="index">
          <div class="item_WH" style="padding:10px 8px">
            <img class="item_WH" :src="'./../../../dogs/a'+ (item+18) +'.jpg'" />
            <div class="title_F">熊孩子，一日一照，开心每一天</div>
            <div class="author_F">
              <span class="header_img_right"></span>
              <span class="name_auth">
                <span class="name_txt">旺仔牛奶</span>
              </span>
              <span class="acivit_num">
                <span class="heart_svg"></span>
                <span class="num">108</span>
              </span>
            </div>
          </div>
        </van-cell>
        <van-back-top />
      </van-col>
    </van-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Header from "./../../layout/header/HomeIndex.vue";

defineProps<{ msg: string }>();

const countNum = ref(18); //每侧图片数量
</script>

<style scoped lang="scss">
head {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  line-height: 56px; /* 这里也需要添加高度 */
  background-color: #fff;
  border-bottom: 1px solid #eee;
  text-align: center;

  // height: 60px;
}

.card {
  .item_WH {
    width: 90%;
    height: 90%;
    padding: 15px 8px;
    .img_WH {
      width: 45%;
      height: 70%;
    }

    .title_F {
      font-size: 14px;
      font-weight: bold;
    }
    .author_F {
      font-size: 10px;
      margin: 8px 5px;
      margin: 0 10%;
      .header_img_left {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #eee;
        background: no-repeat center/99% url("./../../assets/c1.jpg");
        left: 0;
      }
      .header_img_right {
        display: inline-block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 1px solid #eee;
        background: no-repeat center/99% url("./../../assets/c2.jpg");
        left: 0;
      }
      .name_auth {
        display: inline-block;
        line-height: 20px;
        height: 20px;
        text-align: center;
        width: calc(100% - 155px);
        .name_txt {
          float: left;
          margin-left: 10px;
          // vertical-align:middle;
        }
      }
      .acivit_num {
        display: inline-block;
        width: 100px;
        height: 20px;
        line-height: 20px;
        .heart_svg {
          background: no-repeat center/99% url("./../../assets/heart.svg");
          margin-bottom: -1px;
          margin-left: 8px;
          display: inline-block;
          width: 18px;
          height: 18px;
        }
        .num {
          display: inline-block;
          margin-left: 8px;
        }
      }
    }
  }
}
</style>
