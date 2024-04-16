<template>
  <div id="Customer" style="position:relative">
    <div class="header" id="head">
      <div>
        <img src="@/assets/WX/聊天返回.png" alt="" style="width:0.5rem" @click="goback">
        <p>{{ chater.name }}</p>
      </div>
      <div>
        <img src="@/assets/WX/聊天录像.png" alt="">
        <img src="@/assets/WX/聊天更多.png" alt="">
      </div>
    </div>
    <div class="population" :style="{ width: screenWidth + 'px', height: screenHeight + 'px' }">
      <div class="content" id="MyCenter" @click="back"
        :style="{ height: expsions ? screenHeight - 310 + 'px' : screenHeight - 125 + 'px', paddingTop: divhead + 'px', paddingBottom: divhead + 'px' }">
        <ul class="pop__clearfix" v-for="(item, index) in list" :key="index">
          <!-- 用户 -->
          <li class="pop__chat-msg-me" v-if="item.id == 1">
            <div class="pop__chat-msg-content">
              <div class="pop__chat-msg-msg" v-if="item.cont"><span>{{ item.cont }}</span></div>
              <div class="pop__chat-msg-msg1" @click="imgs(item, index)" v-if="item.img">
                <!-- <img :src="item.img" :large="item.img" preview="1" >. -->
                <img :src="item.img">
              </div>
              <div class="pop__chat-msg-msg" v-if="item.card"
                style="background:#ffffff;background-color: #ffffff;border-color: #ffffff;color:#000000">
                <!-- <img :src="item.img" :large="item.img" preview="1" >. -->
                <p>{{ item.card.title }}</p>
                <img :src="item.card.imgurl">
              </div>
            </div>
            <span class="pop__chat-msg-avatar">
              <img src="@/assets/WX/10.png" />
              <!-- <img src="xxx.jpg" large="xxx_3x.jpg" preview="2" preview-text="描述文字"> -->
            </span>
          </li>

          <!-- 好友 -->
          <li class="pop__chat-msg-me2" v-if="item.id == 2">
            <span class="pop__chat-msg-avatar">
              <img :src="chater.headimg">
            </span>
            <div class="pop__chat-msg-content2">
              <div class="pop__chat-msg-msg2" v-if="item.cont"><span>{{ item.cont }}</span></div>
              <div class="pop__chat-msg-msg22" @click="imgs(item, index)" v-if="item.img">
                <!-- <img :src="item.img" :large="item.img" preview="1" >. -->
                <img :src="item.img">
              </div>
            </div>
          </li>
          <!-- 显示最近一次的聊天时间 -->
          <li class="time" v-if="item.id == 0">{{ item.time }}</li>
        </ul>
      </div>
      <div class="Bottom">
        <div class="icomess" v-if="chater.type != 'group' && chater.type != 'qq'">
          <img src="@/assets/WX/消息图标4.png" alt="" @click="topath" />
          <img src="@/assets/WX/消息图标5.png" alt="" @click="topath" />
          <img src="@/assets/WX/消息图标6.png" alt="" @click="topath" />
        </div>
        <div class="state">
          <!-- 语音切换 -->
          <button class="voice" @click='voice'>
            <img src="@/assets/WX/y.png" alt="" v-if="Texts">
            <img src="../Image/j.png" alt="" v-else>
          </button>
          <!-- 输入框 -->
          <textarea v-if="Texts" id="t" autofocus ref="myInput" @click="textareas" v-model="TentText"></textarea>
          <!-- 点击录音 -->
          <button class="Press" v-if="Press">按住 说话</button>
          <!-- 表情 -->
          <button class="expression" @click="expression">
            <img src="@/assets/WX/b.png" alt="">
          </button>
          <!-- 发送图片 -->
          <button class="file" @click="file" v-if="TentText ? false : true"></button>
          <!-- capture="camera" 相机拍照 -->
          <input type="file" style="display: none;" accept="image/*" multiple id="p" name="file"
            @change="onChooseImage($event)" />
          <!-- 发送文字内容 -->
          <button class="sendout" @click="sendout" v-if="TentText ? true : false">发送</button>
        </div>
        <div class="express" v-if="expsions">
          <div style="font-size: 24px; padding: 0.1rem 0.12rem; " @click="copy(item, index)" v-for="(item, index) in emolis"
            :key="index">{{ item.char }}</div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { ImagePreview } from 'vant';
