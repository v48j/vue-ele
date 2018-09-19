<template>
  <div class="order-box">
    <div class="order">
      <Menu ref="menu" :goScroll="goScroll" :nowTab="nowTab" :changeTab="changeTab" :clickMenu="clickMenu" :changeClickMenu="changeClickMenu" />
      <FoodList ref="foodlist" :changeTab="changeTab" :changeShowDetail="changeShowDetail" :gott="gott" :clickMenu="clickMenu" :cancelClickMenu="cancelClickMenu" />
    </div>
    <div class="footer" @click="showCar">
      <div class="footer-l">
        <transition name=carImg>
          <span :class="{buyCar:true, goScale:play}"></span>
        </transition>
        <span class="buy-car-stay"></span>
        <div>
          <span v-if="!total" :style="{fontSize:14+'px'}">未选择商品</span>
          <span v-else class="total-price">￥{{total}}</span>
          <span>另需配送费3元</span>
        </div>
      </div>
      <div class="footer-r">
        <span v-if="total<15">{{total!==0?"差":null}}￥{{15-total}}起送</span>
        <span v-else class="balance">去结算</span>
      </div>
    </div>
    <Ball :ballArr="getBall" />
    <GoodDetail :showDetail="showDetail" :changeShowDetail="changeShowDetail" />
    <CartCar :showCartCar="showCartCar" :showCar="showCar" />
  </div>
</template>

<script>
import Menu from "../components/Menu"
import FoodList from "../components/FoodList"
import GoodDetail from "../components/GoodDetail"
import CartCar from "../components/CartCar"
import Ball from "./Ball"
export default {
  name: "order1",
  components: { Menu, FoodList, GoodDetail, CartCar, Ball },
  computed: {
    
    getBall() {
      return this.$store.state.animations.ball
    },
    total() {
      return this.$store.getters.getAllPrice
    },
    play() {
      return this.$store.getters.getPlay
    }
  },
  data: () => ({
    nowTab: 0,
    showDetail: false,
    showCartCar: false,
    clickMenu: false
  }),
  methods: {
    changeClickMenu() {
      this.clickMenu = true
    },
    cancelClickMenu() {
      this.clickMenu = false
    },
    goScroll(target) {
      //获取原生dom元素结点footlist盒子
      const foodlist = this.$refs.foodlist
      //使用betterscroll提供的方法转向目标地
      foodlist.scroll.scrollToElement(foodlist.$refs[target][0], 800)
    },
    gott(target) {
      //获取原生dom元素结点footlist盒子
      const menu = this.$refs.menu
      //使用betterscroll提供的方法转向目标地
      if (menu) {
        menu.scroll.scrollToElement(menu.$refs[target][0], 800)
      }
    },
    changeTab(target) {
      this.nowTab = target
    },
    changeShowDetail(food) {
      this.showDetail = food
    },
    showCar() {
      if (this.$store.state.carts.carts.length) {
        this.showCartCar = !this.showCartCar
      } else {
        this.showCartCar = false
      }
    }
  },
  mounted() {
    this.$store.state.goods.goods
  }
}
</script>

<style lang="scss">
.order {
  display: flex;
  overflow: auto;
  height: 100%;
}
.order-box {
  display: flex;
  flex-direction: column;
}
.footer {
  height: 12.8vw;
  flex-shrink: 0;
  background-color: rgba(61, 61, 63, 0.9);
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 200;
}
.footer-r {
  span {
    color: #fff;
    line-height: 12.8vw;
    padding: 0 20px;
    font-weight: bold;
  }
  .balance {
    background-color: #38ca73;
    height: 12.8vw;
    display: inline-block;
  }
}
.footer-l {
  display: flex;
  justify-content: center;
  position: relative;
  .total-price {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
  }
  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      color: #ccc;
      font-size: 12px;
    }
  }
  .buyCar {
    background: url(../assets/images/buyCar1.svg) no-repeat 50% 50%;
    background-color: blue;
    border-radius: 50%;
    background-size: 6vw;
    border: 2px solid rgba(61, 61, 63, 0.9);
    width: 12vw;
    height: 12vw;
    display: inline-block;
    position: absolute;
    top: -10px;
    left: 10px;
    transition: all 0.8s;
  }
  .buy-car-stay {
    width: 11vw;
    margin-left: 20px;
    display: inline-block;
  }
}
@keyframes scaleCar {
  0% {
    transform: scale(1);
  }
  33% {
    transform: scale(0.8);
  }
  77% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.goScale {
  animation: scaleCar 0.4s linear 0s forwards;
}
</style>
