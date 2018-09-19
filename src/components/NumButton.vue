<template>
  <div class="buy-button">
    <span class="add" v-show="$store.getters.getCountNum(food.id)">
      <i class="iconfont icon-jianhao" @click.stop="$store.commit('subCount',food.id)"></i>
    </span>
    <span class="buy-num" v-show="$store.getters.getCountNum(food.id)">{{$store.getters.getCountNum(food.id)}}</span>
    <div class="add" ref="addbtn">
      <i class="iconfont icon-jiahao" @click.stop="add(food)"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buy-button {
  display: flex;
  align-items: center;
  .buy-num {
    font-size: 16px;
    color: #000;
    line-height: 20px;
    padding: 0 5px;
  }
  .add {
    position: relative;

    i {
      font-size: 20px;
      color: #00b3d4;
      position: relative;
      z-index: 10;
    }
  }
}
</style>

<script>
import Ball from "./Ball"
export default {
  name: "numbutton1",
  computed: {},
  props: ["food"],
  data: () => ({
    active: false
  }),
  components: { Ball },
  methods: {
    add(newCart) {
      console.log(this.$refs.addbtn.getBoundingClientRect())
      const x = this.$refs.addbtn.getBoundingClientRect().left
      const y = this.$refs.addbtn.getBoundingClientRect().top

      this.$store.commit("addToCart", newCart)
      this.$store.commit("goPlay")
      this.$store.commit("addBall", {
        x,
        y
      })
    }
  }
}
</script>
