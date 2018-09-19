<template>
  <div class="ballbox">
    <transition-group name="fly" tag="div" class="aaa">
      <div class="ball" v-for="ele in ballArr" :key="ele.id" :style="{top:getXY.y+'px',left:getXY.x+'px'} "></div>
    </transition-group>
  </div>
</template>

<style lang="scss">
.ball {
  background-color: #00b3d4;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 0px;
  z-index: 999;
  top: 0;
}

.fly-enter-active {
  animation: ballani 0.5s;
}

@keyframes ballani {
  0% {
  }
  
  100% {
    top: 93vh;
    left: 26px;
  }
}
</style>

<script>
export default {
  name: "ball1",
  props: ["ballArr"],
  data: () => ({}),
  computed: {
    getXY() {
      return this.ballArr[0].position
    }
  }
}
</script>
