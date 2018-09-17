<template>
  <div class="header">
    <div class="show">
      <div class="top">
        <div class="wrap"></div>
        <img class="shop-logo" src="../assets/images/shop-logo.webp" alt="">
      </div>
      <div>
        <div class="shop-name" @click="shadowShow">
          <h1>开口福黄焖鸡米饭麻辣...</h1>
          <div>
            <span>评价4.5</span>
            <span>月售1313单</span>
            <span>蜂鸟转送约35分钟</span>
          </div>
        </div>
      </div>
    </div>
    <div :class="{shadowAll:true,shadowShow:shadow}">
      <div class="shadow" @click="shadowHid"></div>
      <div class="shadow-content">
        <h2>开口福黄焖鸡米饭麻辣香锅</h2>
        <div class="score">
          <div>
            <p>
              <b>4.5</b>
            </p>
            <p class="p2">评分</p>
          </div>
          <div>
            <p>
              <b>1313单</b>
            </p>
            <p class="p2">月售</p>
          </div>
          <div>
            <p>
              <b>蜂鸟专送</b>
            </p>
            <p class="p2">约35分钟</p>
          </div>
          <div>
            <p>
              <b>1元</b>
            </p>
            <p class="p2">配送费</p>
          </div>
          <div>
            <p>
              <b>849m</b>
            </p>
            <p class="p2">距离</p>
          </div>
        </div>
        <div class="notice">
          <p class="p3">公告</p>
          <p class="p4">用餐高峰期请亲们提前下单.本店以送餐为主，如果亲们只选水饮料，米饭，是无法配送的，请亲们谅解！黄焖鸡不选口味默认不辣，麻辣香锅不选口味默认微辣，祝亲们生活愉快！</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "header1",
  methods: {
    shadowShow() {
      this.shadow = true
    },
    shadowHid() {
      this.shadow = false
    }
  },
  data: () => ({
    shadow: false
  })
}
</script>

<style scoped>
.header {
  flex-shrink: 0;
}

.top {
  height: 26.666vw;
  width: 100%;
  position: relative;
  background-image: url(../assets/images/top-bg.webp);
  background-size: cover;
  background-position: 50%;
}
.wrap {
  width: 100%;
  background: linear-gradient(#000, #fff);
  height: 100%;
  opacity: 0.3;
}
.top .shop-logo {
  width: 20%;
  position: absolute;
  top: 40%;
  left: 40%;
}
.shop-name {
  padding: 4vw 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.shop-name h1 {
  margin: 0;
  font-size: 24px;
}
.shop-name span {
  color: #aaa;
  font-size: 14px;
}
.shadowAll {
  display: none;
}
.shadowShow {
  display: block;
}
.shadow {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
  z-index: 100;
}
.shadow-content {
  width: 80%;
  padding: 4vw;
  background-color: #fff;
  position: absolute;
  top: 20%;
  left: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  z-index: 200;
}
.score {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.score p {
  margin: 0;
}
.score .p2 {
  color: #aaa;
}
.notice .p3 {
  line-height: 40px;
  color: #aaa;
}
.notice .p4 {
  text-align: left;
}
</style>

