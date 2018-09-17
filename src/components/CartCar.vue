<template>

  <div class="cartcar">
    <transition name="car-wrap">
      <div class="car-shadow" v-if="showCartCar&&getCar.length" @click="showCar"></div>
    </transition>
    <transition name="car">
      <div class="car-text" v-if="showCartCar&&getCar.length">
        <div class="car-title">
          <span>已选商品</span>
          <span class="clear" @click="clearCar">清空</span>
        </div>
        <div v-for="ele in getCar" :key="ele.id" class="car-item">
          <span>{{ele.name}}</span>
          <div>
            <span class="car-price">￥{{ele.price}}</span>
            <NumButton :food="ele" />
          </div>

        </div>
      </div>
    </transition>
  </div>

</template>

<style lang="scss">
.cartcar {
  width: 100%;
  position: absolute;
  top: 0;
  .car-shadow {
    background-color: #000;
    opacity: 0.6;
    flex-grow: 1;
    width: 100%;
    height: 100vh;
  }
  .car-text {
    flex-grow: 0;
    background-color: #fff;
    position: absolute;
    bottom: 12.8vw;
    width: 100%;
    > div {
      padding: 10px;
    }
    .car-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .clear {
        font-size: 14px;
        color: #777;
      }
    }
    .car-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 14.6vw;
      > div {
        display: flex;
        align-items: center;
      }
    }
  }
}

.car-enter-active {
  animation: up 0.2s;
}

.car-wrap-enter-active {
  animation: show 0.2s;
}

.car-leave-active {
  animation: up 0.2s reverse;
}

.car-wrap-leave-active {
  animation: show 0.2s reverse;
}
@keyframes up {
  0% {
    transform: translateY(100vh);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes show {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.6;
  }
}
.car-price {
  color: red;
  margin-right: 20px;
}
</style>

<script>
import NumButton from "./NumButton"
export default {
  name: "cartcat1",
  props: ["showCartCar", "showCar"],
  components: { NumButton },
  computed: {
    getCar() {
      return this.$store.state.carts.carts
    }
  },
  methods: {
    clearCar() {
      this.$store.commit("clearcarts")
      //showCartCar=false
      this.showCar()
    }
  }
}
</script>