export default {
  data() {
    return {
      chater: '',
      divhead: '',
      screenWidth: '',     // 屏幕宽
      screenHeight: '',    // 屏幕高
      list: [  //1为自己发送的消息，2为对面用户发送的消息，0为聊天时间
        { id: 1, cont: '山不在高，有仙则名。' },
        { id: 0, time: '2023-3-9 5:21' },
        { id: 2, cont: '水不在深，有龙则灵。' },
        { id: 2, cont: '斯是陋室，惟吾德馨。' },
        { id: 1, cont: '苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。' },
        { id: 2, cont: '可以调素琴，阅金经.' },
        { id: 1, cont: '无丝竹之乱耳，无案牍之劳形。' },
        { id: 1, cont: '南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？' },
        { id: 0, time: '2023-5-9 5:21' },
        { id: 2, cont: '这位兄台文韬武略，一看就是状元之才啊' },
        { id: 1, cont: '过奖了，岂敢岂敢' },
        { id: 1, cont: '兄台不如到寒舍一聚，把酒言欢，吟诗作赋如何' },
        { id: 2, cont: '甚好' },
        { id: 1, cont: '兄台请😀' },
        { id: 0, time: '2023-5-25 12:59' },
        { id: 2, img: 'https://cdn.seovx.com/ha/?mom=302' },
      ],
      TentText: '',
      getBrowString: '',
      hidden: true,
      Press: false,
      Texts: true,
      active_search: true,
      expsions: false,
      faceList: '',
      emolis: [
        { "char": "😍" },
        { "char": "😁" },
        { "char": "😘" },
        { "char": "🍎" },
        { "char": "🍏" },
        { "char": "🍊" },
        { "char": "🍋" },
        { "char": "😖" },
        { "char": "😉" },
        { "char": "😏" },
        { "char": "😏" },
        { "char": "🍒" },
        { "char": "🍇" },
        { "char": "🍉" },
        { "char": "🍓" },
        { "char": "🍑" },
        { "char": "🍈" },
        { "char": "🍌" },
        { "char": "🍐" },
        { "char": "🍍" },
        { "char": "🍆" },
        { "char": "🍅" },
        { "char": "🍠" },
        { "char": "🌽" },
        { "char": "😳" },
        { "char": "😡" },
        { "char": "😓" },
        { "char": "😭" },
        { "char": "😱" },
        { "char": "😜" },
        { "char": "😰" },
        { "char": "😢" },
        { "char": "😚" },
        { "char": "😄" },
        { "char": "😀" },
        { "char": "😪" },
        { "char": "😣" },
        { "char": "😔" },
        { "char": "😠" },
        { "char": "😌" },
        { "char": "😀" },
        { "char": "😝" },
        { "char": "😂" },
        { "char": "😥" },
        { "char": "😃" },
        { "char": "😞" },
        { "char": "😒" },
        { "char": "😀" },
        { "char": "👽" },
        { "char": "😄" },
        { "char": "😯" },
        { "char": "😂" },
        { "char": "😈" },
        { "char": "😀" },
        { "char": "😐" },
        { "char": "😃" },
        { "char": "😠" },
        { "char": "😑" },
        { "char": "😥" },
        { "char": "😬" },
        { "char": "😟" },
        { "char": "😢" },
        { "char": "😦" },
        { "char": "😱" },
        { "char": "😵" },
        { "char": "😴" },
        { "char": "😧" },
        { "char": "😙" },
        { "char": "😖" },
        { "char": "😛" },
        { "char": "😭" },
        { "char": "😒" },
        { "char": "😗" },
        { "char": "😚" },
        { "char": "😌" },
        { "char": "😪" },
        { "char": "😻" },
        { "char": "😏" },
        { "char": "🙆" },
        { "char": "😽" },
        { "char": "😄" },
        { "char": "😀" },
        { "char": "😕" },
        { "char": "😂" },
        { "char": "😅" },
        { "char": "😐" },
        { "char": "😃" },
        { "char": "😆" },
        { "char": "😑" },
        { "char": "😮" },
        { "char": "😨" },
        { "char": "😢" },
        { "char": "😦" },
        { "char": "😱" },
        { "char": "😵" },
        { "char": "😤" },
        { "char": "😶" },
        { "char": "😀" },
        { "char": "😝" },
        { "char": "😎" },
        { "char": "😞" },
        { "char": "😋" },
        { "char": "😔" },
        { "char": "😀" },
        { "char": "😒" },
        { "char": "😜" },
        { "char": "😌" },
        { "char": "😗" },
        { "char": "😏" },
        { "char": "🙊" },
        { "char": "👦" },
        { "char": "👩" },
        { "char": "😄" },
        { "char": "😃" },
        { "char": "😀" },
        { "char": "😀" },
        { "char": "😉" },
        { "char": "😗" },
        { "char": "😙" },
        { "char": "😜" },
        { "char": "😝" },
        { "char": "😛" },
        { "char": "😁" },
        { "char": "😌" },
        { "char": "💛" },
        { "char": "😒" },
        { "char": "😞" },
        { "char": "😣" },
        { "char": "😀" },
        { "char": "😂" },
        { "char": "😭" },
        { "char": "😪" },
        { "char": "😥" },
        { "char": "😅" },
        { "char": "😀" },
        { "char": "😩" },
        { "char": "😠" },
        { "char": "😤" },
        { "char": "😖" },
        { "char": "😋" },
        { "char": "😷" },
        { "char": "😴" },
        { "char": "😟" },
        { "char": "😦" },
        { "char": "😈" },
        { "char": "👿" },
        { "char": "😬" },
        { "char": "😯" },
        { "char": "😶" },
        { "char": "😇" },
        { "char": "😑" },
        { "char": "🍡" },
        { "char": "🍲" },
        { "char": "🍱" },
        { "char": "🍔" },
        { "char": "🍤" },
        { "char": "🍕" },
        { "char": "🍮" },
        { "char": "🍩" },
        { "char": "🍗" },
        { "char": "🍝" },
        { "char": "🍳" },
        { "char": "🍭" },
        { "char": "🍪" },
        { "char": "🍦" },
        { "char": "🍖" },
        { "char": "🍟" },
        { "char": "🍯" },
        { "char": "🍬" },
        { "char": "🍰" },
        { "char": "🍧" },
        { "char": "🍵" },
        { "char": "🍹" },
        { "char": "🍺" },
        { "char": "💔" },
        { "char": "💘" },
        { "char": "💜" },
        { "char": "💛" },
        { "char": "💚" },
        { "char": "💙" },
        { "char": "💬" },
        { "char": "💩" },
        { "char": "👍" },
        { "char": "👎" },
        { "char": "👊" },
        { "char": "✌" },
        { "char": "👌" },
        { "char": "🐮" },
        { "char": "🐧" },
        { "char": "🐷" },
        { "char": "🐍" },
        { "char": "🐆" },
        { "char": "🐠" },
        { "char": "🐒" },
        { "char": "🐬" },
        { "char": "🐞" },
        { "char": "🐌" },
        { "char": "🐾" },
        { "char": "🐜" },
        { "char": "🐙" },
        { "char": "🐵" },
        { "char": "🐉" },
        { "char": "🚝" },
        { "char": "🚋" },
        { "char": "🚃" },
        { "char": "🚌" },
        { "char": "🚍" },
        { "char": "🚙" },
        { "char": "🚘" },
        { "char": "🚗" },
        { "char": "🚕" },
        { "char": "🚖" },
        { "char": "🚛" },
        { "char": "🚓" },
        { "char": "🚒" },
        { "char": "🚲" },
        { "char": "🍸" }
      ]
    };
  },
  //每次页面渲染完之后滚动条在最底部
  updated() {
    this.scrollToBottom();
  },
  watch: {
    //每次变化，input获取焦点
    active_search: function (a, b) {
      if (b == true) {
        this.$refs.myInput.focus();
      }
    },
  },
  mounted() {
    this.chater = localStorage.getItem("chater") ? JSON.parse(localStorage.getItem("chater")) : '';
    var chat = localStorage.getItem("chat") ? JSON.parse(localStorage.getItem("chat")) : [];
    if (chat) {
      console.log("消息：", chat);
      this.list = this.list.concat(chat);
    }

    // 页面加载完成后显示
    this.divhead = document.getElementById('head').clientHeight + 20;  //头部高度
    this.screenWidth = document.documentElement.clientWidth;
    if (this.screenWidth > 550) { this.screenWidth = 550 }
    this.screenHeight = document.documentElement.clientHeight;
    rem()
    setTimeout(function () {
      var container = document.getElementById("MyCenter");
      container.scrollTop = container.scrollHeight * container.clientHeight
    }, 100);//延迟5000毫米
    // 监听屏幕可视区域的宽高
    window.onresize = () => {
      return (() => {
        this.screenWidth = document.documentElement.clientWidth;
        if (this.screenWidth > 550) { this.screenWidth = 550 }
        this.screenHeight = document.documentElement.clientHeight;
        // 监听光标跟着最后一个字符
        var textarea = document.getElementById("t");
        console.log("textarea", textarea);
        textarea.onfocus = function () {
          moveCaretToEnd(textarea);
          // Work around Chrome's little problem
          window.setTimeout(function () {
            moveCaretToEnd(textarea);
          }, 1);
        };
        rem()
      })();

    };
    this.scrollToBottom();
    function rem() {
      let html = document.documentElement;
      let w = html.clientWidth;
      html.style.fontSize = 100 * (w / 750) + "px"
    };
  },
  methods: {
    topath() {
      this.$router.push("/wxinfo");
    },
    goback() {
      this.$router.go(-1);
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = document.getElementById("MyCenter");
        // container.scrollTop = container.scrollHeight = container.clientHeight;
        container.scrollTop = container.scrollHeight * container.clientHeight
        // container.scrollTop = container.clientHeight

      })
    },
    // 点击获取当前的图片
    imgs(item) {
      ImagePreview({
        //点击获取当前的图片  大图
        images: [item.img],
      })
    },
    // 语音
    voice() {
      Toast('暂不支持此功能...');
      return;
      if (this.expsions) {
        this.expsions = !this.expsions; this.Press = !this.Press; this.Texts = !this.Texts;
      } else {
        this.Press = !this.Press; this.Texts = !this.Texts;
      }
    },
    back() {
      if (this.expsions) {
        this.expsions = false
      }
    },
    // 表情
    expression() {
      if (this.Press) {
        this.Press = !this.Press; this.Texts = !this.Texts; this.expsions = !this.expsions;
      } else {
        this.expsions = !this.expsions;
      }
      if (this.expsions == false) {
        this.$refs.myInput.focus();
      }
    },
    // 图片
    file() {
      //表情是否开启
      if (this.expsions) {
        this.expsions = false
      }
      document.getElementById('p').click()
    },
    onChooseImage: function (event) {
      //使用FileReader对文件对象进行操作
      let list = this.list
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //将读取到的文件编码成Data URL
      reader.onload = function () { //读取完成时
        var replaceSrc = reader.result; //文件输出的内容
        list.push({ id: 1, img: replaceSrc },)
      };
      console.log(this.list)
    },
    // 发送
    sendout() {
      // socket.send(this.TentText);
      this.list.push({ id: 1, cont: this.TentText })
      this.TentText = '';
      if (this.expsions == false) {
        this.$refs.myInput.focus();
      }

    },
    // 把表情复制到输入框中
    copy(item, index) {
      this.getBrowString = this.emolis[index].char;
      this.TentText += this.getBrowString;
    },
    textareas() {
      this.expsions = false
    },

  },
};
</script>
<style  scoped>
.header {
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #3A75C5;
  color: #FFFFFF;
  font-size: 0.3rem;
  letter-spacing: 2px;
  position: absolute;
  width: 100%;
  z-index: 100;
}

