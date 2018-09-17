<template>

  <transition name="detailbox">
    <div class="detail" v-if="showDetail">
      <div class="close" @click.stop="closeDetail()">
        <IconClose/>
      </div>
      <img :src="showDetail.image" class="food-bigimg" alt="">
      <div class="detail-text">
        <p class="detail-title">{{showDetail.name}}</p>
        <span class="sell-num">月售{{showDetail.sellCount}}份</span>
        <div class="buy-box">
          <span>￥{{showDetail.price}}</span>
          <div>
            <NumButton :food="showDetail" />
          </div>
        </div>
        <p class="detail-info">{{showDetail.info}}</p>
      </div>
    </div>
  </transition>

</template>

<style lang="scss" scoped>
.detail {
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  flex-direction: column;
  .detail-title {
    font-weight: bold;
    font-size: 22px;
  }
  .sell-num,
  .detail-info {
    font-size: 12px;
    color: #777;
  }
  p {
    margin: 0;
  }
  .detail-text {
    padding: 0 20px;
  }
  .buy-box {
    display: flex;
    justify-content: space-between;
  }
  .close {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .food-bigimg {
    width: 100vw;
    height: 100vw;
    flex-grow: 0;
  }
}
.detailbox-enter-active,
.detailbox-leave-active {
  transition: all 0.5s;
}
.detailbox-enter,
.detailbox-leave-to {
  transform: translateY(100vh);
}
</style>

<script>
import NumButton from "../components/NumButton"
import IconClose from "../components/IconClose"
export default {
  name: "gooddetail1",
  components: { NumButton, IconClose },
  methods: {
    closeDetail() {
      this.changeShowDetail(null)
    }
  },
  props: ["showDetail", "changeShowDetail"]
}
</script>
