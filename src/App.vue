<template>
  <div class="app1">
    <Header/>
    <Main/>
  </div>
</template>


<script>
import Header from "./components/Header"
import Main from "./components/Main"
export default {
  name: "app1",
  components: { Header, Main },
  mounted() {
    this.$store.dispatch("getGoods")
    this.$store.dispatch("getRatings")
  }
}
</script>

<style lang="scss" scoped>
.app1 {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