.header div {
  display: flex;
  align-items: center;
}

.header img {
  width: 0.8rem
}

* {
  padding: 0;
  margin: 0;
}

img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}

li {
  list-style: none;
}

.time {
  text-align: center;
  font-size: 0.24rem;
  margin: 0.25rem 0;
  font-weight: 500;
}

.content {
  background: #EBEBEB;
  padding: 0.2rem;
  overflow: scroll;
  box-sizing: border-box;
  padding-bottom: 0.8rem
}

span {
  word-wrap: break-word;
  font-weight: 500;
  letter-spacing: 1px;
}

.pop__chat-msg-me {
  display: flex;
  margin-bottom: .36rem;
  justify-content: flex-end;
}

.pop__chat-msg-me2 {
  display: flex;
  margin-bottom: .36rem
}

.pop__chat-msg-content {
  width: 6.29rem;
  display: flex;
  justify-content: flex-end;
}

.pop__chat-msg-content2 {
  width: 6.29rem;
}

.pop__chat-msg-content .pop__chat-msg-msg {
  float: right;
  background-color: #4cb4e7;
  border-color: #4cb4e7;
}

/* .pop__chat-msg-content .pop__chat-msg-msg1 {
    float: right;
    background-color: #88cdda;
    border-color: #88cdda;
} */

