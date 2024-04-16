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

    <div class="content_top">
      <div class="content_T">
        <!-- <div class="imag_L"></div> -->
        <van-image
          class="imag_L"
          round
          src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"
        />
        <van-button icon="plus" round type="primary" size="mini" class="plus_btn" />
        <div class="bgd_R">
          <div class="name_self">fansi</div>
          <div class="id_self">
            <span>ID号：32223408</span>
            <span class="ewm">二维码</span>
          </div>
        </div>
      </div>
      <div style="padding:10px 0">
        <div class="introduce_me">点击这里，填写简介</div>
        <div style="margin:8px">
          <span class="female">
            <span style="color:red">♀</span> 23岁
          </span>
        </div>
      </div>
      <div class="concern">
        <div class="interact_left">
          <div v-for="(item, index) in concernList" :key="index">
            <div style="width:33%;float:left">
              <div class="eachItem">{{ item.num }}</div>
              <div class="eachItem">{{ item.title }}</div>
            </div>
          </div>
        </div>
        <div class="edit_right">
          <div class="eachIcon">
            <van-button round size="small" style="font-size:10px">编辑资料</van-button>
            <van-button round icon="setting-o" class="setting_icon" size="small"></van-button>
          </div>
        </div>
      </div>
      <div style="margin:2px">
        <van-grid :column-num="3">
          <van-grid-item text="开始" icon="play-circle-o">
            <template #text>查看推荐好物</template>
          </van-grid-item>
          <van-grid-item text="暂停" icon="pause-circle-o">
            <template #text>学创作找灵感</template>
          </van-grid-item>
          <van-grid-item text="重置" icon="replay">
            <template #text>看过的笔记</template>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <div class="content_bottom">
      <div class="title_t">
        <van-tabs v-model:active="active">
          <van-tab title="笔记">1笔记</van-tab>
          <van-tab title="收藏">收藏</van-tab>
          <van-tab title="赞过">赞过</van-tab>
        </van-tabs>
      </div>
      <div></div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const active = ref('')
const concernList = ref([
  {
    title: "关注",
    num: 116
  },
  { title: "粉丝", num: 5 },
  { title: "获赞与收藏", num: 0 }
]);
</script>

<style scoped lang="scss">
.message_index {
  font-size: 15px;
  height: 100%;
  background: rgb(216, 212, 235);
  // color:#fff;
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

  .content_top {
    // border: 1px solid red;
    height: 7rem;
    .content_T {
      display: flex;
      margin-top: 8px;
      width: 100%;
      height: 130px;
      line-height: 130px;
      border: 1px solid #ddd;

      .imag_L {
        margin: 20px 10px 0 10px;
        width: 1.2rem;
        height: 1.2rem;
        border: 1px solid #eee;
        border-radius: 50%;
        // background: no-repeat center/100% url("./../../assets/c2.jpg");
      }

      .plus_btn {
        margin-top: 1rem;
        margin-left: -0.5rem;
      }

      .bgd_R {
        width: calc(100% - 60px);
        height: 100%;
        margin-left: 0.3rem;

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

    .introduce_me {
      font-size: 0.2rem;
      margin: 10px;
      margin-left: 10px;
    }
    .female {
      display: inline-block;
      width: 80px;
      height: 26px;
      font-size: 13px;
      line-height: 26px;
      border: 1px solid #ddd;
      background: #ddd;
      border-radius: 10px;
      text-align: center;
    }
    .concern {
      display: flex;
      height: 90px;
      font-size: 0.25rem;
      border: 1px solid #eee;
      padding: 20px 0;
      text-align: center;
      vertical-align: middle;

      .interact_left {
        width: 55%;

        .eachItem {
          height: 35px;
          line-height: 35px;
        }
      }

      .edit_right {
        margin-left: 0.5rem;
        width: 40%;

        .eachIcon {
          line-height: 70px;
          height: 70px;

          .setting_icon {
            // position: fixed;
            margin: 0 40px 0 40px;
            // right: 25px;
          }
        }
      }
    }
  }

  .content_bottom {
    margin-top: 100px;
    background: #fff;
    height: 13rem;
    border-radius: 30px;
    .title_t {
      line-height: 1.3rem;
      height: 1.3rem;
      border: 1px solid #eee;
    }
  }
}
</style>