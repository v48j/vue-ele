<template>
  <div class="food-list" ref='wrapper'>
    <div v-show="goods.length">
      <div v-for="(good,ind) in goods" :key="good.id" class="hot foodtab" :ref="ind">
        <h3>{{good.name}}</h3>
        <div v-for="food in good.foods" :key="food.id" class="show-food" @click='goDetail(food)'>
          <img :src="food.image" alt="">
          <div class="show-food-text">
            <div>
              <p>{{food.name}}</p>
              <span>月售{{food.sellCount}}份　好评率{{food.rating}}%</span>
            </div>
            <div class="buy-box">
              <span class="price">￥{{food.price}}</span>
              <NumButton :food="food" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from "better-scroll"
import NumButton from "./NumButton.vue"
export default {
  name: "foodList",
  props: [
    "changeTab",
    "changeShowDetail",
    "gott",
    "cancelClickMenu",
    "clickMenu"
  ],
  data: () => ({
    can: false
  }),
  components: { NumButton },
  computed: {
    goods() {
      return this.$store.state.goods.goods
    },
    offsetTopList() {
      //获得一个数组，里面存有各个标签的y轴数值
      const tabs = document.querySelectorAll(".foodtab")
      let offsetTopList = []
      for (let i = 0; i < tabs.length; i++) {
        const ele = tabs[i]
        offsetTopList.push(ele.offsetTop - tabs[0].offsetTop)
      }

      return offsetTopList
    }
  },
  methods: {
    add(newCart) {
      this.$store.commit("addToCart", newCart)
    },
    goDetail(food) {
      this.changeShowDetail(food)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        probeType: 3,
        click: true
      })
      this.scroll.on("scroll", ({ x, y }) => {
        for (let i = 0; i < this.offsetTopList.length; i++) {
          if (-y < this.offsetTopList[i + 1] || !this.offsetTopList[i + 1]) {
            if (this.can && !this.clickMenu) {
              this.changeTab(i)
            }
            this.gott(i)
            break
          }
        }
      })
      this.scroll.on("scrollEnd", () => {
        this.cancelClickMenu()
        this.can = false
      })

      this.scroll.on("beforeScrollStart", () => {
        this.can = true
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.food-list {
  flex-grow: 1;
  overflow: auto;
  > div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    > div > div {
      padding: 2.666vw 0;
    }
  }
  h3 {
    line-height: 7.73vw;
    margin: 0;
  }
  .show-food {
    display: flex;
  }
  .show-food img {
    width: 25.3vw;
    height: 25.3vw;
  }
  .show-food-text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    flex-grow: 1;
    padding-right: 10px;
    justify-content: space-between;
  }
  .show-food-text p {
    margin: 0;
  }
  .show-food-text span {
    color: #aaa;
    font-size: 10px;
  }
  .buy-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 0;
  }
}
.buy-box .price {
  color: red;
  font-size: 16px;
}
.buy-box .buy-button {
  display: flex;
  align-items: center;
  .buy-num {
    font-size: 16px;
    color: #000;
    line-height: 20px;
    padding: 0 5px;
  }
  .add {
    i {
      font-size: 20px;
      color: #00b3d4;
    }
  }
}
</style>