.pop__chat-msg-msg {
  background-color: #4cb4e7;
  border-color: #4cb4e7;
  border-style: solid;
  border-width: 0.02rem;
  border-radius: .07rem;
  color: #333;
  float: left;
  font-size: .3rem;
  margin: 0 .2rem;
  padding: 0.15rem .2rem;
  max-width: 4.5rem;
  position: relative;
  color: #fff;
}

.pop__chat-msg-msg1 {
  /* background-color: #fff;
    border-color: #fff;
    border-style: solid; */
  border-width: 1px;
  border-radius: .07rem;
  color: #333;
  float: left;
  font-size: .3rem;
  margin: 0 .2rem;
  /* padding: .15rem .2rem; */
  max-width: 2rem;
  position: relative;
}

.pop__chat-msg-msg2 {
  background-color: #fff;
  border-color: #fff;
  border-style: solid;
  border-width: 1px;
  border-radius: .07rem;
  color: #333;
  float: left;
  font-size: .3rem;
  margin: 0 .2rem;
  padding: .15rem .2rem;
  max-width: 4.5rem;
  position: relative;
}

.pop__chat-msg-msg22 {
  /* background-color: #fff;
    border-color: #fff;
    border-style: solid; */
  border-width: 1px;
  border-radius: .07rem;
  /* color: #333; */
  float: left;
  font-size: .3rem;
  margin: 0 .2rem;
  max-width: 2rem;
  position: relative;
}

