<template>
  <div class="message_index">
    <van-sticky>
      <van-nav-bar title="消息">
        <template #right>
          <van-icon name="friends-o" />
          <van-popover v-model:show="showPopover" :actions="actionsList" @select="onSelect">
            <template #reference>
              <span class="found">发现群聊</span>
            </template>
          </van-popover>
        </template>
      </van-nav-bar>
    </van-sticky>

    <van-row style="margin-top:12px">
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
    </van-row>
    <van-divider />
    <!-- 聊天列表区 -->

    <div>
      <div v-for="item in list" :key="item" class="item_E">
        <div class="img_left">
          <span class="image_I"></span>
        </div>
        <div class="cont_right">
          <div class="title_L">
            <div class="t_top">{{ item.name }}</div>
            <div class="c_bottom">{{item.meeage}}</div>
          </div>
          <div class="time_R">
            <div class="r_top">{{item.week}}</div>
            <div class="r_bottom">
              <van-badge size="small" :content="20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { showToast } from "vant";
import { ref } from "vue";

const showPopover = ref(false);
const actionsList = [
  { text: "创建群聊", icon: "add-o" },
  { text: "群聊广场", icon: "music-o" },
  { text: "找搭子", icon: "more-o" }
];
const onSelect = action => showToast(action.text);

const list = ref([]);
const onLoad = () => {
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 16; i++) {
      list.value.push({
        number: list.value.length + 1,
        name: "随便什么测试群1",
        meeage: "今天天气真不错",
        week: "星期六",
        time: "17:25"
      });
    }
  }, 1000);
};
onLoad();

// return {
//   list,
//   onLoad,
// };
</script>

<style scoped lang="scss">
.message_index {
  font-size: 0.3rem;
  .found {
    display: inline-block;
    margin-left: 4px;
  }

  .Fcenter {
    text-align: center;

    .Ficon {
      font-size: 0.5rem
    }
  }

  .item_E {
    height: 60px;
    line-height: 60px;
    margin: 10px 20px; 
    border: 1px solid #ddd;
    display: flex;
    .img_left {
      width: 50px;
      height: 50px;

      .image_I {
        display: inline-block;
        width: 48px;
        height: 43px;
        line-height: 43px;
        margin-left:2px;
        vertical-align: middle;
        border-radius: 50%;
        border: 1px solid #eee;
        background: no-repeat center/100% url("./../../assets/c2.jpg");
      }
    }
    .cont_right {
      width: calc(100% - 50px);
      height: 50px;
      display: flex;
      .title_L {
        height: 100%;
        width: calc(100% - 60px);
        margin-left: 10px;
        .t_top {
          width: 100%;
          height: 50%;
          margin-top: -10px;
        }
        .c_bottom {
          font-size: 0.2rem;
          color: #aaa;
        }
      }
      .time_R {
        width: 50px;
        height: 100%;
        .r_top {
          width: 100%;
          height: 50%;
          margin-top: -10px;
          font-size: 0.2rem;
          color: #999;
        }
        .r_bottom {
          margin-top: 6px; 
          margin-left:-8px;
          .van-badge{
            font-size:0.25rem;
          }
        }
      }
    }
  }
}
</style>