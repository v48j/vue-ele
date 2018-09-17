<template>
  <div class="buy-button">
    <span class="add" v-show="$store.getters.getCountNum(food.id)">
      <i class="iconfont icon-jianhao" @click.stop="$store.commit('subCount',food.id)"></i>
    </span>
    <span class="buy-num" v-show="$store.getters.getCountNum(food.id)">{{$store.getters.getCountNum(food.id)}}</span>
    <span class="add">
      <i class="iconfont icon-jiahao" @click.stop="add(food)"></i>
    </span>
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
    i {
      font-size: 20px;
      color: #00b3d4;
    }
  }
}
</style>

<script>
export default {
  name: "numbutton1",
  props: ["food"],
  methods: {
    add(newCart) {
      this.$store.commit("addToCart", newCart)
      this.$store.commit("goPlay")
    }
  }
}
</script>