.pop__chat-msg-avatar {
  display: block;
  overflow: hidden;
  height: .85rem;
  width: .85rem;
  border-radius: 0.06rem;
}

.pop__clearfix:after {
  content: "";
  clear: both;
  display: block;
}

.pop__chat-msg-content .pop__chat-msg-msg:before {
  background: inherit;
  border-color: inherit;
  right: -.11rem;
  transform: translate(0, -50%) rotate(45deg);
}

.pop__chat-msg-content .pop__chat-msg-msg:before {
  content: '';
  display: inline-block;
  border-style: solid;
  border-width: .01rem .01rem 0 0;
  height: .2rem;
  width: .2rem;
  position: absolute;
  top: .3rem;
}

.pop__chat-msg-msg2:before {
  background: inherit;
  border-color: inherit;
  left: -0.11rem;
  transform: translate(0, -50%) rotate(45deg);
}

.pop__chat-msg-msg2:before {
  content: '';
  display: inline-block;
  border-style: solid;
  border-width: .01rem .01rem 0 0;
  height: .2rem;
  width: .2rem;
  position: absolute;
  top: .3rem;
}

/*  */

.pop__chat-msg-content .pop__chat-msg-msg1:before {
  background: inherit;
  border-color: inherit;
  right: -.11rem;
  transform: translate(0, -50%) rotate(45deg);
}

