<template>
  <div class="menu" ref="menu1">
    <ul>
      <li v-for="(name,ind) in goodsNameList" :key="ind" @click="go(ind)" :class="{activeTab:nowTab===ind}" :ref="ind">{{name}}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  flex-shrink: 0;
  flex-grow: 1;
  overflow: auto;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0 10px 0 0;
    > li {
      height: 13vw;
      background-color: #ccc;
      width: 20.5vw;
      text-align: center;
      line-height: 13vw;
      color: #aaa;
    }
  }
  .activeTab {
    background-color: #fff;
    color: #000;
  }
}
</style>

<script>
import Bscroll from "better-scroll"
export default {
  name: "menu1",
  props: ["goScroll", "nowTab", "changeTab"],
  computed: {
    goodsNameList() {
      return this.$store.getters.goodsNameList
    }
  },
  methods: {
    go(target) {
      this.goScroll(target)
      this.changeTab(target)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new Bscroll(this.$refs.menu1, {
        probeType: 3,
        click: true
      })
    })
  }
}
</script>