/* .pop__chat-msg-content .pop__chat-msg-msg1:before {
    content: '';
    display: inline-block;
    border-style: solid;
    border-width: .01rem .01rem 0 0;
    height: .2rem;
    width: .2rem;
    position: absolute;
    top: .3rem;
} */

/* .pop__chat-msg-msg22:before {
    background: inherit;
    border-color: inherit;
    left: -0.11rem;
    transform: translate(0, -50%) rotate(45deg);
}

.pop__chat-msg-msg22:before {
    content: '';
    display: inline-block;
    border-style: solid;
    border-width: .01rem .01rem 0 0;
    height: .2rem;
    width: .2rem;
    position: absolute;
    top: .3rem;
} */

/*  */
.icomess {
  height: 0.6rem;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 0.3rem;
  width: 100%;
  overflow: auto;
  overflow-y: hidden;
}

.icomess img {
  height: 0.6rem;
  border-radius: 0.5rem;
  width: 1.8rem;
  margin-left: 0.3rem;
}

.Bottom {
  width: 100%;
  position: absolute;
  bottom: 1.3rem;
  left: 0;
  background: #f7f7f7;
  box-shadow: 0px 0px 0.3rem 0px rgba(245, 245, 245, 0.25);
  /* display: flex; */
  border-top: 1px solid rgb(228, 228, 228);
  padding: 0.31rem 0 0;
}

.Bottom button {
  width: 0.52rem;
  height: 0.52rem;
  display: flex;
  align-self: center;
  text-align: center;
  margin: 0 0.14rem;
  border-radius: 50%;
  border: none;
  outline: none;
}

/* .expression {
    background-image: url(../Image/b.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
} */

.file {
  background-image: url('@/assets/WX/s.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}

.sendout {
  width: 1rem !important;
  height: 0.6rem !important;
  border-radius: 0.1rem !important;
  line-height: 0.65rem;
  padding: 0 0.24rem;
  font-size: 0.24rem;
  font-weight: 500;
  background: #297CF1;
  color: #fff;
}

.Bottom input {
  width: 63%;
  height: 0.76rem;
  display: flex;
  align-self: center;
  border: none;
  border-radius: 0.1rem;
  outline: none;
  font-size: 0.32rem;
  padding-left: 0.1rem;
  word-wrap: break-word;
}

.Bottom textarea {
  width: 64%;
  height: 0.56rem;
  display: flex;
  align-self: center;
  border: none;
  border-radius: 0.1rem;
  outline: none;
  font-size: 0.32rem;
  padding-left: 0.1rem;
  word-wrap: break-word;
  padding-top: 0.1rem;
  resize: none;
}

.Press {
  width: 65% !important;
  height: 0.76rem !important;
  border-radius: 0.1rem !important;
  background: #fff !important;
  padding: 0.16rem 1.75rem !important;
  font-size: 0.32rem !important;
  text-align: center !important;
  font-weight: 500;
  margin: 0 !important;
}

.Press:active {
  background: #EBEBEB !important;
}

.state {
  display: flex;
  padding-bottom: 0.31rem;
}

.express {
  transition: all 2s;
  height: 250px;
  display: flex;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 0.2rem 0.1rem 0;
  flex-wrap: wrap;
  overflow: scroll;
}
</style>